import {fail} from 'assert';
import {describe, expect, test} from 'bun:test';

import runKMeans from '.';

describe('runKMeans', () => {
	test('...', async () => {
		for (let items of [0, 1, 3].map((n) => Array.from({length: n}, () => 0))) {
			{
				// prettier-ignore
				let result = runKMeans<number>(items, 0, () => fail(), () => fail());

				expect(result).toEqual([]);
			}
			{
				// prettier-ignore
				let result = runKMeans<number>(items, [], () => fail(), () => fail());

				expect(result).toEqual([]);
			}
		}
		for (let items of [[], [0], [1, 2, 3]]) {
			for (let centers of [0, []]) {
				// prettier-ignore
				let result = runKMeans<number>(items, centers, () => fail(), () => fail());

				expect(result).toEqual([]);
			}
		}
	});

	test('...', async () => {
		for (let i of [0, 1, 3]) {
			for (let centers of [i, Array.from({length: i}, () => Math.random())]) {
				// prettier-ignore
				let result = runKMeans<number>([], centers, () => fail(), () => fail());

				expect(result).toEqual([]);
			}
		}
		for (let centers of [1, [0], 3, [1, 2, 3]]) {
			// prettier-ignore
			let result = runKMeans<number>([], centers, () => fail(), () => fail());

			expect(result).toEqual([]);
		}

		let stats!: KMeansStats;
		// prettier-ignore
		let result = runKMeans<number>([], [1, 2, 3], () => fail(), () => fail(), {
			stats: (r) => (stats = r),
		});

		expect(result).toEqual([[], [], []]);
		expect(stats).toEqual({
			centers: [1, 2, 3],
			iterations: 0,
		});
	});

	test('...', async () => {
		for (let centers of [1, [NaN], 3, [NaN, NaN, NaN]]) {
			let stats!: KMeansStats;
			// prettier-ignore
			let result = runKMeans<number>([0], centers, () => fail(), () => fail(), {
				stats: (r) => (stats = r),
			});

			expect(result).toEqual([[0]]);
		}
	});

	test('...', async () => {
		for (let centers of [1, [NaN]]) {
			// prettier-ignore
			let result = runKMeans<number>([1, 2, 3], centers, () => fail(), () => fail());

			expect(result).toEqual([[1, 2, 3]]);
		}
	});

	test('...', async () => {
		let distanceFn = (a: number, b: number) => Math.abs(a - b);
		let centerFn = (...ns: number[]) => ns.reduce((r, n) => r + n) / ns.length;
		let result = runKMeans<number>([0, 0, 0], 3, distanceFn, centerFn);

		expect(result).toEqual([[0, 0, 0]]);
	});

	test('...', async () => {
		let distanceFn = (a: number, b: number) => Math.abs(a - b);
		let centerFn = (...ns: number[]) => ns.reduce((r, n) => r + n) / ns.length;
		let result = runKMeans<number>([1, 2, 3], 3, distanceFn, centerFn);

		expect(result).toEqual([[1], [2], [3]]);
	});

	test.skip('...', async () => {
		type Vec = {x: number; y: number};
		let Vec = (x: number, y: number): Vec => ({x, y});
		for (let centers of [2, [Vec(0, 7), Vec(7, 0)]]) {
			let result = runKMeans<Vec>(
				// prettier-ignore
				[Vec(1, 4), Vec(6, 2), Vec(0, 4), Vec(1, 3), Vec(5, 1), Vec(4, 0)],
				centers,
				(a, b) => Math.hypot(a.x - b.x, a.y - b.y),
				// prettier-ignore
				(...vs) => Vec(
					vs.reduce((r, v) => r + v.x, 0) / vs.length,
					vs.reduce((r, v) => r + v.y, 0) / vs.length,
				),
			);

			// prettier-ignore
			expect(result).toEqual([[Vec(1, 4), Vec(0, 4), Vec(1, 3)], [Vec(6, 2), Vec(5, 1), Vec(4, 0)]]); // todo 3, 2, 2
		}
	});
});

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
