import {describe, expect, test} from 'bun:test';

import runBronKerbosch from '.';

describe.skip('runBronKerbosch', () => {
	test('...', async () => {
		let result = runBronKerbosch([]);

		expect(result).toEqual([]);
	});

	test('...', async () => {
		// prettier-ignore
		let result = runBronKerbosch([[1, 2], [1, 5], [2, 5], [3, 4], [4, 5], [4, 6]]);

		// prettier-ignore
		expect(result).toEqual([[1, 2, 5], [3, 4], [4, 5], [4, 6]]);
	});
});
