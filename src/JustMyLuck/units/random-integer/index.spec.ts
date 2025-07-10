import {describe, expect, it, mock} from "bun:test";

import randomInteger from ".";

describe("randomInteger", () => {
  it("...", async () => {
    const min = -42; // todo
    const max = +42; // todo
    const {random} = Math;
    const result = randomInteger(random, min, max);
    expect(result).toBeInteger();
    expect(result).toBeWithin(min, max);
  });

  it("...", async () => {
    const min = -42; // todo
    const max = +42; // todo
    const random = mock(() => 0);
    randomInteger(random, min, max);
    expect(random).toBeCalledTimes(1);
  });

  it.todo("should be evenly distributed", async () => {

  });

  it("...", async () => {
    const random = mock(() => 0);
    const n = +42; // todo
    const min = n;
    const max = n + 0.3; // todo
    const result = randomInteger(random, min, max);
    expect(result).toBe(n);
    expect(random).not.toBeCalled();
  });

  it("...", async () => {
    const random = mock(() => 0);
    const n = +42; // todo
    const min = n - 0.3; // todo
    const max = n + 0.3; // todo
    const result = randomInteger(random, min, max);
    expect(result).toBe(n);
    expect(random).not.toBeCalled();
  });

  it("...", async () => {
    const random = mock(() => 0);
    const n = +42; // todo
    const min = n;
    const max = n;
    const fn = () => randomInteger(random, min, max);
    expect(fn).toThrow(RangeError);
    expect(random).not.toBeCalled();
  });

  it("...", async () => {
    const random = mock(() => 0);
    const n = +42; // todo
    const min = n - 0.3; // todo
    const max = n;
    const fn = () => randomInteger(random, min, max);
    expect(fn).toThrow(RangeError);
    expect(random).not.toBeCalled();
  });

  it("...", async () => {
    const random = mock(() => 0);
    const n = +42; // todo
    const min = n + 0.3; // todo
    const max = n;
    const fn = () => randomInteger(random, min, max);
    expect(fn).toThrow(RangeError);
    expect(random).not.toBeCalled();
  });

  it("...", async () => {
    const {random} = Math;
    const min = 0;
    const max = +Number.MIN_VALUE;
    const result = randomInteger(random, min, max);
    expect(result).toBe(min);
  });

  it("...", async () => {
    const {random} = Math;
    const min = -Number.MAX_VALUE;
    const max = +Number.MAX_VALUE;
    const result = randomInteger(random, min, max);
    expect(result).toBeWithin(min, max);
  });

  it("...", async () => {
    const random = () => 1 - Number.EPSILON;
    const min = -42; // todo
    const max = +42; // todo
    const result = randomInteger(random, min, max);
    expect(result).toBeWithin(min, max);
  });

  it.todo("...", async () => {
    Number.NaN;
    Number.POSITIVE_INFINITY;
    Number.NEGATIVE_INFINITY;
  });
});
