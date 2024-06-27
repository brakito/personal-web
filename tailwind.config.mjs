import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        text: ['"Open Sans"', 'sans-serif', 'system-ui'],
        title: ['Alice', 'sans-serif', 'system-ui'],
      },
			dropShadow: {
				glow: [
					"0 0px 20px rgba(127,18,255,.4)",
					"0 0px 45px rgba(127,18,255,.3)",
				]
			},
			colors: {
				main: "#F9F9FA",
				second: "#1D252D",
				accent: "#7F12FF",
				accentHover: "#6d15d8"
			},
			
		},
	},
	plugins: [],
}
