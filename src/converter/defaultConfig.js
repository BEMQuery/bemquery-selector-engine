'use strict';

function endsWithModifier( selector, bemConfig ) {
	const regex = new RegExp( `[^${bemConfig.elemSeparator}${bemConfig.modifierSeparator}]+${bemConfig.modifierSeparator}[^${bemConfig.elemSeparator}${bemConfig.modifierSeparator}]+$`,
		'g' );

	return !!selector.match( regex );
}

function getSelectorWithoutModifier( selector, modifierSeparator ) {
	return ` ${selector.substring( selector.lastIndexOf( '.' ), selector.lastIndexOf( modifierSeparator ) )}`;
}

const defaultConfig = {
	bem: {
		elemSeparator: '__',
		modifierSeparator: '_'
	},
	rules: {
		default( token ) {
			return `.${token}`;
		},

		' > '( token, config ) {
			return ` ${config.rules.default( token )}`;
		},

		' '( token, config, selector ) {
			if ( endsWithModifier( selector, config.bem ) ) {
				return `${getSelectorWithoutModifier( selector, config.bem.modifierSeparator )}${config.bem.elemSeparator}${token}`;
			}

			return `${config.bem.elemSeparator}${token}`;
		},

		':'( token, config ) {
			return `${config.bem.modifierSeparator}${token}`;
		}
	}
};

export default defaultConfig;
