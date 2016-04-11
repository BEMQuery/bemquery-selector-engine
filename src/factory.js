'use strict';

import SelectorEngine from './SelectorEngine';
import Converter from './converter/Converter';
import defaultConverterConfig from './converter/defaultConfig';

/**
 * BEM selectors engine factory.
 *
 * @param {Object} [converterConfig=defaultConverterConfig] Configuration object that
 * should be passed to the Converter constructor.
 * @return {SelectorEngine} SelectorEngine's instance.
 */
function factory( converterConfig = defaultConverterConfig ) {
	const converter = new Converter( converterConfig );
	const selectorEngine = new SelectorEngine( converter );

	return selectorEngine;
}

export default factory;
