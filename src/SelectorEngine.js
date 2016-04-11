'use strict';

/** Simple BEM selector engine. */
class SelectorEngine {
	/**
	 * Create BEM selector engine's instance.
	 *
	 * @param {Converter} converter Converter's instance.
	 * @class
	 */
	constructor( converter ) {
		this.converter = converter;
	}
	
	/**
	 * Find elements using passed selector.
	 *
	 * @param {String} selector BEM selector.
	 * @param {Element|Document} context Context
	 * in which element should be found.
	 * @returns {Object} result
	 * @returns {Selector} result.selector Used selector.
	 * @returns {Element[]} result.elements Found elements.
	 */
	find( selector, context = document ) {
		const convertedSelector = this.converter.convert( selector );
		const result = {
			selector: convertedSelector
		};
		let cssSelector = convertedSelector.CSS;
		let tmpId = false;

		if ( context !== document ) {
			if ( !context.id ) {
				tmpId = true;
				context.id = `BEMQueryTMP_${Date.now()}`;
			}

			cssSelector = `#${context.id} ${cssSelector}`;
		}

		const elements = context.querySelectorAll( cssSelector );

		result.elements = Array.from( elements );

		if ( tmpId ) {
			context.removeAttribute( 'id' );
		}

		return result;
	}
}

export default SelectorEngine;
