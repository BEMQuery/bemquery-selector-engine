'use strict';

import Selector from '../../../src/converter/Selector';

export default class Converter {
	constructor( selector ) {
		this.convertCount = 0;
		this.selector = new Selector( selector, selector );
	}

	convert() {
		++this.convertCount;

		return this.selector;
	}
}
