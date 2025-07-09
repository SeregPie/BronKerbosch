import {describe, expect, it, mock} from "bun:test";

import sampleCombination from ".";

describe("sample", () => {
  it("...", async () => {
    const [a, b, c] = [{}, {}, {}];
    const {random} = Math;
    const result = sampleCombination(random, [a, b, c], 2);
    expect(result).toBeOneOf([[a, b], [a, c], [b, c]]);
  });

  it("...", async () => {
    const [a, b, c] = [{}, {}, {}];
    const random = mock(() => 0);
    sampleCombination(random, [a, b, c], 2);
    expect(random.mock.calls).toBeLessThanOrEqual(3);
  });

  it.todo("should be evenly distributed", async () => {
    // todo: stats
  });

  it("...", async () => {
    const random = mock(() => 0);
    const source = [2, 1, 0]; // todo
    const result = sampleCombination(random, source, source.length);
    expect(result).toEqual(source);
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
