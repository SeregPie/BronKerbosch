import rollupPluginNodeResolve from '@rollup/plugin-node-resolve';
import rollupPluginTerser from '@rollup/plugin-terser';

export default {
	input: './src/index.js',
	plugins: [
		//
		rollupPluginNodeResolve(),
		rollupPluginTerser(),
	],
	output: [
		{
			file: './dist/index.mjs',
			format: 'es',
		},
		{
			file: './dist/index.cjs',
			format: 'cjs',
		},
		{
			file: './dist/index.umd.js',
			format: 'umd',
			name: 'runBronKerbosch',
		},
	],
};
