const path = require( 'path' );

module.exports = {
	plugins: {
		'postcss-mixins': {
			mixinsDir: path.join(__dirname, 'assets/css/mixins') // have to specify dir here, since loading in idex.css does not work.
		},
		'postcss-simple-vars': {},
		'postcss-nested': {},
		'postcss-import': {},
		'postcss-custom-media': {
			importFrom: [
				{
					customMedia: {
						'--xl': '(max-width: 1919px)',
						'--lg': '(max-width: 1439px)',
						'--md': '(max-width: 1199px)',
						'--sm': '(max-width: 991px)',
						'--xs': '(max-width: 767px)',
						'--xxs': '(max-width: 479px)',
						'--min-xl': '(min-width: 1920px)',
						'--min-lg': '(min-width: 1440px)',
						'--min-md': '(min-width: 1200px)',
						'--min-sm': '(min-width: 992px)',
						'--min-xs': '(min-width: 768px)',
						'--min-xxs': '(min-width: 480px)',
					},
				},
			],
		},
		'postcss-url': {}
	},
	preset: {
		// Change the postcss-preset-env settings
		autoprefixer: {
			grid: true,
		},
	},
};
