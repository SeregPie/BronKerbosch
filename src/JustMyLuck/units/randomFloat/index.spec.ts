import {describe, expect, it, mock} from "bun:test";

import randomFloat from ".";

describe("randomFloat", () => {
  it("...", async () => {
    const {random} = Math;
    const min = -42.0; // todo
    const max = +42.0; // todo
    const result = randomFloat(random, min, max);
    expect(result).toBeWithin(min, max);
  }, {repeats: 32});

  it("...", async () => {
    const random = mock(() => 0);
    const min = -42.0; // todo
    const max = +42.0; // todo
    randomFloat(random, min, max);
    expect(random).toBeCalledTimes(1);
  }, {repeats: 32});

  it.todo("should be evenly distributed", async () => {

  });

  it("...", async () => {
    const random = mock(() => 0);
    const n = +42.0; // todo
    const run = () => randomFloat(random, n, n);
    expect(run).toThrow(RangeError);
    expect(random).not.toBeCalled();
  });

  it("...", async () => {
    const random = mock(() => 0);
    const n = +42.0; // todo
    const run = () => randomFloat(random, n + 0.3, n); // todo
    expect(run).toThrow(RangeError);
    expect(random).not.toBeCalled();
  });

  it("...", async () => {
    const {random} = Math;
    const result = randomFloat(random, 0, Number.MIN_VALUE);
    expect(result).toBe(0);
  });

  it("...", async () => {
    const {random} = Math;
    const result = randomFloat(random, -Number.MAX_VALUE, +Number.MAX_VALUE);
    expect(result).toBeFinite();
  });

  it("...", async () => {
    const random = () => 1 - Number.EPSILON;
    const min = -42.0; // todo
    const max = +42.0; // todo
    const result = randomFloat(random, min, max);
    expect(result).toBeWithin(min, max);
  });

  it.todo("...", async () => {
    Number.NaN;
    Number.POSITIVE_INFINITY;
    Number.NEGATIVE_INFINITY;
  });
});
