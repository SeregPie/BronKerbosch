import {describe, expect, it, mock} from "bun:test";

import shuffle from ".";

// todo: descriptions and order
describe("sampleCombination", () => {
  it("...", async () => {
    const {random} = Math; // todo
    const items = [...Array(3)].map(() => ({})); // todo
    const result = shuffle(random, items);
    expect(result).toBe(items);
  });

  it("...", async () => {
    const random = mock(() => Math.random()); // todo
    const items = [...Array(3)].map(() => ({})); // todo
    shuffle(random, items);
    expect(random.mock.calls.length).not.toBeGreaterThan(items.length - 1);
  }, {repeats: 32});

  it("...", async () => {
    const fn = () => shuffle(() => 0, new Set() as any); // todo: x any any vs <any>x
    expect(fn).toThrow(TypeError);
  });

  it.todo("should be evenly distributed", async () => {

  });
});
