import { RichText, useBlockProps } from '@wordpress/block-editor';
import { escape } from './utils';

export default function save( { attributes } ) {
	return (
		<>
			<pre { ...useBlockProps.save() }>
				<RichText.Content
					tagName="code"
					value={ escape(attributes.content) }
				/>
			</pre>
		</>
	);
};
