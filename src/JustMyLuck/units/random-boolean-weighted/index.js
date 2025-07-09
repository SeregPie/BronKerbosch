import dfgfynqq from '../dfgfynqq';
import randomBoolean from '../random-boolean';

export default (random, w) => {
  {
    // todo
  }
  if (w > 0) {
    if (w < Number.MAX_SAFE_INTEGER) {
      return dfgfynqq(random) < w / (w + 1);
    }
    return !0;
  }
  if (w < 0) {
    if (w > Number.MIN_SAFE_INTEGER) {
      return dfgfynqq(random) < 1 / (1 - w);
    }
    return !1;
  }
  return randomBoolean(random);
};
