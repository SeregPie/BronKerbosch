import {describe, expect, it, mock} from "bun:test";

import sample from ".";

describe("sample", () => {
  it("...", async () => {
    const {random} = Math;
    const items = [...Array(3)].map(() => ({})); // todo
    const result = sample(random, items);
    expect(result).toBeOneOf(items);
  });

  it("...", async () => {
    const random = mock(() => 0);
    {
      const items = [...Array(3)].map(() => ({})); // todo
      sample(random, items);
    }
    expect(random).toBeCalledTimes(1);
  });

  it.todo("should be evenly distributed", async () => {
    // todo: stats
  });

  it("...", async () => {
    const item = {};
    const random = mock(() => 0);
    const result = sample(random, [item]);
    expect(result).toBe(item);
    expect(random).not.toBeCalled();
  });

  it("...", async () => {
    const random = mock(() => 0);
    const fn = () => sample(random, []);
    expect(fn).toThrow(RangeError);
    expect(random).not.toBeCalled();
  });
});
