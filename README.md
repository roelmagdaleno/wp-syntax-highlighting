# Syntax Highlighting powered by Torchlight

This WordPress plugin provides a Gutenberg block that syntax highlights your code powered by [Torchlight](https://torchlight.dev/).

## Installation

Download this repository inside the `wp-content/plugins` folder, then access the folder and run the `composer install` command. This will install the required dependencies.

Before use this plugin you need to create an API Key from Torchlight. If you don't have an account, [register here](https://app.torchlight.dev/register).

After you obtain the API Token, copy and paste it in the plugin's settings page: `Settings > Syntax Highlighting`.

## Usage

In your Gutenberg editor, insert a code block and paste your code. In the sidebar you'll see the Syntax Highlighting options:

### Gutenberg Options

- Language. The code block programming language.
- Theme. The code block theme.
- Line numbers. Whether to show line numbers in the code block.
- Line number starts at. Start the line numbers at a specific number.
- Diff indicators. Whether to show the diff indicators in the code block.

## Server Side Rendering

The Gutenberg block won't use any JavaScript to syntax highlight your code. It will highlight your code using the [Torchlight API](https://torchlight.dev/) in the backend, and send the response to your frontend.

## Cache

When you syntax highlight your code for the first time, it will run a request to Torchlight API and the response will be stored in a WordPress transient.

The transient key contains a `md5` hash value constructed from the code block attributes and the content (or code).

A transient key looks like this:

```text
_transient_syntax_highlighting_55116e908cd06545a7e4bef7f1ce2d2f	
```

The transient expiration is one month, that means when it expires the code block needs to run the API request again.

## Settings

The plugin accepts 2 settings:

- API Token. Your Torchlight API Token.
- Theme. The default code theme. You can change the theme later for a specific block.

## Themes

See the supported themes in the [documentation](https://torchlight.dev/docs/themes).

## Languages

See the supported languages in the [documentation](https://torchlight.dev/docs/languages).

## Credits

WordPress Plugin written and maintained by [Roel Magdaleno](https://roelmagdaleno.com).

Powered by [Torchlight](https://torchlight.dev/), built with love and care by [Aaron](https://twitter.com/aarondfrancis).
