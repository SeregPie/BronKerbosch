import {describe, expect, test} from 'bun:test';

import runBronKerbosch from '.';

describe('runBronKerbosch', () => {
	// prettier-ignore
	// todo: description
	test('should return empty result for empty input', async () => {
		let result = runBronKerbosch([]);

		expect(result).toEqual([]);
	});

	// prettier-ignore
	// todo: description
	test('should ignore loops', async () => {
		let result = runBronKerbosch([[1, 1], [1, 2], [2, 2]]);

		expect(result).toEqual([[1, 2]]);
	});

	// todo: description
	test('should work properly', async () => {
		// prettier-ignore
		{
			let result = runBronKerbosch([[1, 4], [2, 3], [2, 5], [3, 5], [4, 5], [4, 6]]);

			expect(result).toEqual([[2, 3, 5], [1, 4], [4, 5], [4, 6]]);
		}
		{
			// todo: another example
		}
	});
});
