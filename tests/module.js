/* global chai */

'use strict';

import * as bse from '../src/index';

const expect = chai.expect;

describe( 'module', () => {
	it( 'exports factory', () => {
		expect( bse.factory ).to.be.a( 'function' );
	} );

	it( 'exports SelectorEngine', () => {
		expect( bse.SelectorEngine ).to.be.an( 'function' );
	} );

	it( 'exports Converter', () => {
		expect( bse.Converter ).to.be.an( 'function' );
	} );
} );
