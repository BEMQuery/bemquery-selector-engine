'use strict';

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

export default SelectorEngine;
