import {describe, expect, it, mock} from "bun:test";

import randomFloat from ".";

describe("randomFloat", () => {
  it.todo("should be evenly distributed", async () => {
    // todo: stats
  });

  it("...", async () => {
    const random = mock(Math.random);
    // todo
    randomFloat(random, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

    expect(random).toHaveBeenCalledTimes(1);
  });

  // todo: descritpion
  it.each((() => {
    const n = 42;
    return ([n, n + 0.3] as const).flatMap((min) => {
      return [[min, n]] as const;
    });
  })())("should throw if outer of bounds", async (min, max) => {
    const random = mock(() => 0);
    expect(() => {
      randomFloat(random, min, max);
    }).toThrow(RangeError);
    expect(random).not.toBeCalled();
  });

  it("should work in an extreme scenario", async () => {
    for (const random of [
      () => 1 - Number.EPSILON,
      () => Number.MIN_VALUE,
    ]) {
      for (const [min, max] of [
        [-Number.MAX_VALUE, Number.MAX_VALUE],
        [-Number.MIN_VALUE, Number.MIN_VALUE],
      ] as const) {
        expect(
          randomFloat(random, min, max)
        ).toBeWithin(min, max);
      }
    }
  });
});
