import {describe, expect, it, mock} from "bun:test";

import sampleCombination from ".";

describe.skip("sampleCombination", () => {
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
    const random = mock(() => 0);
    const items = [...Array(3)].map(() => ({})); // todo
    const k = items.length;
    const result = sampleCombination(random, items, k);
    expect(items.every((v, i) => v === result[i])); // todo
    expect(random).not.toBeCalled();
  });

  it("...", async () => {
    const random = mock(() => 0);
    const items = [...Array(3)].map(() => ({})); // todo
    const k = 0;
    const result = sampleCombination(random, items, k);
    expect(result).toBe;
    expect(random).not.toBeCalled();
  });

  it("...", async () => {
    const random = mock(() => 0);
    for (const n of [0, 3]) {
      const items = [...Array(n)].map(() => ({})); // todo
      const k = n + 1; // todo: n + randomInteger(1, ?)
      const result = sampleCombination(random, items, k);
      expect(result).toSatisfy((t) => items.every((v, i) => v === t[i]));
    }
    expect(random).not.toBeCalled();
  });

  it("...", async () => {
    const random = mock(() => 0);
    for (const n of [0, 3]) {
      const items = [...Array(n)].map(() => ({})); // todo
      const k = n + 1; // todo: n + randomInteger(1, ?)
      const fn = () => sampleCombination(random, items, k);
      expect(fn).toThrow(RangeError);
    }
    expect(random).not.toBeCalled();
  });

  it.todo("...", async () => {
    Number.NaN;
  });
});
