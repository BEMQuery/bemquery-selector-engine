/* global chai */

'use strict';

import Selector from '../src/converter/Selector';

const expect = chai.expect;

describe( 'Selector', () => {
	it( 'is a class', () => {
		expect( Selector ).to.be.a( 'function' );
	} );

	it( 'creates properties based on parameters passed to the constructor', () => {
		const selector = new Selector( 'bem', 'css' );

		expect( selector.BEM ).to.equal( 'bem' );
		expect( selector.CSS ).to.equal( 'css' );
	} );

	it( 'creates immutable instances', () => {
		const selector = new Selector( 'bem', 'css' );

		expect( selector ).to.be.frozen;
	} );
} );
