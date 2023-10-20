import {fail} from 'assert';
import {describe, expect, test} from 'bun:test';

import runKMeans, {KMeansStats} from '.';

describe('runKMeans', () => {
	test('...', async () => {
		for (let items of [[], [1], [1, 2, 3]]) {
			for (let centers of [0, []]) {
				let stats!: KMeansStats;
				// prettier-ignore
				let result = runKMeans<number>(items, centers, () => fail(), () => fail(), {
					stats: (r) => (stats = r),
				});

				expect(result).toEqual([]);
				expect(stats).toEqual({
					centers: [],
					iterations: 0,
				});
			}
		}
	});

	test('...', async () => {
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
		let stats!: KMeansStats;
		// prettier-ignore
		let result = runKMeans<number>([], 3, () => fail(), () => fail(), {
			stats: (r) => (stats = r),
		});

		expect(result).toEqual([]);
		expect(stats).toEqual({
			centers: [],
			iterations: 0,
		});
	});

	test('...', async () => {
		for (let centers of [1, [NaN], 3, [NaN, NaN, NaN]]) {
			let stats!: KMeansStats;
			// prettier-ignore
			let result = runKMeans<number>([1], centers, () => fail(), () => fail(), {
				stats: (r) => (stats = r),
			});

			expect(result).toEqual([[1]]);
			expect(stats).toEqual({
				centers: [1],
				iterations: 0,
			});
		}
	});

	test('...', async () => {
		let centerFn = (...ns: number[]) => ns.reduce((r, n) => r + n) / ns.length;
		for (let centers of [1, [NaN]]) {
			let stats!: KMeansStats;
			// prettier-ignore
			let result = runKMeans<number>([1, 2, 3], centers, () => fail(), centerFn, {
				stats: (r) => (stats = r),
			});

			expect(result).toEqual([[1, 2, 3]]);
			expect(stats).toEqual({
				centers: [2],
				iterations: 0, // ?
			});
		}
	});

	test('...', async () => {
		let distanceFn = (a: number, b: number) => Math.abs(a - b);
		let centerFn = (...ns: number[]) => ns.reduce((r, n) => r + n) / ns.length;
		let stats!: KMeansStats;
		// prettier-ignore
		let result = runKMeans<number>([1, 1], 3, distanceFn, centerFn, {
			stats: (r) => (stats = r),
		});

		expect(result).toEqual([[1, 1]]);
		expect(stats).toEqual({
			centers: [1],
			iterations: 0, // ?
		});
	});

	test('...', async () => {
		let stats!: KMeansStats;
		// prettier-ignore
		let result = runKMeans<number>([1, 2, 3], 3, () => fail(), () => fail(), {
			stats: (r) => (stats = r),
		});

		expect(result).toEqual([[1], [2], [3]]);
		expect(stats).toEqual({
			centers: [1, 2, 3],
			iterations: 0, // ?
		});
	});

	test.skip('...', async () => {
		type Vec = {x: number; y: number};
		let Vec = (x: number, y: number): Vec => ({x, y});
		for (let centers of [2, [Vec(0, 7), Vec(7, 0)]]) {
			let stats!: KMeansStats;
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
				{stats: (r) => (stats = r)},
			);

			// prettier-ignore
			expect(result).toEqual([[Vec(1, 4), Vec(0, 4), Vec(1, 3)], [Vec(6, 2), Vec(5, 1), Vec(4, 0)]]); // todo 3, 2, 2
			expect(stats).toEqual({
				centers: [NaN, NaN, NaN],
				iterations: NaN,
			});
		}
	});
});
