<?php

namespace Roel\WP\SyntaxHighlighting;

class SyntaxHighlighting {
	/**
	 * Register hooks.
	 * The hooks that will start the plugin functionality.
	 *
	 * @since 0.1.0
	 */
	public function hooks() {
		( new GutenbergBlock() )->hooks();
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_assets' ) );

		if ( ! is_admin() ) {
			return;
		}

		( new Settings() )->hooks();
	}

	public function enqueue_assets() {
		wp_enqueue_style(
			'torchlight-css',
			plugin_dir_url( __DIR__ ) . 'public/css/torchlight.css',
			null,
			SHT_VERSION
		);
	}
}
