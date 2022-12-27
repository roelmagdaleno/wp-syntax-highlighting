import { addFilter } from '@wordpress/hooks';
import edit from './edit';
import save from './save';

const syntaxHighlighting = ( settings ) => {
	if ( settings.name !== 'core/code' ) {
		return settings;
	}

	const pluginData = window.SHT_DATA || { theme: '' };

	return {
		...settings,
		attributes: {
			...settings.attributes,
			diffIndicators: { type: 'boolean', default: true },
			language: { type: 'string' },
			lineNumbers: { type: 'boolean', default: false },
			lineNumbersStart: { type: 'integer', default: 1 },
			theme: { type: 'string', default: pluginData.theme },
		},
		edit,
		save,
	};
};

addFilter(
	'blocks.registerBlockType',
	'roelmagdaleno/syntax-highlighting',
	syntaxHighlighting
);
