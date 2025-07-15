import {describe, expect, it, mock} from "bun:test";

import randomBoolean from ".";
//import MersenneTwister from "../../impls/mersenne-twister";

describe("randomBoolean", () => {
  it("...", async () => {
    const {random} = Math; // todo
    const result = randomBoolean(random);
    expect(result).toBeBoolean();
  }, {repeats: 32}); // todo

  it("...", async () => {
    const random = mock(() => 0); // todo
    randomBoolean(random);
    expect(random).toBeCalledTimes(1);
  }, {repeats: 32}); // todo

  it.todo("should be evenly distributed", async () => {

  });
});
