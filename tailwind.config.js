/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"desatured-dark-cyan": "hsl(180, 29%, 50%)",
				"background-color": "hsl(180, 52%, 96%)",
				"filter-tablets": "hsl(180, 31%, 95%)",
				"dark-grayish-cyan": "hsl(180, 8%, 52%)",
				"very-dark-grayish-cyan": "hsl(180, 14%, 20%)"
			},
			backgroundImage: {
				"header" : 'url("/images/bg-header-desktop.svg"),linear-gradient(to right, hsl(180, 29%, 50%),hsl(180, 29%, 50%))'
			}
		},
	},
	plugins: [],
}