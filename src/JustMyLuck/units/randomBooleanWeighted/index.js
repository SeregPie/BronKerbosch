import chance from '../chance';
import randomBoolean from '../randomBoolean';

export default (random, w) => {
  // todo: handle w
  if (w > 0) {
    if (w < Number.POSITIVE_INFINITY) {
      return chance(random, w / (w + 1));
    }
    return !0;
  }
  if (w < 0) {
    if (w > Number.NEGATIVE_INFINITY) {
      return chance(random, 1 / (1 - w));
    }
    return !1;
  }
  return randomBoolean(random);
};
