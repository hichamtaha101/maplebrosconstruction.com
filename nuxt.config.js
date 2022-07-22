const postcss = require("./postcss.webpack.config");

export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Construction Services",
		titleTemplate: "MBC Services | %s",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				hid: "description",
				name: "description",
				content:
					"Portfolio website for construction projects and services in Vancouver, British Columbia.",
			},
			{ name: "author", content: "MBC Services" },
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.png" },
			{
				rel: "stylesheet",
				href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Exo:wght@300;400;700&display=swap",
			},
		],
		script: [],
	},
	target: "static",

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		//   '~assets/scss/main.scss'
		"~/assets/css/index.css",
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~/plugins/filters.js',
		'~/plugins/mask.js',
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		"@nuxt/image",
		"@nuxtjs/tailwindcss",
	],
	image: {
		dir: "assets/images",
	}, // Needed for nuxt-img.

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss,
	},
};
