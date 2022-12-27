<?php

namespace Roel\WP\SyntaxHighlighting;

use Roel\WP\Settings\Group;
use Roel\WP\Settings\Elements\{
	Select,
	Text,
};

class Settings {
	/**
	 * The page slug.
	 *
	 * @since 0.1.0
	 *
	 * @var   string   $page   The page slug.
	 */
	protected string $page = 'syntax-highlighting';

	/**
	 * Register hooks.
	 * The hooks that will start the plugin functionality.
	 *
	 * @since 0.1.0
	 */
	public function hooks() : void {
		add_action( 'admin_menu', array( $this, 'register_menu' ) );
		add_action( 'admin_init', array( $this, 'register_settings' ) );
	}

	/**
	 * Register the submenu page.
	 * The submenu page will include the plugin's options page.
	 *
	 * @since 0.1.0
	 */
	public function register_menu() : void {
		add_submenu_page(
			'options-general.php',
			'Syntax Highlighting',
			'Syntax Highlighting',
			'manage_options',
			$this->page,
			array( $this, 'render' )
		);
	}

	/**
	 * Register the settings to render in the options page.
	 * Each setting must be a component instance.
	 *
	 * @since 0.1.0
	 */
	public function register_settings() : void {
		$setting     = 'syntax_highlighting';
		$option_name = $setting . '_settings';

		register_setting( $setting . '_group', $option_name );

		add_settings_section(
			$this->page,
			'Settings',
			function () {},
			$this->page
		);

		$group = new Group( array(
			new Text( 'api_token', array(
				'label'       => 'API Token',
				'description' => 'Your Torchlight API Token.',
			) ),
			new Select( 'theme', array(
				'label'         => 'Theme',
				'description'   => 'Check the <a href="https://torchlight.dev/docs/themes" target="_blank">available themes</a>. You can change the theme later for a specific block.',
				'options'       => array(
					'atom-one-dark'            => array( 'label' => 'Atom One Dark' ),
					'cobalt2'                  => array( 'label' => 'Cobalt2' ),
					'dark-404'                 => array( 'label' => 'Dark 404' ),
					'dark-plus'                => array( 'label' => 'Dark Plus' ),
					'deep-purple'              => array( 'label' => 'Deep Purple' ),
					'dracula'                  => array( 'label' => 'Dracula' ),
					'fortnite'                 => array( 'label' => 'Fortnite' ),
					'github-dark'              => array( 'label' => 'Github Dark' ),
					'github-light'             => array( 'label' => 'Github Light' ),
					'iceberg-dark'             => array( 'label' => 'Iceberg Dark' ),
					'light-plus'               => array( 'label' => 'Light Plus' ),
					'liver-dark'               => array( 'label' => 'Liver Dark' ),
					'liver-purple'             => array( 'label' => 'Liver Purple' ),
					'material-facebook'        => array( 'label' => 'Material Facebook' ),
					'material-theme-darker'    => array( 'label' => 'Material Theme Darker' ),
					'material-theme-default'   => array( 'label' => 'Material Theme Default' ),
					'material-theme-lighter'   => array( 'label' => 'Material Theme Lighter' ),
					'material-theme-ocean'     => array( 'label' => 'Material Theme Ocean' ),
					'material-theme-palenight' => array( 'label' => 'Material Theme Palenight' ),
					'min-dark'                 => array( 'label' => 'Min Dark' ),
					'min-light'                => array( 'label' => 'Min Light' ),
					'monokai'                  => array( 'label' => 'Monokai' ),
					'monokuro-blue'            => array( 'label' => 'Monokuro Blue' ),
					'monokuro-brown'           => array( 'label' => 'Monokuro Brown' ),
					'monokuro-cyan'            => array( 'label' => 'Monokuro Cyan' ),
					'monokuro-gray'            => array( 'label' => 'Monokuro Gray' ),
					'monokuro-green'           => array( 'label' => 'Monokuro Green' ),
					'monokuro-indigo'          => array( 'label' => 'Monokuro Indigo' ),
					'monokuro-lime'            => array( 'label' => 'Monokuro Lime' ),
					'monokuro-orange'          => array( 'label' => 'Monokuro Orange' ),
					'monokuro-pink'            => array( 'label' => 'Monokuro Pink' ),
					'monokuro-purple'          => array( 'label' => 'Monokuro Purple' ),
					'monokuro-red'             => array( 'label' => 'Monokuro Red' ),
					'monokuro-teal'            => array( 'label' => 'Monokuro Teal' ),
					'monokuro-yellow'          => array( 'label' => 'Monokuro Yellow' ),
					'moonlight'                => array( 'label' => 'Moonlight' ),
					'moonlight-ii'             => array( 'label' => 'Moonlight II' ),
					'night-owl'                => array( 'label' => 'Night Owl' ),
					'nord'                     => array( 'label' => 'Nord' ),
					'olaolu-palenight'         => array( 'label' => 'Olaolu Olawuyi\'s Palenight' ),
					'one-dark-pro'             => array( 'label' => 'One Dark Pro' ),
					'serendipity-dark'         => array( 'label' => 'Serendipity Dark' ),
					'serendipity-light'        => array( 'label' => 'Serendipity Light' ),
					'shades-of-purple'         => array( 'label' => 'Shades of Purple' ),
					'slack-theme-dark-mode'    => array( 'label' => 'Slack Theme Dark Mode' ),
					'slack-theme-ochin'        => array( 'label' => 'Slack Theme Ochin' ),
					'solarized-dark'           => array( 'label' => 'Solarized Dark' ),
					'solarized-light'          => array( 'label' => 'Solarized Light' ),
					'synthwave-84'             => array( 'label' => 'Synthwave 84' ),
					'winter-is-coming-blue'    => array( 'label' => 'Winter Is Coming Blue' ),
					'winter-is-coming-dark'    => array( 'label' => 'Winter Is Coming Dark' ),
					'winter-is-coming-light'   => array( 'label' => 'Winter Is Coming Light' ),
					'yellow-delight'           => array( 'label' => 'Yellow Delight' ),
				),
			) ),
		), $option_name );

		foreach ( $group->elements() as $setting ) {
			add_settings_field(
				$setting->id(),
				'<label for="' . $setting->id() . '">' . $setting->label() . '</label>',
				array( $setting, 'print' ),
				$this->page,
				$this->page
			);
		}
	}

	/**
	 * Render the plugin's options page.
	 * It contains all plugin's settings.
	 *
	 * @since 0.1.0
	 */
	public function render() : void {
		include_once dirname( __DIR__ ) . '/admin/views/settings-page.php';
	}
}
