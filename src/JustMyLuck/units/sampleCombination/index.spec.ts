import {describe, expect, it, mock} from "bun:test";

import sampleCombination from ".";

describe("sampleCombination", () => {
  it("...", async () => {
    const {random} = Math;
    const items = [...Array(3)].map(() => ({})); // todo
    const k = 2; // todo
    const result = sampleCombination(random, items, k);
    expect(result); // todo
  }, {repeats: 32});

  it("...", async () => {
    const random = mock(() => 0);
    const items = [...Array(88)].map(() => ({})); // todo
    const k = 3; // todo
    sampleCombination(random, items, k);
    expect(random.mock.calls.length).not.toBeGreaterThan(Math.max(items.length, k)); // todo
  }, {repeats: 32});

  it.todo("should be evenly distributed", async () => {

  });

  it("...", async () => {
    const random = mock(() => 0);
    const items = [...Array(3)].map((_, i) => i); // todo
    const result = sampleCombination(random, items, 0);
    expect(result).toEqual([]); // todo
    expect(random).not.toBeCalled();
  });

  it("...", async () => {
    const random = mock(() => 0);
    const items = [...Array(3)].map((_, i) => i); // todo
    const result = sampleCombination(random, items, items.length);
    expect(result).toEqual(items); // todo
    expect(random).not.toBeCalled();
  });

  it("...", async () => {
    const random = mock(() => 0);
    const items = [...Array(3)].map((_, i) => i); // todo
    const run = () => sampleCombination(random, items, items.length + 1);
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
