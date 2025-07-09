import {describe, expect, it, mock} from "bun:test";

import randomBoolean from ".";
import MersenneTwister from "../../impls/mersenne-twister";

describe("randomBoolean", () => {
  it.todo("should be evenly distributed", async () => {
    const {random} = new MersenneTwister(42);

  });
});
