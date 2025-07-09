import {describe, expect, it, mock} from "bun:test";

import randomBoolean from ".";
//import MersenneTwister from "../../impls/mersenne-twister";

describe("randomBoolean", () => {
  it("...", async () => {
    const {random} = Math;
    const result = randomBoolean(random);
    expect(result).toBeBoolean();
  });

  it("...", async () => {
    const random = mock(() => 0);
    randomBoolean(random);
    expect(random).toBeCalledTimes(1);
  });

  it.todo("should be evenly distributed", async () => {

  });
});
