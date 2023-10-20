import {fail} from 'assert';
import {describe, expect, test} from 'bun:test';

import runKMeansPlusPlus from '.';

describe('runKMeans', () => {
	test('...', async () => {
		// prettier-ignore
		let result = runKMeansPlusPlus<number>([], 0, () => fail(), () => fail());

		expect(result).toEqual([]);
	});

	test('...', async () => {
		// prettier-ignore
		let result = runKMeansPlusPlus<number>([], 3, () => fail(), () => fail());

		expect(result).toEqual([[], [], []]);
	});

	test('...', async () => {
		// prettier-ignore
		let result = runKMeansPlusPlus<number>([1], 3, () => fail(), () => fail());

		expect(result).toEqual([[1], [], []]);
	});

	test('...', async () => {
		// prettier-ignore
		let result = runKMeansPlusPlus<number>([1, 2, 3], 0, () => fail(), () => fail());

		expect(result).toEqual([]);
	});

	test('...', async () => {
		// prettier-ignore
		let result = runKMeansPlusPlus<number>([1, 2, 3], 1, () => fail(), () => fail());

		expect(result).toEqual([[1, 2, 3]]);
	});

	test('...', async () => {
		// prettier-ignore
		let result = runKMeansPlusPlus<number>([1, 2, 3], 3, () => fail(), () => fail());

		expect(result).toEqual([[1], [2], [3]]);
	});

	test.skip('...', async () => {
		// todo: other example with odd items

		let result = runKMeansPlusPlus<[number, number]>(
			// prettier-ignore
			[[1, 4], [6, 2], [0, 4], [1, 3], [5, 1], [4, 0]],
			2,
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
