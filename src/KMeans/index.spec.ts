import {describe, expect, test} from 'bun:test';

import runKMeans from '.';

describe.skip('runKMeans', () => {
	test('...', async () => {
		// prettier-ignore
		let result = runKMeans<number>([], 0, () => 0, () => 0);

		expect(result).toEqual([]);
	});

	test('...', async () => {
		// prettier-ignore
		let result = runKMeans<number>([], [], () => 0, () => 0);

		expect(result).toEqual([]);
	});

	test('...', async () => {
		// prettier-ignore
		let result = runKMeans<number>([], 3, () => 0, () => 0);

		expect(result).toEqual([]);
	});

	test('...', async () => {
		// prettier-ignore
		let result = runKMeans<number>([], [1, 2, 3], () => 0, () => 0);

		expect(result).toEqual([]);
	});

	test('...', async () => {
		// prettier-ignore
		let result = runKMeans<number>([1, 2, 3], 0, () => 0, () => 0);

		expect(result).toEqual([]);
	});

	test('...', async () => {
		// prettier-ignore
		let result = runKMeans<number>([1, 2, 3], [], () => 0, () => 0);

		expect(result).toEqual([]);
	});

	test('...', async () => {
		// prettier-ignore
		let result = runKMeans<number>([1, 2, 3], 1, () => 0, () => 0);

		expect(result).toEqual([[1, 2, 3]]);
	});

	test('...', async () => {
		// prettier-ignore
		let result = runKMeans<number>([1, 2, 3], [1], () => 0, () => 0);

		expect(result).toEqual([[1, 2, 3]]);
	});

	test('...', async () => {
		// prettier-ignore
		let result = runKMeans<number>([1], 3, () => 0, () => 0);

		expect(result).toEqual([[1]]);
	});

	test('...', async () => {
		// prettier-ignore
		let result = runKMeans<number>([1], [1, 2, 3], () => 0, () => 0);

		expect(result).toEqual([[1]]);
	});

	test.skip('...', async () => {
		// prettier-ignore
		let result = runKMeans<number>([1], [1, 2, 3],
			(a, b) => Math.abs(a - b),
			(...ns) => ns.reduce((r, n) => r + n) / ns.length,
		);
		Array.fromAsync;
		expect(result).toEqual([[1]]);
	});

	test.skip('...', async () => {
		type Vector = {x: number; y: number};
		let Vector = (x: number, y: number): Vector => ({x, y});
		for (let centers of [2, [Vector(0, 7), Vector(7, 0)]]) {
			// prettier-ignore
			let result = runKMeans<Vector>([Vector(1, 4), Vector(6, 2), Vector(0, 4), Vector(1, 3), Vector(5, 1), Vector(4, 0)], centers,
				(a, b) => Math.hypot(a.x - b.x, a.y - b.y),
				// prettier-ignore
				(...vs) => Vector(
					vs.reduce((r, v) => r + v.x, 0) / vs.length,
					vs.reduce((r, v) => r + v.y, 0) / vs.length,
				),
			);

			// prettier-ignore
			expect(result).toEqual([[Vector(1, 4), Vector(0, 4), Vector(1, 3)], [Vector(6, 2), Vector(5, 1), Vector(4, 0)]]); // todo 3, 2, 2
		}
	});
});

/*
declare const VectorMath: {
	distance<T extends Array<number>>(a: T, b: T): number;

	mean<T extends Array<number>>(...vs: T[]): T;
};

let Vec = (x: number, y: number): [number, number] => [x, y];

let result = runKMeans<[number, number]>(
	// prettier-ignore
	[Vec(1, 4), Vec(6, 2), Vec(0, 4), Vec(1, 3), Vec(5, 1), Vec(4, 0)],
	3,
	VectorMath.distance,
	// prettier-ignore
	VectorMath.mean,
);
*/
