import { describe, expect, it } from "bun:test";

import runBronKerbosch from ".";

describe("runBronKerbosch", () => {
	it("should work in a common scenario", () => {
		{
			const result = runBronKerbosch([[1, 2], [1, 3], [2, 3]]);

			expect(result).toEqual([[1, 2, 3]]);
		}
		{
			const result = runBronKerbosch([[1, 2], [1, 3], [1, 4]]);

			expect(result).toEqual([[1, 2], [1, 3], [1, 4]]);
		}
		{
			const result = runBronKerbosch([[1, 4], [2, 3], [2, 5], [3, 5], [4, 5], [4, 6]]);

			expect(result).toEqual([[1, 4], [2, 3, 5], [4, 5], [4, 6]]);
		}
		{
			const result = runBronKerbosch([[1, 3], [1, 4], [1, 6], [2, 3], [2, 5], [3, 5], [4, 6], [5, 6]]);

			expect(result).toEqual([[1, 3], [1, 4, 6], [2, 3, 5], [5, 6]]);
		}
		{
			const result = runBronKerbosch([[1, 2], [1, 3], [1, 5], [1, 6], [2, 5], [2, 6], [3, 4], [3, 5], [5, 6]]);

			expect(result).toEqual([[1, 2, 5, 6], [1, 3, 5], [3, 4]]);
		}
	});

	it("should return empty result for empty graph", () => {
		const result = runBronKerbosch([]);

		expect(result).toEqual([]);
	});

	it("should ignore loops", () => {
		{
			const result = runBronKerbosch([[1, 1], [2, 2]]);

			expect(result).toEqual([]);
		}
		{
			const result = runBronKerbosch([[1, 1], [2, 2], [1, 2], [1, 3], [2, 3]]);

			expect(result).toEqual([[1, 2, 3]]);
		}
	});

	it("should ignore duplicates", () => {
		{
			const result = runBronKerbosch([[1, 2], [2, 1]]);

			expect(result).toEqual([[1, 2]]);
		}
		{
			const result = runBronKerbosch([[1, 2], [2, 1], [1, 2], [1, 3], [2, 3]]);

			expect(result).toEqual([[1, 2, 3]]);
		}
	});
});
