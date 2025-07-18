import {describe, expect, it} from "bun:test";

import VectorMath from ".";

const a = VectorMath.add([-25, -53, -81, "a"], [-67, -68, -23, "-42"]);

// todo: better descriptions
// todo: better examples

describe("add", () => {
  it("02", () => {
    expect(VectorMath.add([-25, -53, -81, 71] as const, [-67, -68, -23, -42] as const)).toEqual([-92, -121, -104, 29]);
  });

  it("01", () => {
    expect(VectorMath.add<0>([], [])).toEqual([]);
  });
});

describe("sub", () => {
  it("02", () => {
    expect(VectorMath.sub([-34, -46, -85, 93], [1, -61, -83, -40])).toEqual([-35, 15, -2, 133]);
  });

  it("01", () => {
    expect(VectorMath.sub([], [])).toEqual([]);
  });
});

describe("mul", () => {
  it("02", () => {
    expect(VectorMath.mul([0, -14, 47, -65], [-85, 28, -55, -17])).toEqual([-0, -392, -2585, 1105]);
  });

  it("01", () => {
    expect(VectorMath.mul([], [])).toEqual([]);
  });
});

describe("div", () => {
  it("02", () => {
    expect(VectorMath.div([0, -392, -2585, 1105], [-85, 28, -55, -17])).toEqual([-0, -14, 47, -65]);
  });

  it("01", () => {
    expect(VectorMath.div([], [])).toEqual([]);
  });
});

describe("addScalar", () => {
  it("02", () => {
    expect(VectorMath.addScalar([97, 93, -58, 10], -45)).toEqual([52, 48, -103, -35]);
  });

  it("01", () => {
    expect(VectorMath.addScalar([], Math.random())).toEqual([]);
  });
});

describe("subScalar", () => {
  it("02", () => {
    expect(VectorMath.subScalar([68, 68, -88, 48], -70)).toEqual([138, 138, -18, 118]);
  });

  it("01", () => {
    expect(VectorMath.subScalar([], Math.random())).toEqual([]);
  });
});

describe("mulScalar", () => {
  it("02", () => {
    expect(VectorMath.mulScalar([74, -67, -8, -63], -61)).toEqual([-4514, 4087, 488, 3843]);
  });

  it("01", () => {
    expect(VectorMath.mulScalar([], Math.random())).toEqual([]);
  });
});

describe("divScalar", () => {
  it("02", () => {
    expect(VectorMath.divScalar([-4514, 4087, 488, 3843], -61)).toEqual([74, -67, -8, -63]);
  });

  it("01", () => {
    expect(VectorMath.divScalar([], Math.random())).toEqual([]);
  });
});

describe("abs", () => {
  it("02", () => {
    expect(VectorMath.abs([-7, 95, 15, -37])).toEqual([7, 95, 15, 37]);
  });

  it("01", () => {
    expect(VectorMath.abs([])).toEqual([]);
  });
});

describe("length", () => {
  it("02", () => {
    expect(VectorMath.length([27, 46, 54, 9])).toBeCloseTo(76.43297718);
  });

  it("01", () => {
    expect(VectorMath.length([])).toEqual(0);
  });
});
