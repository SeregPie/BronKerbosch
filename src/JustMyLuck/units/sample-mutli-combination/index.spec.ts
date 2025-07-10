import {describe, expect, it, mock} from "bun:test";

import sampleMultiCombination from ".";

describe("sampleMultiCombination", () => {
  it("...", async () => {
    const {random} = Math;
    const items = [...Array(3)].map(() => ({})); // todo
    const k = 2; // todo
    const result = sampleMultiCombination(random, items, k);
    expect(result); // todo
  }, {repeats: 32});

  it("...", async () => {
    const random = mock(() => 0);
    const items = [...Array(3)].map(() => ({})); // todo
    const k = 3; // todo
    sampleMultiCombination(random, items, k);
    expect(random.mock.calls.length).toBeLessThanOrEqual(Math.max(items.length, k)); // todo
  }, {repeats: 32});

  it.todo("should be evenly distributed", async () => {
    // todo: stats
  });

  it("...", async () => {
    const random = mock(() => 0);
    const items = [...Array(3)].map((_, i) => i); // todo
    const result = sampleMultiCombination(random, items, 0);
    expect(result).toEqual([]); // todo
    expect(random).not.toBeCalled();
  });

  it("...", async () => {
    const random = mock(() => 0);
    const item = "a"; // todo
    const k = 3; // todo
    const result = sampleMultiCombination(random, [item], k);
    expect(result).toEqual([...Array(k)].map(() => item)); // todo
    expect(random).not.toBeCalled();
  });

  it("...", async () => {
    const random = mock(() => 0);
    const run = () => sampleMultiCombination(random, [], 1);
    expect(run).toThrow(RangeError);
    expect(random).not.toBeCalled();
  });

  it.todo("...", async () => {
    -1;
    2.2;
    Number.NaN;
    Number.POSITIVE_INFINITY;
    Number.NEGATIVE_INFINITY;
  });
});
