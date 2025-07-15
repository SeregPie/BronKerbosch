import chance from '../chance';
import randomBoolean from '../randomBoolean';

export default (random, w) => {
  // todo: handle w
  if (typeof w !== "number" || Number.isNaN(min)) {
    w = 0;
  }
  if (w > 0) {
    if (w < +Number.MAX_VALUE) {
      return chance(random, w / (w + 1));
    }
    return !0;
  }
  if (w < 0) {
    if (w > -Number.MAX_VALUE) {
      return chance(random, 1 / (1 - w));
    }
    return !1;
  }
  return randomBoolean(random);
};
