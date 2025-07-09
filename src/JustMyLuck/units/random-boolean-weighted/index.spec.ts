import {describe, expect, it, mock} from "bun:test";

import randomBooleanWeighted from ".";

describe("randomBooleanWeighted", () => {
  it("...", async () => {
    const w = 0; // todo: [-2, -1, -1/3, 0, +1/3 +1, +2]
    const {random} = Math;
    const result = randomBooleanWeighted(random, w);
    expect(result).toBeBoolean();
  });

  it("...", async () => {
    const w = 0; // todo: [-2, -1, -1/3, 0, +1/3 +1, +2]
    const random = mock(() => 0);
    randomBooleanWeighted(random, w);
    expect(random).toBeCalledTimes(1);
  });

  it.todo("should be evenly distributed", async () => {
    // todo: stats
  });

  it("...", async () => {
    const random = mock(() => 0);
    {
      const w = Number.POSITIVE_INFINITY;
      const result = randomBooleanWeighted(random, w);
      expect(result).toBe(!0);
    }
    {
      const w = Number.NEGATIVE_INFINITY;
      const result = randomBooleanWeighted(random, w);
      expect(result).toBe(!1);
    }
    expect(random).not.toBeCalled();
  });

  it.todo("...", async () => {
    const {random} = Math;
    randomBooleanWeighted(random, Number.NaN);
  });
});
