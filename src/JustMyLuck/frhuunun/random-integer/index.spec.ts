import {describe, expect, it, mock} from "bun:test";

import randomInteger from ".";

describe("randomInteger", () => {
  it("...", () => {
    // todo: stats
  });

  it("...", () => {
    const random = mock(() => 0);
    const n = 42; // todo: any integer
    const d = 1 - Math.random(); // todo

    expect(
      randomInteger(random, n, n + d)
    ).toBe(n);
    expect(
      randomInteger(random, n, n + 1)
    ).toBe(n);
    expect(
      randomInteger(random, n - d, n + d)
    ).toBe(n);
    expect(
      randomInteger(random, n - d, n + 1)
    ).toBe(n);
    expect(random).not.toBeCalled();
  });

  it("...", () => {
    const random = mock(() => 0);
    const n = 42; // todo: any integer
    const d = 1 - Math.random(); // todo

    expect(() => {
      randomInteger(random, n, n);
    }).toThrow(RangeError);
    expect(() => {
      randomInteger(random, n - d, n);
    }).toThrow(RangeError);
    expect(random).not.toBeCalled();
  });

  it("...", () => {
    const random = mock(() => 0);
    randomInteger(random, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

    expect(random).toHaveBeenCalledTimes(1);
  });

  it("...", () => {
    const random = () => 1 - Number.EPSILON;
    const n = Number.MAX_VALUE;

    expect(
      randomInteger(random, -n, n)
    ).toBeWithin(-n, n);
  });
});
