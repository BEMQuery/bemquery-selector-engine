'use strict';

import Selector from './Selector';
import defaultConfig from './defaultConfig';

function convertToken( tokens, config, selector = '' ) {
	const rules = config.rules;
	const delimeter = tokens.shift();
	let rule;
	let token;

	if ( !delimeter ) {
		return selector;
	} else if ( !selector ) {
		token = delimeter;
		rule = rules.default;
	} else {
		token = tokens.shift();
		rule = rules[ delimeter ];
	}

	if ( typeof rule !== 'function' ) {
		throw new SyntaxError( 'Malformed BEM rule' );
	}

	selector += rule( token, config, selector );

	return convertToken( tokens, config, selector );
}

function convert( selector, config ) {
	const rules = Object.keys( config.rules ).filter( ( rule ) => {
		return rule !== 'default';
	} );
	const splitRule = new RegExp( `(${rules.join( '|' )})`, 'g' );
	const splittedSelector = selector.split( splitRule );

	selector = convertToken( splittedSelector, config );

	return selector;
}

/** Converter's class*/
class Converter {
	/**
	 * Create converter's instance.
	 *
	 * @param {Object} [config=defaultConfig] converter's configuration options.
	 * @class
	 */
	constructor( config = defaultConfig ) {
		/**
		 * Converter's configuration
		 *
		 * @property {Object}
		 */
		this.config = config;
	}

	/**
	 * Converts given selector to CSS.
	 *
	 * @param {String} selector BEM selector to be converted.
	 * @return {Selector} Converted selector.
	 */
	convert( selector ) {
		const convertedSelector = convert( selector, this.config );

		return new Selector( selector, convertedSelector );
	}

	/**
	 * Get state from given `[class]` attribute contents.
	 *
	 * @param {String} className HTML `[class]` attribute.
	 * @return {String|null} Fetched state.
	 */
	getStateFromClass( className ) {
		if ( typeof className !== 'string' ) {
			throw new TypeError( 'Class must be a string.' );
		}

		const bemConfig = this.config.bem;
		const regex = new RegExp( `[^${bemConfig.elemSeparator}${bemConfig.modifierSeparator}]+${bemConfig.modifierSeparator}([^${bemConfig.elemSeparator}${bemConfig.modifierSeparator}]+)$` );
		const match = className.match( regex );

		return match ? match[ 1 ] : null;
	}
}

export default Converter;
