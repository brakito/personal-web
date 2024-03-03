import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
			dropShadow: {
				glow: [
					"0 0px 20px rgba(127,18,255,.4)",
					"0 0px 45px rgba(127,18,255,.3)",
				]
			},
			
		},
	},
	plugins: [],
}
