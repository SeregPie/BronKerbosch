import {fail} from 'assert';
import {describe, expect, test} from 'bun:test';

import runNearestNeighborChain from '.';

describe.skip('runNearestNeighborChain', () => {
	test('...', async () => {
		let result = runNearestNeighborChain<number>([], () => fail());

		expect(result).toEqual(undefined);
		expect(result).toEqual(null);
		expect(result).toEqual([]);
	});

	test('...', async () => {
		let result = runNearestNeighborChain<number>([1], () => fail());

		expect(result).toEqual(1);
		expect(result).toEqual([1]);
		expect(result).toEqual([[1]]);
	});

	test('...', async () => {
		let result = runNearestNeighborChain<number>([1, 2], () => fail());

		expect(result).toEqual([1, 2]);
		expect(result).toEqual([[1, 2]]);
		expect(result).toEqual([[1], [2]]);
	});

	test('...', async () => {
		// prettier-ignore
		let result = runNearestNeighborChain<number>(
			[1, 2, 3, 4, 5],
			() => 0,
		);

		expect(result).toEqual([1, 2, 3, 4, 5]);
		expect(result).toEqual([[1, 2, 3, 4, 5]]);
		expect(result).toEqual([[1], [2], [3], [4], [5]]);
	});

	test('...', async () => {
		// prettier-ignore
		let result = runNearestNeighborChain<number>(
			[4, 90, 12, 61, 29],
			(a, b) => Math.abs(a - b),
		);

		// prettier-ignore
		expect(result).toEqual([[29, [4, 12]], [90, 61]]);
	});

	test('...', async () => {
		// prettier-ignore
		let result = runNearestNeighborChain<string>(
			['ac', 'ab', 'baab', 'aba', 'bc'],
			(a, b) => -((a, b) => [...a].filter((v) => b.has(v)))(new Set(a), new Set(b)).length,
		);

		// prettier-ignore
		let result2 = runNearestNeighborChain<string>(
			['ac', 'ab', 'baab', 'aba', 'bc'],
			(a, b) => -(new Set(a.split('').filter((v) => b.includes(v)))).size,
		);

		// prettier-ignore
		expect(result).toEqual(['ac', 'bc', ['ab', 'baab', 'aba']]);
	});
});
