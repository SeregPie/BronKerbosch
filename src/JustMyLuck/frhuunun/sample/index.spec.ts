import {describe, expect, it, mock} from "bun:test";

import sample from ".";

describe("sample", () => {
  it("...", () => {
    // todo: stats
  });

  it("...", () => {
    const random = mock(() => 0);
    const a = {};

    expect(
      sample(random, [a])
    ).toBe(a);
    expect(random).not.toBeCalled();
  });

  it("...", () => {
    const random = mock(() => 0);

    expect(() => {
      sample(random, []);
    }).toThrow(RangeError);
    expect(random).not.toBeCalled();
  });
});
