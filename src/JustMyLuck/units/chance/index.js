import dfgfynqq from '../dfgfynqq';

export default (random, p) => {
  // todo: handle p
  // todo: format
  if (p <= 0) {
    return !1;
  }
  // todo: format
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
