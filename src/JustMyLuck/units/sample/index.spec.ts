import {describe, expect, it, mock} from "bun:test";

import sample from ".";

describe("sample", () => {
  it.todo("should be evenly distributed", async () => {
    // todo: stats
  });

  it("...", async () => {
    const a = {};
    const random = mock(() => 0);
    expect(
      sample(random, [a])
    ).toBe(a);
    expect(random).not.toBeCalled();
  });

  it("...", async () => {
    const random = mock(() => 0);
    expect(() => {
      sample(random, []);
    }).toThrow(RangeError);
    expect(random).not.toBeCalled();
  });
});
