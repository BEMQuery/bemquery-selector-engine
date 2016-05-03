/* global chai, fixture */

'use strict';

import SelectorEngine from '../src/SelectorEngine.js';

const expect = chai.expect;

describe( 'SelectorEngine', () => {
	it( 'is a class', () => {
		expect( SelectorEngine ).to.be.a( 'function' );
	} );
} );

describe( 'SelectorEngine.find', () => {
	before( () => {
		fixture.setBase( 'tests/support/fixtures' );
	} );

	afterEach( () => {
		fixture.cleanup();
	} );

	it( 'finds elements that match passed selector', () => {
		fixture.load( 'simpleBlock.html' );

		const engine = new SelectorEngine();
		const result = engine.find( '.block' );

		expect( result ).to.be.an( 'array' );
		expect( result ).to.have.lengthOf( 2 );
	} );

	it( 'finds elements that match passed selector relative to the specified context', () => {
		fixture.load( 'context.html' );

		const context = document.querySelector( '.block' );

		const engine1 = new SelectorEngine();
		const result1 = engine1.find( '.block .other-block',  context );

		expect( result1 ).to.be.an( 'array' );
		expect( result1 ).to.have.lengthOf( 0 );

		const engine2 = new SelectorEngine();
		const result2 = engine2.find( '.other-block',  context );

		expect( result2 ).to.be.an( 'array' );
		expect( result2 ).to.have.lengthOf( 1 );
	} );
} );
