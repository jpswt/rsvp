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
				hero: "url('https://firebasestorage.googleapis.com/v0/b/rsvp-2a7df.appspot.com/o/DSC_8950.JPG?alt=media&token=ef733705-8919-4ca9-af98-9ef55d9fd722')",
				heart: "url('../src/assets/images/HeroHeart.png')",
				rsvp: "url('https://firebasestorage.googleapis.com/v0/b/rsvp-2a7df.appspot.com/o/DSC_8958.JPG?alt=media&token=2cb320c9-3e6e-4053-a9b6-b07c9fd1544c')",
			},
			backgroundPosition: {
				'left-4': 'center left -14rem',
				'right-4': 'left 0rem',
			},
		},
	},
	plugins: [],
};
