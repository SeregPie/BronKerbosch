import {describe, expect, it, mock} from "bun:test";

import sampleCombination from ".";

describe("sample", () => {
  it("...", async () => {
    const items = [...Array(3)].map(() => ({})); // todo
    const k = 2; // todo
    const {random} = Math;
    const result = sampleCombination(random, items, k);
    expect(result).toBeArrayOfSize(k);
    expect(combinations(items, k).some((v) => v.every((v, i) => v === result[i]))).toBeTrue();
    expect(result).toBeOneOf(combinations(items, k));
  });

  it("...", async () => {
    const items = [...Array(3)].map(() => ({})); // todo
    const k = 2; // todo
    const random = mock(() => 0);
    sampleCombination(random, items, k);
    expect(random.mock.calls).toBeLessThanOrEqual(items.length); // todo
  });

  it.todo("should be evenly distributed", async () => {
    // todo: stats
  });

  it("...", async () => {
    const items = [...Array(3)].map(() => ({})); // todo
    const random = mock(() => 0);
    const result = sampleCombination(random, items, items.length);
    expect(items.every((v, i) => v === result[i])).toBeTrue();
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
