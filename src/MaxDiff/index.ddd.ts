import {describe, expect, test} from "bun:test";

import runMaxDiff from ".";

describe.skip("runMaxDiff", () => {
  test("...", async () => {
    let controller = runMaxDiff([]);

    expect(controller.complete).toBe(true);
    expect(controller.progress).toBe(1);
    expect(controller.result).toEqual([]);
    expect(controller.selectCandidates()).toEqual([]);
  });

  test("...", async () => {
    let controller = runMaxDiff(["a"]);

    expect(controller.complete).toBe(true);
    expect(controller.progress).toBe(1);
    expect(controller.result).toEqual(["a"]);
    expect(controller.selectCandidates()).toEqual([]);
    expect(controller.getItemsBefore("a")).toEqual([]);
    expect(controller.getItemsAfter("a")).toEqual([]);
  });

  test("...", async () => {
    let controller = runMaxDiff(["a", "b"]);

    expect(controller.complete).toBe(false);
    expect(controller.progress).toBe(0);
    expect(controller.result).toBeUndefined();
    expect(controller.selectCandidates()).toEqual(["a", "b"]);
    expect(controller.getItemsBefore("a")).toEqual([]);
    expect(controller.getItemsAfter("a")).toEqual([]);
    expect(controller.getItemsBefore("b")).toEqual([]);
    expect(controller.getItemsAfter("b")).toEqual([]);

    controller.order("b", "a");

    expect(controller.complete).toBe(true);
    expect(controller.progress).toBe(1);
    expect(controller.result).toEqual(["b", "a"]);
    expect(controller.selectCandidates()).toEqual([]);
    expect(controller.getItemsBefore("a")).toEqual(["b"]);
    expect(controller.getItemsAfter("a")).toEqual([]);
    expect(controller.getItemsBefore("b")).toEqual([]);
    expect(controller.getItemsAfter("b")).toEqual(["a"]);
  });

  test("...", async () => {
    let controller = runMaxDiff(["a", "b", "c"]);

    expect(controller.complete).toBe(false);
    expect(controller.progress).toBe(0);
    expect(controller.result).toBeUndefined();
    expect(controller.selectCandidates()).toEqual(["a", "b", "c"]);
    expect(controller.getItemsBefore("a")).toEqual([]);
    expect(controller.getItemsAfter("a")).toEqual([]);
    expect(controller.getItemsBefore("b")).toEqual([]);
    expect(controller.getItemsAfter("b")).toEqual([]);
    expect(controller.getItemsBefore("c")).toEqual([]);
    expect(controller.getItemsAfter("c")).toEqual([]);

    controller.order("c", "a");

    expect(controller.complete).toBe(false);
    // prettier-ignore
    expect(controller.progress).toBe(1/3);
    expect(controller.result).toBeUndefined();
    expect(controller.selectCandidates()).toEqual(["a", "b"]);
    expect(controller.getItemsBefore("a")).toEqual(["c"]);
    expect(controller.getItemsAfter("a")).toEqual([]);
    expect(controller.getItemsBefore("b")).toEqual([]);
    expect(controller.getItemsAfter("b")).toEqual([]);
    expect(controller.getItemsBefore("c")).toEqual([]);
    expect(controller.getItemsAfter("c")).toEqual(["a"]);

    controller.order("b", "a");

    expect(controller.complete).toBe(false);
    // prettier-ignore
    expect(controller.progress).toBe(2/3);
    expect(controller.result).toBeUndefined();
    expect(controller.selectCandidates()).toEqual(["b", "c"]);
    expect(controller.getItemsBefore("a")).toEqual(["b", "c"]);
    expect(controller.getItemsAfter("a")).toEqual([]);
    expect(controller.getItemsBefore("b")).toEqual([]);
    expect(controller.getItemsAfter("b")).toEqual(["a"]);
    expect(controller.getItemsBefore("c")).toEqual([]);
    expect(controller.getItemsAfter("c")).toEqual(["a"]);

    controller.order("c", "b");

    expect(controller.complete).toBe(true);
    expect(controller.progress).toBe(1);
    expect(controller.result).toEqual(["c", "b", "a"]);
    expect(controller.selectCandidates()).toEqual([]);
    expect(controller.getItemsBefore("a")).toEqual(["b", "c"]);
    expect(controller.getItemsAfter("a")).toEqual([]);
    expect(controller.getItemsBefore("b")).toEqual(["c"]);
    expect(controller.getItemsAfter("b")).toEqual(["a"]);
    expect(controller.getItemsBefore("c")).toEqual([]);
    expect(controller.getItemsAfter("c")).toEqual(["a", "b"]);
  });
});
