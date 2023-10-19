import {describe, expect, test} from 'bun:test';

import runNearestNeighborChain from '.';

describe('runBronKerbosch', () => {
	test('should work', async () => {
		// prettier-ignore
		let edges: Array<[number, number]> = [[1, 2], [1, 5], [2, 5], [3, 4], [4, 5], [4, 6]];
		let cliques = runBronKerbosch(edges);
		// prettier-ignore
		expect(cliques).toEqual([[3, 4], [4, 5], [4, 6], [1, 2, 5]]);
	});

	test('should work with empty input', async () => {
		let edges: Array<[number, number]> = [];
		let cliques = runBronKerbosch(edges);
		expect(cliques).toEqual([]);
	});
});

let runNearestNeighborChain = require('./index');

{
	let array = [4, 90, 12, 61, 29];
	let clusters = runNearestNeighborChain(array, (a, b) => Math.abs(a - b));
	assert.deepEqual(clusters, [
		[29, [4, 12]],
		[90, 61],
	]);
}
{
	let intersection = function (a, b) {
		a = new Set(a);
		b = new Set(b);
		return [...a].filter((v) => b.has(v));
	};
	let array = ['ac', 'ab', 'baab', 'aba', 'bc'];
	let clusters = runNearestNeighborChain(
		array,
		(a, b) => -intersection(a, b).length,
	);
	assert.deepEqual(clusters, ['ac', 'bc', ['ab', 'baab', 'aba']]);
}
{
	let array = [1, 1, 1, 1, 1];
	let clusters = runNearestNeighborChain(array, (a, b) => Math.abs(a - b));
	assert.deepEqual(clusters, [1, 1, 1, 1, 1]);
}
{
	let array = [];
	let clusters = runNearestNeighborChain(array, (a, b) => Math.abs(a - b));
	assert.deepEqual(clusters, []);
}
