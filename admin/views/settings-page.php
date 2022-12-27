<div class="wrap">
	<h1>Syntax Highlighting</h1>

	<form method="POST" action="options.php">
		<?php

		settings_fields( 'syntax_highlighting_group' );
		do_settings_sections( 'syntax-highlighting' );

		submit_button();

		?>
	</form>
</div>
