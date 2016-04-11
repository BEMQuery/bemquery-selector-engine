/* global chai, fixture */

'use strict';

import factory from '../src/factory';
import Selector from '../src/converter/Selector';

const expect = chai.expect;

describe( 'SelectorEngine created by factory', () => {
	before( () => {
		fixture.setBase( 'tests/support/fixtures' );
	} );

	afterEach( () => {
		fixture.cleanup();
	} );

	it( 'finds elements that match passed selector', () => {
		fixture.load( 'simpleBlock.html' );

		const engine = factory();
		const result = engine.find( 'block' );

		expect( result.selector ).to.be.an.instanceof( Selector );
		expect( result.elements ).to.be.an( 'array' );
		expect( result.elements ).to.have.lengthOf( 2 );
	} );

	it( 'finds elements that match passed selector relative to the specified context', () => {
		fixture.load( 'context.html' );

		const engine = factory();
		const context = document.querySelector( '.block' );

		const result1 = engine.find( 'block > other-block',  context );

		expect( result1.selector ).to.be.an.instanceof( Selector );
		expect( result1.elements ).to.be.an( 'array' );
		expect( result1.elements ).to.have.lengthOf( 0 );

		const result2 = engine.find( 'other-block',  context );

		expect( result2.selector ).to.be.an.instanceof( Selector );
		expect( result2.elements ).to.be.an( 'array' );
		expect( result2.elements ).to.have.lengthOf( 1 );
	} );
} );
