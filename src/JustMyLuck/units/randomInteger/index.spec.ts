import {describe, expect, it, mock} from "bun:test";

import randomInteger from ".";

describe("randomInteger", () => {
  it("...", async () => {
    const {random} = Math;
    const min = -42; // todo
    const max = +42; // todo
    const result = randomInteger(random, min, max);
    expect(result).toBeInteger();
    expect(result).toBeWithin(min, max);
  }, {repeats: 32});

  it("...", async () => {
    const random = mock(() => 0);
    const min = -42; // todo
    const max = +42; // todo
    randomInteger(random, min, max);
    expect(random).toBeCalledTimes(1);
  }, {repeats: 32});

  it.todo("should be evenly distributed", async () => {

  });

  it("...", async () => {
    const random = mock(() => 0);
    const n = +42; // todo
    const result = randomInteger(random, n, n + 0.3); // todo
    expect(result).toBe(n);
    expect(random).not.toBeCalled();
  });

  it("...", async () => {
    const random = mock(() => 0);
    const n = +42; // todo
    const result = randomInteger(random, n - 0.3, n + 0.3); // todo
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
    const run = () => randomInteger(random, n, n);
    expect(run).toThrow(RangeError);
    expect(random).not.toBeCalled();
  });

  it("...", async () => {
    const random = mock(() => 0);
    const n = +42; // todo
    const run = () => randomInteger(random, n + 0.3, n); // todo
    expect(run).toThrow(RangeError);
    expect(random).not.toBeCalled();
  });

  it("...", async () => {
    const random = mock(() => 0);
    const n = +42; // todo
    const run = () => randomInteger(random, n - 0.3, n); // todo
    expect(run).toThrow(RangeError);
    expect(random).not.toBeCalled();
  });

  it("...", async () => {
    const {random} = Math;
    const result = randomInteger(random, 0, Number.MIN_VALUE);
    expect(result).toBe(0);
  });

  it("...", async () => {
    const {random} = Math;
    const result = randomInteger(random, -Number.MAX_VALUE, +Number.MAX_VALUE);
    expect(result).toBeFinite();
  });

  it("...", async () => {
    const min = -42; // todo
    const max = +42; // todo
    const result = randomInteger(() => 1 - Number.EPSILON, min, max);
    expect(result).toBeWithin(min, max);
  });

  it.todo("...", async () => {
    Number.NaN;
    Number.POSITIVE_INFINITY;
    Number.NEGATIVE_INFINITY;
  });
});
