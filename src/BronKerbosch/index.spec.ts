import {describe, expect, test} from 'bun:test';

import runBronKerbosch from '.';

// prettier-ignore
describe('runBronKerbosch', () => {
	// todo: description
	test(`should work properly`, async () => {
		{
			let result = runBronKerbosch([[1, 4], [2, 3], [2, 5], [3, 5], [4, 5], [4, 6]]);

			expect(result).toEqual([[2, 3, 5], [1, 4], [4, 5], [4, 6]]);
		}
		{
			let result = runBronKerbosch([[1, 3], [1, 4], [1, 6], [2, 3], [2, 5], [3, 5], [4, 6], [5, 6]]);

			expect(result).toEqual([[1, 4, 6], [2, 3, 5], [1, 3], [5, 6]]);
		}
		{
			let result = runBronKerbosch([[1, 2], [1, 3], [1, 5], [1, 6], [2, 5], [2, 6], [3, 4], [3, 5], [5, 6]]);

			expect(result).toEqual([[1, 2, 5, 6], [1, 3, 5], [3, 4]]);
		}
	});

	test(`should return empty result for empty graph`, async () => {
		let result = runBronKerbosch([]);

		expect(result).toEqual([]);
	});

	test(`should ignore loops`, async () => {
		let result = runBronKerbosch([[1, 1], [2, 2]]);

		expect(result).toEqual([]);
	});

	test(`should ignore duplicates`, async () => {
		let result = runBronKerbosch([[1, 2], [2, 1]]);

		expect(result).toEqual([[1, 2]]);
	});
});
