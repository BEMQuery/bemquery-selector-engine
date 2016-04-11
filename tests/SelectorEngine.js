/* global chai, fixture */

'use strict';

import SelectorEngine from '../src/SelectorEngine.js';
import Converter from './support/mocks/Converter';
import Selector from '../src/converter/Selector';

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

		const converter = new Converter( '.block' );
		const engine = new SelectorEngine( converter );
		const result = engine.find( 'bogus' );

		expect( result.selector ).to.be.an.instanceof( Selector );
		expect( result.elements ).to.be.an( 'array' );
		expect( result.elements ).to.have.lengthOf( 2 );
	} );

	it( 'finds elements that match passed selector relative to the specified context', () => {
		fixture.load( 'context.html' );

		const context = document.querySelector( '.block' );

		const converter1 = new Converter( '.block .other-block' );
		const engine1 = new SelectorEngine( converter1 );
		const result1 = engine1.find( 'bogus',  context );

		expect( result1.selector ).to.be.an.instanceof( Selector );
		expect( result1.elements ).to.be.an( 'array' );
		expect( result1.elements ).to.have.lengthOf( 0 );

		const converter2 = new Converter( '.other-block' );
		const engine2 = new SelectorEngine( converter2 );
		const result2 = engine2.find( 'bogus',  context );

		expect( result2.selector ).to.be.an.instanceof( Selector );
		expect( result2.elements ).to.be.an( 'array' );
		expect( result2.elements ).to.have.lengthOf( 1 );
	} );
} );
