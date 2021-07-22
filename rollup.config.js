import svelte from 'rollup-plugin-svelte';
import css from 'rollup-plugin-css-only';
import resolve from '@rollup/plugin-node-resolve';

export default {
	input: 'src/main.js',
	output: {
		format: 'iife',
		name: 'svelte_simple_example',
		file: 'public/build/bundle.js'
	},
	plugins: [
		svelte(),
		css({ output: 'bundle.css' }),
    resolve({
			browser: true,
			dedupe: ['svelte']
		}),
	],
};
