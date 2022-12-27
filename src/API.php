<?php

namespace Roel\WP\SyntaxHighlighting;

use WP_Error;

class API {
	/**
	 * The API endpoint.
	 *
	 * @since 0.1.0
	 *
	 * @var   string   $endpoint   The API endpoint.
	 */
	protected string $endpoint = 'https://api.torchlight.dev/highlight';

	/**
	 * Syntax highlight the passed `$content`.
	 *
	 * The `$content` is a piece of code. It also accepts attributes
	 * where you can edit the final code view.
	 *
	 * The attributes are from the Torchlight API.
	 *
	 * @since  0.1.0
	 *
	 * @link   https://torchlight.dev/docs/options
	 *
	 * @param  string   $content      The code to syntax highlight.
	 * @param  array    $attributes   The Torchlight API attributes.
	 * @return array|WP_Error         The highlighted code or WP_Error if fails.
	 */
	public function highlight( string $content, array $attributes ) {
		if ( empty( $content ) ) {
			return new WP_Error( 'There is no content to highlight.' );
		}

		$settings = get_option( 'syntax_highlighting_settings', array() );

		if ( empty( $settings ) || empty( $settings['api_token'] ) ) {
			return new WP_Error( 'The API Key does not exist.' );
		}

		$search  = array( '<br>' );
		$replace = array( "\n" );
		$content = str_replace( $search, $replace, $content );
		$theme   = $attributes['theme'] ?? $settings['theme'] ?? SHT_DEFAULT_THEME;

		$body = array(
			'blocks'  => array(
				array(
					'language' => $attributes['language'] ?? 'plaintext',
					'theme'    => $theme,
					'code'     => $content,
				),
			),
			'options' => array(
				'diffIndicators'   => $attributes['diffIndicators'] ?? true,
				'lineNumbers'      => $attributes['lineNumbers'] ?? false,
				'lineNumbersStart' => $attributes['lineNumbersStart'] ?? 1,
			),
		);

		$args = array(
			'headers' => array(
				'Authorization'       => 'Bearer ' . trim( $settings['api_token'] ),
				'Content-Type'        => 'application/json',
				'X-Torchlight-Client' => 'Torchlight CLI',
			),
			'body'    => wp_json_encode( $body ),
		);

		$response = wp_remote_post( $this->endpoint, $args );

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		$body = wp_remote_retrieve_body( $response );

		if ( empty( $body ) ) {
			return new WP_Error( 'The API response is empty.' );
		}

		$body = json_decode( $body, true );

		return array(
			'syntax_highlighted' => $body['blocks'][0]['wrapped'],
			'styles'             => $body['blocks'][0]['styles'],
		);
	}
}
