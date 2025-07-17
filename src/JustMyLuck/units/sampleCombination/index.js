import chance from '../chance';
import sample from '../sample';

export default (random, source, k) => {
  if (!Array.isArray(source)) {
    source = [...source];
  }
  // todo
  let target = (() => {
    if (Number.isFinite(k)) {
      try {
        return Array(k);
      } catch {}
    }
    throw new RangeError(); // todo: message
  })();
  if (k > 0) {
    let l = source.length;
    if (k > l) {
      throw new RangeError(); // todo: message
    }
    switch (true) {
      case l === k:
        for (let i = 0; i < k; i++) {
          target[i] = source[i];
        }
        break;
      case k === 1:
        target[0] = sample(random, source);
        break;
      default:
        // todo: only k > 0?
        for (let i = 0, j = 0; k > 0 && l > 0;) {
          if (chance(random, k / l)) {
            target[i] = source[j];
            i++;
            k--;
          }
          j++;
          l--;
        }
    }
  }
  return target;
};
