/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector' ,//['class', 'selector', '[data-mode="dark"]'],
	theme: {
		//extend: {},

	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
