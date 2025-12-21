import { plugin } from 'postcss';
import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				'primary-dark': 'var(--color-primary-dark)',
				secondary: 'var(--color-secondary)',
				green: 'var(--color-green)',
				gray: 'var(--color-gray)',
				'gray-light': '#f1f5f9',
			},
			fontFamily: {
				'dante-mt-std': ['Dante MT Std', 'sans-serif'],
				raizen: ['Raizen', 'sans-serif'],
				'spiral-initials': ['Spiral Initials', 'sans-serif'],
				tormenta20: ['Tormenta20', 'sans-serif'],
			},
			gridTemplateRows: {
				'auto-3': 'repeat(3, minmax(0, auto))',
				'auto-10': 'repeat(10, minmax(0, auto))',
				'auto-11': 'repeat(11, minmax(0, auto))',
				'auto-12': 'repeat(12, minmax(0, auto))',
				'auto-15': 'repeat(15, minmax(0, auto))',
				'auto-16': 'repeat(16, minmax(0, auto))',
				'auto-18': 'repeat(18, minmax(0, auto))',
			},
		},
	},
	plugins: [],
} satisfies Config;
