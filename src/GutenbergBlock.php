<?php

namespace Roel\WP\SyntaxHighlighting;

use WP_Block_Type_Registry;

class GutenbergBlock {
	/**
	 * The script name.
	 *
	 * @since 0.1.0
	 *
	 * @var   string   $script   The script name.
	 */
	public string $script = 'syntax-highlighting.js';

	/**
	 * Register hooks.
	 * The hooks that will start the plugin functionality.
	 *
	 * @since 0.1.0
	 */
	public function hooks() {
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_assets' ) );
		add_action( 'init', array( $this, 'register_block_type' ) );
	}

	/**
	 * Enqueue the assets in the Gutenberg editor.
	 *
	 * @since 0.1.0
	 */
	public function enqueue_assets() {
		wp_enqueue_script(
			$this->script,
			plugins_url( 'admin/js/' . $this->script, __DIR__ ),
			null,
			SHT_VERSION,
			true
		);

		$settings = get_option( 'syntax_highlighting_settings', array() );

		if ( empty( $settings ) ) {
			return;
		}

		wp_localize_script( $this->script, 'SHT_DATA', array(
			'theme' => $settings['theme'] ?? 'github-dark',
		) );
	}

	/**
	 * Register the block type.
	 * The block type is the Gutenberg block namespace.
	 *
	 * @since 0.1.0
	 */
	public function register_block_type() {
		$block      = 'core/code';
		$attributes = array(
			'diffIndicators'   => array( 'type' => 'boolean', 'default' => true ),
			'language'         => array( 'type' => 'string' ),
			'lineNumbers'      => array( 'type' => 'boolean', 'default' => false ),
			'lineNumbersStart' => array( 'type' => 'integer', 'default' => 1 ),
			'theme'            => array( 'type' => 'string' ),
		);

		$registry = WP_Block_Type_Registry::get_instance();

		if ( $registry->is_registered( $block ) ) {
			$block                  = $registry->get_registered( $block );
			$block->render_callback = array( $this, 'render' );
			$block->attributes      = array_merge( $block->attributes, $attributes );

			return;
		}

		$args = array(
			'editor_script'   => $this->script,
			'render_callback' => array( $this, 'render' ),
			'attributes'      => $attributes,
		);

		register_block_type( $block, $args );
	}

	public function render( $attributes, $content ) {
		$encoded_data   = wp_json_encode( $attributes ) . $content;
		$transient_key  = 'syntax_highlighting_' . md5( $encoded_data );
		$cached_content = get_transient( $transient_key );

		if ( $cached_content ) {
			return $cached_content;
		}

		$pattern = '/<pre(?:.*?)><code(?:.*?)>(.*?)<\/code><\/pre>/m';
		preg_match( $pattern, $content, $matches );

		if ( empty( $matches ) || empty( $matches[1] ) ) {
			return $content;
		}

		$api         = new API();
		$new_content = html_entity_decode( $matches[1], ENT_QUOTES );
		$response    = $api->highlight( $new_content, $attributes );

		if ( is_wp_error( $response ) ) {
			return $content;
		}

		$new_content = $response['syntax_highlighted'] ?? '';

		set_transient( $transient_key, $new_content, MONTH_IN_SECONDS );

		return $new_content;
	}
}
