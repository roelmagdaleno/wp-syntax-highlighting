import {
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";

import {
	Panel,
	PanelBody,
	PanelRow,
	SelectControl,
	TextControl,
	ToggleControl,
} from "@wordpress/components";

export default function SyntaxHighlightingEdit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	const {
		content,
		diffIndicators,
		language,
		lineNumbers,
		lineNumbersStart,
		theme,
	} = attributes;

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody title = "Syntax Highlighting" initialOpen = { true }>
						<PanelRow>
							<SelectControl
								label = "Language"
								value = { language }
								options = { [
									{ label: 'ABAP', value: 'abap' },
									{ label: 'Actionscript 3', value: 'actionscript-3' },
									{ label: 'Ada', value: 'ada' },
									{ label: 'Alpine.js', value: 'alpinejs' },
									{ label: 'Apex', value: 'apex' },
									{ label: 'Applescript', value: 'applescript' },
									{ label: 'Assembly', value: 'asm' },
									{ label: 'AWK', value: 'awk' },
									{ label: 'Batch', value: 'batch' },
									{ label: 'C', value: 'c' },
									{ label: 'C#', value: 'csharp' },
									{ label: 'C++', value: 'cpp' },
									{ label: 'Clojure', value: 'clojure' },
									{ label: 'Cobol', value: 'cobol' },
									{ label: 'Coffee Script', value: 'coffee' },
									{ label: 'Crystal', value: 'crystal' },
									{ label: 'CSS', value: 'css' },
									{ label: 'Curl', value: 'curl' },
									{ label: 'D', value: 'd' },
									{ label: 'Dart', value: 'dart' },
									{ label: 'Dockerfile', value: 'dockerfile' },
									{ label: 'Elixir', value: 'elixir' },
									{ label: 'Elm', value: 'elm' },
									{ label: 'Embedded Ruby (ERB)', value: 'html-ruby-erb' },
									{ label: 'Erlang', value: 'erlang' },
									{ label: 'F#', value: 'fsharp' },
									{ label: 'git-commit', value: 'git-commit' },
									{ label: 'git-diff', value: 'diff' },
									{ label: 'git-ignore', value: 'gitignore' },
									{ label: 'git-rebase', value: 'git-rebase' },
									{ label: 'gnuplot', value: 'gnuplot' },
									{ label: 'Go', value: 'go' },
									{ label: 'GraphQL', value: 'graphql' },
									{ label: 'Groovy', value: 'groovy' },
									{ label: 'Hack', value: 'hack' },
									{ label: 'Haml', value: 'haml' },
									{ label: 'Handlebars', value: 'handlebars' },
									{ label: 'HashiCorp Configuration Language', value: 'hcl' },
									{ label: 'Haskell', value: 'haskell' },
									{ label: 'HLSL', value: 'hlsl' },
									{ label: 'HTML', value: 'html' },
									{ label: 'INI', value: 'ini' },
									{ label: 'Java', value: 'java' },
									{ label: 'JavaScript', value: 'javascript' },
									{ label: 'Jinja HTML', value: 'jinja-html' },
									{ label: 'JSON', value: 'json' },
									{ label: 'jsonc', value: 'jsonc' },
									{ label: 'Jsonnet', value: 'jsonnet' },
									{ label: 'JSX', value: 'jsx' },
									{ label: 'Julia', value: 'julia' },
									{ label: 'Kotlin', value: 'kotlin' },
									{ label: 'Laravel Blade', value: 'blade' },
									{ label: 'Latex', value: 'latex' },
									{ label: 'Less', value: 'less' },
									{ label: 'Lisp', value: 'lisp' },
									{ label: 'Logo', value: 'logo' },
									{ label: 'Lua', value: 'lua' },
									{ label: 'Makefile', value: 'makefile' },
									{ label: 'Markdown', value: 'markdown' },
									{ label: 'MATLAB', value: 'matlab' },
									{ label: 'MDX', value: 'mdx' },
									{ label: 'Nix', value: 'nix' },
									{ label: 'Objective-C', value: 'objective-c' },
									{ label: 'OCaml', value: 'ocaml' },
									{ label: 'Pascal', value: 'pascal' },
									{ label: 'Perl', value: 'perl' },
									{ label: 'Perl6', value: 'perl6' },
									{ label: 'PHP', value: 'php' },
									{ label: 'Plaintext', value: 'plaintext' },
									{ label: 'PLSQL', value: 'pls' },
									{ label: 'PostCSS', value: 'postcss' },
									{ label: 'PowerShell', value: 'powershell' },
									{ label: 'Prolog', value: 'prolog' },
									{ label: 'Pug', value: 'pug | jade' },
									{ label: 'Puppet', value: 'puppet' },
									{ label: 'PureScript', value: 'purescript' },
									{ label: 'Python', value: 'python' },
									{ label: 'R', value: 'r' },
									{ label: 'Razor', value: 'razor' },
									{ label: 'Ruby', value: 'ruby' },
									{ label: 'Rust', value: 'rust' },
									{ label: 'SAS', value: 'sas' },
									{ label: 'Sass', value: 'sass' },
									{ label: 'Scala', value: 'scala' },
									{ label: 'Scheme', value: 'scheme' },
									{ label: 'SCSS', value: 'scss' },
									{ label: 'ShaderLab', value: 'shaderlab' },
									{ label: 'Shell', value: 'shell' },
									{ label: 'Smalltalk', value: 'smalltalk' },
									{ label: 'SQL', value: 'sql' },
									{ label: 'ssh-config', value: 'ssh-config' },
									{ label: 'Statamic Antlers', value: 'antlers' },
									{ label: 'Stylus', value: 'stylus' },
									{ label: 'Swift', value: 'swift' },
									{ label: 'Tcl', value: 'tcl' },
									{ label: 'TOML', value: 'toml' },
									{ label: 'tsx', value: 'tsx' },
									{ label: 'TypeScript', value: 'typescript' },
									{ label: 'VB', value: 'vb' },
									{ label: 'VimL', value: 'viml' },
									{ label: 'Vue', value: 'vue' },
									{ label: 'WebAssembly', value: 'wasm' },
									{ label: 'Wenyan', value: 'wenyan' },
									{ label: 'XML', value: 'xml' },
									{ label: 'XSL', value: 'xsl' },
									{ label: 'YAML', value: 'yaml' },
								] }
								onChange = { ( language ) => setAttributes( { language } ) }
							/>
						</PanelRow>

						<PanelRow>
							<SelectControl
								label = "Theme"
								value = { theme }
								options = { [
									{ label: 'Atom One Dark', value: 'atom-one-dark' },
									{ label: 'Cobalt2', value: 'cobalt2' },
									{ label: 'Dark 404', value: 'dark-404' },
									{ label: 'Dark Plus', value: 'dark-plus' },
									{ label: 'Deep Purple', value: 'deep-purple' },
									{ label: 'Dracula', value: 'dracula' },
									{ label: 'Fortnite', value: 'fortnite' },
									{ label: 'Github Dark', value: 'github-dark' },
									{ label: 'Github Light', value: 'github-light' },
									{ label: 'Iceberg Dark', value: 'iceberg-dark' },
									{ label: 'Light Plus', value: 'light-plus' },
									{ label: 'Liver Dark', value: 'liver-dark' },
									{ label: 'Liver Purple', value: 'liver-purple' },
									{ label: 'Material Facebook', value: 'material-facebook' },
									{ label: 'Material Theme Darker', value: 'material-theme-darker' },
									{ label: 'Material Theme Default', value: 'material-theme-default' },
									{ label: 'Material Theme Lighter', value: 'material-theme-lighter' },
									{ label: 'Material Theme Ocean', value: 'material-theme-ocean' },
									{ label: 'Material Theme Palenight', value: 'material-theme-palenight' },
									{ label: 'Min Dark', value: 'min-dark' },
									{ label: 'Min Light', value: 'min-light' },
									{ label: 'Monokai', value: 'monokai' },
									{ label: 'Monokuro Blue', value: 'monokuro-blue' },
									{ label: 'Monokuro Brown', value: 'monokuro-brown' },
									{ label: 'Monokuro Cyan', value: 'monokuro-cyan' },
									{ label: 'Monokuro Gray', value: 'monokuro-gray' },
									{ label: 'Monokuro Green', value: 'monokuro-green' },
									{ label: 'Monokuro Indigo', value: 'monokuro-indigo' },
									{ label: 'Monokuro Lime', value: 'monokuro-lime' },
									{ label: 'Monokuro Orange', value: 'monokuro-orange' },
									{ label: 'Monokuro Pink', value: 'monokuro-pink' },
									{ label: 'Monokuro Purple', value: 'monokuro-purple' },
									{ label: 'Monokuro Red', value: 'monokuro-red' },
									{ label: 'Monokuro Teal', value: 'monokuro-teal' },
									{ label: 'Monokuro Yellow', value: 'monokuro-yellow' },
									{ label: 'Moonlight II', value: 'moonlight-ii' },
									{ label: 'Moonlight', value: 'moonlight' },
									{ label: 'Night Owl', value: 'night-owl' },
									{ label: 'Nord', value: 'nord' },
									{ label: 'Olaolu Olawuyi\'s Palenight', value: 'olaolu-palenight' },
									{ label: 'One Dark Pro', value: 'one-dark-pro' },
									{ label: 'Serendipity Dark', value: 'serendipity-dark' },
									{ label: 'Serendipity Light', value: 'serendipity-light' },
									{ label: 'Shades of Purple', value: 'shades-of-purple' },
									{ label: 'Slack Theme Dark Mode', value: 'slack-theme-dark-mode' },
									{ label: 'Slack Theme Ochin', value: 'slack-theme-ochin' },
									{ label: 'Solarized Dark', value: 'solarized-dark' },
									{ label: 'Solarized Light', value: 'solarized-light' },
									{ label: 'Synthwave 84', value: 'synthwave-84' },
									{ label: 'Winter Is Coming Blue', value: 'winter-is-coming-blue' },
									{ label: 'Winter Is Coming Dark', value: 'winter-is-coming-dark' },
									{ label: 'Winter Is Coming Light', value: 'winter-is-coming-light' },
									{ label: 'Yellow Delight', value: 'yellow-delight' },
								] }
								onChange = { ( theme ) => setAttributes( { theme } ) }
							/>
						</PanelRow>

						<PanelRow>
							<ToggleControl
								label = 'Line Numbers'
								checked = { lineNumbers }
								onChange = { ( lineNumbers ) => setAttributes( { lineNumbers } ) }
							/>
						</PanelRow>

						<PanelRow>
							<TextControl
								label="Line number starts at"
								value={ lineNumbersStart }
								onChange={ ( lineNumbersStart ) => setAttributes( { lineNumbersStart } ) }
								type="number"
							/>
						</PanelRow>

						<PanelRow>
							<ToggleControl
								label = 'Diff Indicators'
								checked = { diffIndicators }
								onChange = { ( diffIndicators ) => setAttributes( { diffIndicators } ) }
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>

			<>
				<pre { ...blockProps }>
					<RichText
						tagName="code"
						value = { content || '' }
						onChange = { ( content ) => setAttributes( { content } ) }
						placeholder='Paste your code'
						aria-label='Code'
						withoutInteractiveFormatting = { true }
						preserveWhitespace = { true }
						__unstablePastePlainText
					/>
				</pre>
			</>
		</>
	);
};
