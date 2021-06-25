import {babel} from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';

import {main} from './package.json';

export default {
	input: 'src/index.js',
	plugins: [
		babel({babelHelpers: 'bundled'}),
		terser(),
	],
	output: {
		file: main,
		format: 'umd',
		name: 'BronKerbosch',
	},
};
