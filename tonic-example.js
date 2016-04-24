require( 'bemquery-selector-engine/package.json' );

var fs = require( 'fs' ),
	url = 'https://tonicdev.io' + process.env.TONIC_ENDPOINT_PATH;

exports.tonicEndpoint = function( request, response ) {
	response.end( fs.readFileSync( require.resolve( 'bemquery-selector-engine' ) ) );
};

`<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Tonic Example</title>
		</head>
		<body>
			<p class="block">
				<span class="block__elem block__elem_modifier">Example</span>
			</p>
			<script src="${url}"></script>
			<script>
			var engine = bemquerySelectorEngine.default(),
				span = engine.find( 'block elem:modifier' ).elements[ 0 ];

				span.style.color = '#f00';
			</script>
		</body>
	</html>`;
