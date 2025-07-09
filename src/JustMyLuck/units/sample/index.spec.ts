import {describe, expect, it, mock} from "bun:test";

import sample from ".";

describe("sample", () => {
  it("...", async () => {
    const [a, b, c] = [{}, {}, {}];
    const {random} = Math;
    const result = sample(random, [a, b, c]);
    expect(result).toBeOneOf([a, b, c]);
  });

  it("...", async () => {
    const [a, b, c] = [{}, {}, {}];
    const random = mock(() => 0);
    sample(random, [a, b, c]);
    expect(random).toBeCalledTimes(1);
  });

  it.todo("should be evenly distributed", async () => {
    // todo: stats
  });

  it("...", async () => {
    const random = mock(() => 0);
    const [a] = [{}];
    const result = sample(random, [a]);
    expect(result).toBe(a);
    expect(random).not.toBeCalled();
  });

  it("...", async () => {
    const random = mock(() => 0);
    const fn = () => sample(random, []);
    expect(fn).toThrow(RangeError);
    expect(random).not.toBeCalled();
  });
});
