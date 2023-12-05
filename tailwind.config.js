/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
			cursive: ['Great Vibes'],
			nav: ['Dosis', 'sans-serif'],
		},
		textColor: {
			primary: 'white',
			secondary: '#aec6cf',
		},
		backgroundColor: {
			primary: '#aec6cf',
		},
		backgroundImage: {
			hero: "url('../src/assets/images/hero.avif')",
		},
	},
	plugins: [],
};
