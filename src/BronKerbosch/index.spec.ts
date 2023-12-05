import {describe, expect, test} from 'bun:test';

import runBronKerbosch from './';

describe('runBronKerbosch', () => {
	// todo: description
	test('...', async () => {
		let result = runBronKerbosch([]);

		expect(result).toEqual([]);
	});

	test.skip('...', async () => {
		let result = runBronKerbosch([
			[1, 1],
			[2, 2],
			[1, 2],
		]);

		expect(result).toEqual([]);
	});

	// todo: description
	test('...', async () => {
		{
			// prettier-ignore
			let result = runBronKerbosch([[1, 4], [2, 3], [2, 5], [3, 5], [4, 5], [4, 6]]);

			// prettier-ignore
			expect(result).toEqual([[2, 3, 5], [1, 4], [4, 5], [4, 6]]);
		}
		{
			// todo: another example
		}
	});
});
