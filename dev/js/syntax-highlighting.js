import { addFilter } from '@wordpress/hooks';
import edit from './edit';

const customAttributes = ( settings ) => {
	if ( settings.name !== 'core/code' ) {
		return settings;
	}

	const pluginData = window.SHT_DATA || { theme: '' };

	settings.attributes = Object.assign( settings.attributes, {
		diffIndicators: {
			type: 'boolean',
			default: true,
		},
		language: {
			type: 'string',
		},
		lineNumbers: {
			type: 'boolean',
			default: false,
		},
		lineNumbersStart: {
			type: 'integer',
			default: 1,
		},
		theme: {
			type: 'string',
			default: pluginData.theme,
		},
	} );

	return settings;
};

addFilter(
	'blocks.registerBlockType',
	'syntax-highlighting/assign-attributes',
	customAttributes
);

addFilter(
	'editor.BlockEdit',
	'syntax-highlighting/add-elements',
	edit
);
