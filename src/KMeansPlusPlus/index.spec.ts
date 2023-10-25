import {describe, expect, test} from 'bun:test';

import runKMeansPlusPlus from '.';

describe.skip('runKMeansPlusPlus', () => {
	test('...', async () => {
		// prettier-ignore
		let result = runKMeansPlusPlus<number>([], 0, () => 0, () => 0);

		expect(result).toEqual([]);
	});

	test('...', async () => {
		// prettier-ignore
		let result = runKMeansPlusPlus<number>([], 3, () => 0, () => 0);

		expect(result).toEqual([]);
	});

	test('...', async () => {
		// prettier-ignore
		let result = runKMeansPlusPlus<number>([1, 2, 3], 0, () => 0, () => 0);

		expect(result).toEqual([]);
	});

	test('...', async () => {
		// prettier-ignore
		let result = runKMeansPlusPlus<number>([1, 2, 3], 1, () => 0, () => 0);

		expect(result).toEqual([[1, 2, 3]]);
	});

	test('...', async () => {
		// prettier-ignore
		let result = runKMeansPlusPlus<number>([1], 3, () => 0, () => 0);

		expect(result).toEqual([[1]]);
	});

	test.skip('...', async () => {
		// todo: other example with odd items

		// prettier-ignore
		let result = runKMeansPlusPlus<[number, number]>([[1, 4], [6, 2], [0, 4], [1, 3], [5, 1], [4, 0]], 2,
			(a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]),
			(...vs) => [
				vs.reduce((n, v) => n + v[0], 0) / vs.length,
				vs.reduce((n, v) => n + v[1], 0) / vs.length,
			],
		);

		// prettier-ignore
		expect(result).toEqual([[[1, 4], [0, 4], [1, 3]], [[6, 2], [5, 1], [4, 0]]]);
	});
});
