/* global chai */

'use strict';

import * as bse from '../src/index';
import bse2 from '../src/index';

import factory from '../src/factory';
import SelectorEngine from '../src/SelectorEngine';
import Converter from '../src/converter/Converter';
import Selector from '../src/converter/Selector';

const expect = chai.expect;

describe( 'module', () => {
	it( 'exports factory', () => {
		expect( bse.default ).to.equal( factory );
		expect( bse2 ).to.equal( factory );
	} );

	it( 'exports SelectorEngine', () => {
		expect( bse.SelectorEngine ).to.equal( SelectorEngine );
	} );

	it( 'exports Converter', () => {
		expect( bse.Converter ).to.equal( Converter );
	} );

	it( 'exports Selector', () => {
		expect( bse.Selector ).to.equal( Selector );
	} );
} );
