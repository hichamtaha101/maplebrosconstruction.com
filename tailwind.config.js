module.exports = {
	purge: {
		content: [
		  './components/**/*.{vue,js}',
		  './layouts/**/*.vue',
		  './pages/**/*.vue',
		  './plugins/**/*.{js,ts}',
		  './nuxt.config.{js,ts}'
	
		],
		options: {
		  	safelist: ['v-application', 'v-application--wrap']
		}
	},
	theme: {
		screens: {
			xxs: '480px',
			xs: '768px',
			sm: '992px',
			md: '1200px',
			lg: '1440px',
			xl: '1920px',
		},
	},
};
