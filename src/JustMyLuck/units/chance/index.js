import dfgfynqq from '../dfgfynqq';

export default (random, p) => {
  // todo
  if (!((v) => typeof v === "number" && !Number.isNaN(v))(p)) {
    throw new TypeError(); // todo: message
  }
  if (p <= 0) {
    return !1;
  }
  if (p >= 1) {
    return !0;
  }
  return dfgfynqq(random) < p;
};
