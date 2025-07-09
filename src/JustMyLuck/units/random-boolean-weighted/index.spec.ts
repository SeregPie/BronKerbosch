import {describe, expect, it, mock} from "bun:test";

import randomBooleanWeighted from ".";

describe("randomBooleanWeighted", () => {
  it.todo("should be evenly distributed", async () => {
    // todo: stats
  });

  it("...", async () => {
    const random = mock(() => 0);
    expect(
      randomBooleanWeighted(random, Number.POSITIVE_INFINITY)
    ).toBe(!0);
    expect(
      randomBooleanWeighted(random, Number.NEGATIVE_INFINITY)
    ).toBe(!1);
    expect(random).not.toBeCalled();
  });

  it.todo("...", async () => {
    const {random} = Math;
    randomBooleanWeighted(random, Number.NaN);
  });
});
