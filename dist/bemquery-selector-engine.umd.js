/*! bemquery-selector-engine v0.2.4 | (c) 2016 BEMQuery team | MIT license (see LICENSE) */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.bemquerySelectorEngine = factory());
}(this, (function () { 'use strict';

/** Simple selector engine. */
class SelectorEngine {
	/**
	 * Find elements using passed selector.
	 *
	 * @param {String} selector CSS selector.
	 * @param {HTMLElement|Document} context Context
	 * in which element should be found.
	 * @returns {HTMLElement[]} Found elements.
	 */
	find( selector, context = document ) {
		let tmpId = false;

		if ( context !== document ) {
			if ( !context.id ) {
				tmpId = true;
				context.id = `BEMQueryTMP_${Date.now()}`;
			}

			selector = `#${context.id} ${selector}`;
		}

		const elements = Array.from( context.querySelectorAll( selector ) );

		if ( tmpId ) {
			context.removeAttribute( 'id' );
		}

		return elements;
	}
}

return SelectorEngine;

})));
//# sourceMappingURL=bemquery-selector-engine.umd.js.map
