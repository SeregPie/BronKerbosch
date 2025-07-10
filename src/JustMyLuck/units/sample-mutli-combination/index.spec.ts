import {describe, expect, it, mock} from "bun:test";

import sampleMultiCombination from ".";

describe.skip("sampleMultiCombination", () => {
  it("...", async () => {
    const items = [...Array(3)].map(() => ({})); // todo
    const k = 2; // todo
    const {random} = Math;
    const result = sampleMultiCombination(random, items, k);
    expect(result).toBeArrayOfSize(k);
    expect(a).t;
    expect(multicombinations(items, k).some((v) => v.every((v, i) => v === result[i]))).toBeTrue();
  });

  it("...", async () => {
    const items = [...Array(3)].map(() => ({})); // todo
    const k = 2; // todo
    const random = mock(() => 0);
    sampleMultiCombination(random, items, k);
    expect(random.mock.calls).toBeLessThanOrEqual(items.length); // todo
  });

  it.todo("should be evenly distributed", async () => {
    // todo: stats
  });

  it("...", async () => {
    const item = {}; // todo
    const k = 3; // todo
    const random = mock(() => 0);
    const result = sampleMultiCombination(random, [item], k);
    expect([...Array(k)].every((_, i) => result[i] === item)); // todo
    expect(random).not.toBeCalled();
  });

  it("...", async () => {
    const random = mock(() => 0);
    {
      const source = <any[]>[];
      const k = source.length + 1;
      const fn = () => sampleCombination(random, source, k);
      expect(fn).toThrow(RangeError);
    }
    {
      const source = <any[]>[{}, {}, {}];
      const k = source.length + 1;
      const fn = () => sampleCombination(random, source, k);
      expect(fn).toThrow(RangeError);
    }
    expect(random).not.toBeCalled();
  });

  it.todo("...", async () => {
    Number.NaN;
  });
});
