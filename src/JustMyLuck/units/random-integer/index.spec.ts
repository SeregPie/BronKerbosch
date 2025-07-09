import {describe, expect, it, mock} from "bun:test";

import randomInteger from ".";

describe("randomInteger", () => {
  it("...", async () => {
    const [min, max] = [0, 42]; // todo
    const {random} = Math;
    const result = randomInteger(random, min, max);
    expect(result).toBeInteger();
    expect(result).toBeWithin(min, max);
  });

  it("...", async () => {
    const [min, max] = [0, 42]; // todo
    const random = mock(() => 0);
    randomInteger(random, min, max);
    expect(random).toBeCalledTimes(1);
  });

  it.todo("should be evenly distributed", async () => {
    // todo: stats
  });

  // todo: descritpion
  it.each([...(function* () {
    const n = 42;
    const aaa = [0.7, 0.3, 0];
    const bbb = [0.3, 0.7, 1];
    for (const a of aaa) {
      for (const b of bbb) {
        yield [n, n - a, n + b] as const;
      }
    }
  })()])("should skip random if only one possible outcome", async (n, min, max) => {
    const random = mock(() => 0);
    const result = randomInteger(random, min, max);
    expect(result).toBe(n);
    expect(random).not.toBeCalled();
  });

  // todo: descritpion
  it.each((() => {
    const n = 42;
    return [n - 0.3, n, n + 0.3].flatMap((min) => {
      return [[min, n]];
    });
  })())("should throw if outer of bounds", async (min, max) => {
    const random = mock(() => 0);
    const fn = () => randomInteger(random, min, max);
    expect(fn).toThrow(RangeError);
    expect(random).not.toBeCalled();
  });

  it("should work in an extreme scenario", async () => {
    const n = Number.MAX_VALUE;
    const random = () => 1 - Number.EPSILON;

    expect(
      randomInteger(random, -n, n)
    ).toBeWithin(-n, n);
  });
});
