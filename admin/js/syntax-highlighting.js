/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dev/js/edit.js":
/*!************************!*\
  !*** ./dev/js/edit.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SyntaxHighlightingEdit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



function SyntaxHighlightingEdit(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  const {
    content,
    diffIndicators,
    language,
    lineNumbers,
    lineNumbersStart,
    theme
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Syntax Highlighting",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Language",
    value: language,
    options: [{
      label: 'ABAP',
      value: 'abap'
    }, {
      label: 'Actionscript 3',
      value: 'actionscript-3'
    }, {
      label: 'Ada',
      value: 'ada'
    }, {
      label: 'Alpine.js',
      value: 'alpine | alpinejs'
    }, {
      label: 'Apex',
      value: 'apex'
    }, {
      label: 'Applescript',
      value: 'applescript'
    }, {
      label: 'Assembly',
      value: 'asm'
    }, {
      label: 'AWK',
      value: 'awk'
    }, {
      label: 'Batch',
      value: 'bat | batch'
    }, {
      label: 'C',
      value: 'c'
    }, {
      label: 'C#',
      value: 'csharp | c#'
    }, {
      label: 'C++',
      value: 'cpp'
    }, {
      label: 'Clojure',
      value: 'clojure | clj'
    }, {
      label: 'Cobol',
      value: 'cobol'
    }, {
      label: 'Coffee Script',
      value: 'coffee'
    }, {
      label: 'Crystal',
      value: 'crystal'
    }, {
      label: 'CSS',
      value: 'css'
    }, {
      label: 'Curl',
      value: 'curl'
    }, {
      label: 'D',
      value: 'd'
    }, {
      label: 'Dart',
      value: 'dart'
    }, {
      label: 'Dockerfile',
      value: 'dockerfile'
    }, {
      label: 'Elixir',
      value: 'elixir'
    }, {
      label: 'Elm',
      value: 'elm'
    }, {
      label: 'Embedded Ruby (ERB)',
      value: 'html-ruby-erb | erb'
    }, {
      label: 'Erlang',
      value: 'erlang'
    }, {
      label: 'F#',
      value: 'fsharp | f#'
    }, {
      label: 'git-commit',
      value: 'git-commit'
    }, {
      label: 'git-diff',
      value: 'diff'
    }, {
      label: 'git-ignore',
      value: 'git-ignore | gitignore'
    }, {
      label: 'git-rebase',
      value: 'git-rebase'
    }, {
      label: 'gnuplot',
      value: 'gnuplot'
    }, {
      label: 'Go',
      value: 'go'
    }, {
      label: 'GraphQL',
      value: 'graphql'
    }, {
      label: 'Groovy',
      value: 'groovy'
    }, {
      label: 'Hack',
      value: 'hack'
    }, {
      label: 'Haml',
      value: 'haml'
    }, {
      label: 'Handlebars',
      value: 'handlebars | hbs'
    }, {
      label: 'HashiCorp Configuration Language',
      value: 'hcl'
    }, {
      label: 'Haskell',
      value: 'haskell'
    }, {
      label: 'HLSL',
      value: 'hlsl'
    }, {
      label: 'HTML',
      value: 'html'
    }, {
      label: 'INI',
      value: 'ini'
    }, {
      label: 'Java',
      value: 'java'
    }, {
      label: 'JavaScript',
      value: 'javascript | js'
    }, {
      label: 'Jinja HTML',
      value: 'jinja-html'
    }, {
      label: 'JSON',
      value: 'json'
    }, {
      label: 'jsonc',
      value: 'jsonc'
    }, {
      label: 'Jsonnet',
      value: 'jsonnet'
    }, {
      label: 'JSX',
      value: 'jsx'
    }, {
      label: 'Julia',
      value: 'julia'
    }, {
      label: 'Kotlin',
      value: 'kotlin'
    }, {
      label: 'Laravel Blade',
      value: 'blade'
    }, {
      label: 'Latex',
      value: 'latex | tex'
    }, {
      label: 'Less',
      value: 'less'
    }, {
      label: 'Lisp',
      value: 'lisp'
    }, {
      label: 'Logo',
      value: 'logo'
    }, {
      label: 'Lua',
      value: 'lua'
    }, {
      label: 'Makefile',
      value: 'makefile'
    }, {
      label: 'Markdown',
      value: 'markdown | md'
    }, {
      label: 'MATLAB',
      value: 'matlab'
    }, {
      label: 'MDX',
      value: 'mdx'
    }, {
      label: 'Nix',
      value: 'nix'
    }, {
      label: 'Objective-C',
      value: 'objective-c | objc'
    }, {
      label: 'OCaml',
      value: 'ocaml'
    }, {
      label: 'Pascal',
      value: 'pascal'
    }, {
      label: 'Perl',
      value: 'perl'
    }, {
      label: 'Perl6',
      value: 'perl6'
    }, {
      label: 'PHP',
      value: 'php'
    }, {
      label: 'Plaintext',
      value: '(null) | txt | text | plaintext'
    }, {
      label: 'PLSQL',
      value: 'pls'
    }, {
      label: 'PostCSS',
      value: 'postcss'
    }, {
      label: 'PowerShell',
      value: 'powershell | ps | ps1'
    }, {
      label: 'Prolog',
      value: 'prolog'
    }, {
      label: 'Pug',
      value: 'pug | jade'
    }, {
      label: 'Puppet',
      value: 'puppet'
    }, {
      label: 'PureScript',
      value: 'purescript'
    }, {
      label: 'Python',
      value: 'python | py'
    }, {
      label: 'R',
      value: 'r'
    }, {
      label: 'Razor',
      value: 'razor'
    }, {
      label: 'Ruby',
      value: 'ruby | rb'
    }, {
      label: 'Rust',
      value: 'rust'
    }, {
      label: 'SAS',
      value: 'sas'
    }, {
      label: 'Sass',
      value: 'sass'
    }, {
      label: 'Scala',
      value: 'scala'
    }, {
      label: 'Scheme',
      value: 'scheme'
    }, {
      label: 'SCSS',
      value: 'scss'
    }, {
      label: 'ShaderLab',
      value: 'shaderlab | shader'
    }, {
      label: 'Shell',
      value: 'shell'
    }, {
      label: 'Smalltalk',
      value: 'smalltalk'
    }, {
      label: 'SQL',
      value: 'sql'
    }, {
      label: 'ssh-config',
      value: 'ssh-config'
    }, {
      label: 'Statamic Antlers',
      value: 'antlers'
    }, {
      label: 'Stylus',
      value: 'stylus | styl'
    }, {
      label: 'Swift',
      value: 'swift'
    }, {
      label: 'Tcl',
      value: 'tcl'
    }, {
      label: 'TOML',
      value: 'toml'
    }, {
      label: 'tsx',
      value: 'tsx'
    }, {
      label: 'TypeScript',
      value: 'typescript | ts'
    }, {
      label: 'VB',
      value: 'vb | cmd'
    }, {
      label: 'VimL',
      value: 'viml'
    }, {
      label: 'Vue',
      value: 'vue'
    }, {
      label: 'WebAssembly',
      value: 'wasm'
    }, {
      label: 'Wenyan',
      value: '文言 | wenyan'
    }, {
      label: 'XML',
      value: 'xml'
    }, {
      label: 'XSL',
      value: 'xsl'
    }, {
      label: 'YAML',
      value: 'yaml'
    }],
    onChange: language => setAttributes({
      language
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Theme",
    value: theme,
    options: [{
      label: 'Atom One Dark',
      value: 'atom-one-dark'
    }, {
      label: 'Cobalt2',
      value: 'cobalt2'
    }, {
      label: 'Dark 404',
      value: 'dark-404'
    }, {
      label: 'Dark Plus',
      value: 'dark-plus'
    }, {
      label: 'Deep Purple',
      value: 'deep-purple'
    }, {
      label: 'Dracula',
      value: 'dracula'
    }, {
      label: 'Fortnite',
      value: 'fortnite'
    }, {
      label: 'Github Dark',
      value: 'github-dark'
    }, {
      label: 'Github Light',
      value: 'github-light'
    }, {
      label: 'Iceberg Dark',
      value: 'iceberg-dark'
    }, {
      label: 'Light Plus',
      value: 'light-plus'
    }, {
      label: 'Liver Dark',
      value: 'liver-dark'
    }, {
      label: 'Liver Purple',
      value: 'liver-purple'
    }, {
      label: 'Material Facebook',
      value: 'material-facebook'
    }, {
      label: 'Material Theme Darker',
      value: 'material-theme-darker'
    }, {
      label: 'Material Theme Default',
      value: 'material-theme-default'
    }, {
      label: 'Material Theme Lighter',
      value: 'material-theme-lighter'
    }, {
      label: 'Material Theme Ocean',
      value: 'material-theme-ocean'
    }, {
      label: 'Material Theme Palenight',
      value: 'material-theme-palenight'
    }, {
      label: 'Min Dark',
      value: 'min-dark'
    }, {
      label: 'Min Light',
      value: 'min-light'
    }, {
      label: 'Monokai',
      value: 'monokai'
    }, {
      label: 'Monokuro Blue',
      value: 'monokuro-blue'
    }, {
      label: 'Monokuro Brown',
      value: 'monokuro-brown'
    }, {
      label: 'Monokuro Cyan',
      value: 'monokuro-cyan'
    }, {
      label: 'Monokuro Gray',
      value: 'monokuro-gray'
    }, {
      label: 'Monokuro Green',
      value: 'monokuro-green'
    }, {
      label: 'Monokuro Indigo',
      value: 'monokuro-indigo'
    }, {
      label: 'Monokuro Lime',
      value: 'monokuro-lime'
    }, {
      label: 'Monokuro Orange',
      value: 'monokuro-orange'
    }, {
      label: 'Monokuro Pink',
      value: 'monokuro-pink'
    }, {
      label: 'Monokuro Purple',
      value: 'monokuro-purple'
    }, {
      label: 'Monokuro Red',
      value: 'monokuro-red'
    }, {
      label: 'Monokuro Teal',
      value: 'monokuro-teal'
    }, {
      label: 'Monokuro Yellow',
      value: 'monokuro-yellow'
    }, {
      label: 'Moonlight II',
      value: 'moonlight-ii'
    }, {
      label: 'Moonlight',
      value: 'moonlight'
    }, {
      label: 'Night Owl',
      value: 'night-owl'
    }, {
      label: 'Nord',
      value: 'nord'
    }, {
      label: 'Olaolu Olawuyi\'s Palenight',
      value: 'olaolu-palenight'
    }, {
      label: 'One Dark Pro',
      value: 'one-dark-pro'
    }, {
      label: 'Serendipity Dark',
      value: 'serendipity-dark'
    }, {
      label: 'Serendipity Light',
      value: 'serendipity-light'
    }, {
      label: 'Shades of Purple',
      value: 'shades-of-purple'
    }, {
      label: 'Slack Theme Dark Mode',
      value: 'slack-theme-dark-mode'
    }, {
      label: 'Slack Theme Ochin',
      value: 'slack-theme-ochin'
    }, {
      label: 'Solarized Dark',
      value: 'solarized-dark'
    }, {
      label: 'Solarized Light',
      value: 'solarized-light'
    }, {
      label: 'Synthwave 84',
      value: 'synthwave-84'
    }, {
      label: 'Winter Is Coming Blue',
      value: 'winter-is-coming-blue'
    }, {
      label: 'Winter Is Coming Dark',
      value: 'winter-is-coming-dark'
    }, {
      label: 'Winter Is Coming Light',
      value: 'winter-is-coming-light'
    }, {
      label: 'Yellow Delight',
      value: 'yellow-delight'
    }],
    onChange: theme => setAttributes({
      theme
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "Line Numbers",
    checked: lineNumbers,
    onChange: lineNumbers => setAttributes({
      lineNumbers
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Line number starts at",
    value: lineNumbersStart,
    onChange: lineNumbersStart => setAttributes({
      lineNumbersStart
    }),
    type: "number"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "Diff Indicators",
    checked: diffIndicators,
    onChange: diffIndicators => setAttributes({
      diffIndicators
    })
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("pre", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "code",
    value: content || '',
    onChange: content => setAttributes({
      content
    }),
    placeholder: "Paste your code",
    "aria-label": "Code",
    withoutInteractiveFormatting: true,
    preserveWhitespace: true,
    __unstablePastePlainText: true
  }))));
}
;

/***/ }),

