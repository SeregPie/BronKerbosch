import {describe, expect, test} from 'bun:test';

import runBronKerbosch from '.';

// todo: better descriptions

// prettier-ignore
describe.skip('runBronKerbosch', () => {
	test('should work in a common scenario', () => {
		// todo?
		{
			const result = runBronKerbosch([[1, 4], [2, 3], [2, 5], [3, 5], [4, 5], [4, 6]]);

			expect(result).toEqual([[1, 4], [2, 3, 5], [4, 5], [4, 6]]);
		}
		{
			const result = runBronKerbosch([[1, 3], [1, 4], [1, 6], [2, 3], [2, 5], [3, 5], [4, 6], [5, 6]]);

			expect(result).toEqual([[1, 3], [1, 4, 6], [2, 3, 5], [5, 6]]);
		}
		{
			const result = runBronKerbosch([[1, 2], [1, 3], [1, 5], [1, 6], [2, 5], [2, 6], [3, 4], [3, 5], [5, 6]]);

			expect(result).toEqual([[1, 2, 5, 6], [1, 3, 5], [3, 4]]);
		}
	});

	test('should return empty result for empty graph', () => {
		const result = runBronKerbosch([]);

		expect(result).toEqual([]);
	});

	// prettier-ignore
	test('should ignore loops', () => {
		const result = runBronKerbosch([[1, 1], [2, 2]]);

		expect(result).toEqual([]);
	});

	// prettier-ignore
	test('should ignore duplicates', () => {
		const result = runBronKerbosch([[1, 2], [2, 1]]);

		expect(result).toEqual([[1, 2]]);
	});
});
