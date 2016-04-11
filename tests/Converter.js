/* global chai */

'use strict';

import Converter from '../src/converter/Converter';
import defaultConverterConfig from '../src/converter/defaultConfig';
import Selector from '../src/converter/Selector';

const expect = chai.expect;

describe( 'Converter', () => {
	it( 'is a class', () => {
		expect( Converter ).to.be.a( 'function' );
	} );

	it( 'constructor takes configuration of conversion as 1. parameter', () => {
		const config = {
			'hublabubla': true
		};
		const converter = new Converter( config );

		expect( converter.config ).to.deep.equal( config );
	} );

	it( 'fallbacks to default configuration if instantiated without parameters', () => {
		const converter = new Converter();

		expect( converter.config ).to.deep.equal( defaultConverterConfig );
	} );

	it( 'converts BEM selectors to CSS ones', () => {
		const selectors = {
			'block': '.block',
			'block elem:modifier': '.block__elem_modifier',
			'block:modifier elem': '.block_modifier .block__elem',
			'block:modifier elem:modifier': '.block_modifier .block__elem_modifier',
			'block elem elem': '.block__elem__elem',
			'block elem elem:modifier': '.block__elem__elem_modifier',
			'block:modifier elem elem': '.block_modifier .block__elem__elem',
			'block elem:modifier elem': '.block__elem_modifier .block__elem__elem',
			'block:modifier elem:modifier elem': '.block_modifier .block__elem_modifier .block__elem__elem',
			'block > other-block': '.block .other-block',
			'block:modifier > other-block': '.block_modifier .other-block',
			'block:modifier elem > other-block:modifier elem:modifier': '.block_modifier .block__elem .other-block_modifier .other-block__elem_modifier'
		};
		const converter = new Converter();

		Object.keys( selectors ).forEach( ( selector ) => {
			const result = converter.convert( selector );

			expect( result ).to.be.an.instanceof( Selector );
			expect( result.BEM ).to.equal( selector );
			expect( result.CSS ).to.equal( selectors[ selector ] );
		} );
	} );

	it( 'reflects changes in configuration in generated selectors', () => {
		const selectors = {
			'block elem': '.block-elem',
			'block:modifier': '.block--modifier',
			'block elem:modifier': '.block-elem--modifier'
		};
		const converter = new Converter();
		converter.config.bem.elemSeparator = '-';
		converter.config.bem.modifierSeparator = '--';

		Object.keys( selectors ).forEach( ( selector ) => {
			const result = converter.convert( selector );

			expect( result ).to.be.an.instanceof( Selector );
			expect( result.BEM ).to.equal( selector );
			expect( result.CSS ).to.equal( selectors[ selector ] );
		} );
	} );

	it( 'throws SyntaxError when trying to use malformed rule', () => {
		const converter = new Converter();
		converter.config.rules[ ' ' ] = false;

		expect( () => {
			converter.convert( 'block elem' );
		} ).to.throw( SyntaxError, 'Malformed BEM rule' );
	} );
} );
