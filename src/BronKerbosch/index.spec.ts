import {describe, expect, test} from 'bun:test';

import runBronKerbosch from '.';

describe('runBronKerbosch', () => {
	test('...', async () => {
		let result = runBronKerbosch<number>([]);

		expect(result).toEqual([]);
	});

	// test: 1 item

	test('...', async () => {
		// prettier-ignore
		let result = runBronKerbosch<number>([[1, 2], [1, 5], [2, 5], [3, 4], [4, 5], [4, 6]]);

		console.log(result);

		// prettier-ignore
		expect(result).toEqual([[1, 2, 5], [3, 4], [4, 5], [4, 6]]);
	});
});
