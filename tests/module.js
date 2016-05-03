/* global chai */

'use strict';

import bse from '../src/index';
import SelectorEngine from '../src/SelectorEngine';

const expect = chai.expect;

describe( 'module', () => {
	it( 'exports SelectorEngine', () => {
		expect( bse ).to.equal( SelectorEngine );
	} );
} );
