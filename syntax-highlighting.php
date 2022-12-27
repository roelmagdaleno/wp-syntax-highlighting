<?php

/**
 * Plugin Name:       Syntax Highlighting by Torchlight
 * Plugin URI:        https://roelmagdaleno.com
 * Description:       Torchlight is a VS Code-compatible syntax highlighter that requires no JavaScript, supports every language, every VS Code theme, line highlighting, git diffing, and more.
 * Version:           0.1.0
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