/***/ "./dev/js/save.js":
/*!************************!*\
  !*** ./dev/js/save.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./dev/js/utils.js");



function save(_ref) {
  let {
    attributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("pre", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "code",
    value: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.escape)(attributes.content)
  })));
}
;

/***/ }),

/***/ "./dev/js/utils.js":
/*!*************************!*\
  !*** ./dev/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "escape": () => (/* binding */ escape)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */


/**
 * Escapes ampersands, shortcodes, and links.
 *
 * @param {string} content The content of a code block.
 * @return {string} The given content with some characters escaped.
 */
function escape(content) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.flow)(escapeOpeningSquareBrackets, escapeProtocolInIsolatedUrls)(content || '');
}

/**
 * Returns the given content with all opening shortcode characters converted
 * into their HTML entity counterpart (i.e. [ => &#91;). For instance, a
 * shortcode like [embed] becomes &#91;embed]
 *
 * This function replicates the escaping of HTML tags, where a tag like
 * <strong> becomes &lt;strong>.
 *
 * @param {string} content The content of a code block.
 * @return {string} The given content with its opening shortcode characters
 *                  converted into their HTML entity counterpart
 *                  (i.e. [ => &#91;)
 */
function escapeOpeningSquareBrackets(content) {
  return content.replace(/\[/g, '&#91;');
}

/**
 * Converts the first two forward slashes of any isolated URL into their HTML
 * counterparts (i.e. // => &#47;&#47;). For instance, https://youtube.com/watch?x
 * becomes https:&#47;&#47;youtube.com/watch?x.
 *
 * An isolated URL is a URL that sits in its own line, surrounded only by spacing
 * characters.
 *
 * See https://github.com/WordPress/wordpress-develop/blob/5.1.1/src/wp-includes/class-wp-embed.php#L403
 *
 * @param {string} content The content of a code block.
 * @return {string} The given content with its ampersands converted into
 *                  their HTML entity counterpart (i.e. & => &amp;)
 */
function escapeProtocolInIsolatedUrls(content) {
  return content.replace(/^(\s*https?:)\/\/([^\s<>"]+\s*)$/m, '$1&#47;&#47;$2');
}

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./dev/js/syntax-highlighting.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./dev/js/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./dev/js/save.js");



const syntaxHighlighting = settings => {
  if (settings.name !== 'core/code') {
    return settings;
  }
  const pluginData = window.SHT_DATA || {
    theme: ''
  };
  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      diffIndicators: {
        type: 'boolean',
        default: true
      },
      language: {
        type: 'string'
      },
      lineNumbers: {
        type: 'boolean',
        default: false
      },
      lineNumbersStart: {
        type: 'integer',
        default: 1
      },
      theme: {
        type: 'string',
        default: pluginData.theme
      }
    },
    edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
    save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
  };
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'roelmagdaleno/syntax-highlighting', syntaxHighlighting);
})();

/******/ })()
;
//# sourceMappingURL=syntax-highlighting.js.map