import {
	describe,
	expect,
	test,
} from 'bun:test';

import runBronKerbosch from '.';

describe('runBronKerbosch', () => {
	test('should work', () => {
		let edges: Array<[number, number]> = [[1, 2], [1, 5], [2, 5], [3, 4], [4, 5], [4, 6]];
		let cliques = runBronKerbosch(edges);
		expect(cliques).toEqual([[3, 4], [4, 5], [4, 6], [1, 2, 5]]);
	});

	test('should work with empty input', () => {
		let edges: Array<[number, number]> = [];
		let cliques = runBronKerbosch(edges);
		expect(cliques).toEqual([]);
	});
});
