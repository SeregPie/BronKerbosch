import dfgfynqq from '../dfgfynqq';

export default (random, p) => {
  // todo: handle p
  if (p <= 0) {
    return !1;
  }
  if (p >= 1) {
    return !0;
  }
  return dfgfynqq(random) < p;
  /*
  todo
  if (p > 0) {
    if (p < 1) {
      return dfgfynqq(random) < p;
    }
    return !0;
  }
  return !1;
  */
};
