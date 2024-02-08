/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				cursive: ['Great Vibes'],
				nav: ['Dosis', 'sans-serif'],
			},
			textColor: {
				primary: 'white',
				secondary: '#aec6cf',
				accent: '#fffcf2',
			},
			backgroundColor: {
				primary: '#aec6cf',
				secondary: '#fffcf2',
			},
			backgroundImage: {
				hero: "url('../src/assets/images/DSC_8950.jpg')",
				heart: "url('../src/assets/images/HeroHeart.png')",
				rsvp: "url('../src/assets/images/DSC_8958.jpg')",
				rform: "url('../src/assets/images/DSC_8988.jpg')",
			},
			backgroundPosition: {
				'left-4': 'center left -14rem',
				'right-4': 'left 0rem',
			},
		},
	},
	plugins: [],
};
