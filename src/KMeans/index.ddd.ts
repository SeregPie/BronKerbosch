import {describe, expect, test} from "bun:test";

import runKMeans from ".";

import VectorMath, {Vector2} from "../VectorMath";

const a = VectorMath.mul([1, 2, 3], [3, 2, 1]);

// todo: better descriptions

describe.skip("runKMeans", () => {
	// prettier-ignore
	test.skip("should work in a common scenario", () => {
		// todo: more examples
		const result = runKMeans<Vector2>(
			[[1, 4], [6, 2], [0, 4], [1, 3], [5, 1], [4, 0]],
			[[0, 7], [7, 0]],
			VectorMath.distance,
			VectorMath.mean,
		);

		expect(result).toEqual([[[1, 4], [0, 4], [1, 3]], [[6, 2], [5, 1], [4, 0]]]);
	});

	// prettier-ignore
	test("should return no clusters if no items nor centers are provided", () => {
		for (const [items, centers] of <Iterable<[Array<number>, number | Array<number>]>>[
			[[], 0], [[], []], [[], 3], [[], [1, 2, 3]], [[1, 2, 3], 0], [[1, 2, 3], []]
		]) {
			const result = runKMeans(items, centers, () => 0, (v) => v);

			expect(result).toEqual([]);
		}
	});

	// prettier-ignore
	test("should return no clusters for zero iterations", () => {
		for (const [items, centers] of <Iterable<[Array<number>, number | Array<number>]>>[
			[[1, 2, 3], 3], [[1, 2, 3], [1, 2, 3]]
		]) {
			const result = runKMeans(items, centers, () => 0, (v) => v, {
				iterations: 0,
			});

			expect(result).toEqual([]);
		}
	});

	// prettier-ignore
	test("should return all items as single cluster if only one item or center is provided", () => {
		for (const [items, centers] of <Iterable<[Array<number>, number | Array<number>]>>[
			[[1, 2, 3], 1], [[1, 2, 3], [1]], [[1], 3], [[1], [1, 2, 3]]
		]) {
			const result = runKMeans(items, centers, () => 0, (v) => v);

			expect(result).toEqual([items]);
		}
	});
});
