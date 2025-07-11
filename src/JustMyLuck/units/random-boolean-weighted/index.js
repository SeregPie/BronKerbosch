import dfgfynqq from '../dfgfynqq';
import randomBoolean from '../random-boolean';

export default (random, w) => {
  // todo: handle w
  if (w > 0) {
    if (w < Number.POSITIVE_INFINITY) {
      return dfgfynqq(random) < w / (w + 1);
    }
    return !0;
  }
  if (w < 0) {
    if (w > Number.NEGATIVE_INFINITY) {
      return dfgfynqq(random) < 1 / (1 - w);
    }
    return !1;
  }
  return randomBoolean(random);
};
