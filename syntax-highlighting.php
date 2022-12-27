<?php

/**
 * Plugin Name:       Syntax Highlighting powered by Torchlight
 * Plugin URI:        https://roelmagdaleno.com
 * Description:       A Gutenberg block that syntax highlights your code powered by Torchlight API.
 * Version:           0.2.0
 * Requires at least: 5.0
 * Requires PHP:      7.4
 * Author:            Roel Magdaleno
 * Author URI:        https://roelmagdaleno.com
 */

use Roel\WP\SyntaxHighlighting\SyntaxHighlighting;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/constants.php';

( new SyntaxHighlighting() )->hooks();
