'use strict';

console.error( 'Moving docs' );
const cwd = process.cwd();
const mv = require( 'mv' );

mv( `${cwd}/docs/dist`, cwd, { mkdirp: true }, function( err ) {
	if ( err ) {
		console.error( '')
		process.exit( 1 );
	}
} );
