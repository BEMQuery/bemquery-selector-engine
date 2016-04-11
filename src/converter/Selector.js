'use strict';

/** Simple class representing selector */
class Selector {
	/**
	 * Creates new Selector instance.
	 *
	 * @param {String} BEM BEM version of selector.
	 * @param {String} CSS CSS version of selector.
	 */
	constructor( BEM, CSS ) {
		/**
		 * BEM version of selector.
		 *
		 * @property {String}
		 */
		this.BEM = BEM;

		/**
		 * CSS version of selector.
		 *
		 * @property {String}
		 */
		this.CSS = CSS;

		Object.freeze( this );
	}
}

export default Selector;
