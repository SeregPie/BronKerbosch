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
  if (k === 0) {
    return target;
  }
  let l = source.length;
  if (k > l) {
    throw new RangeError(); // todo: message
  }
  if (k === l) {
    // todo
    target = [...source];
    return target;
  }
  if (k === 1) {
    target[0] = sample(random, source);
    return target;
  }
  {
    let i = 0;
    let j = 0;
    // todo: only k > 0?
    while (k > 0 && l > 0) {
      if (chance(random, k / l)) {
        target[i] = source[j];
        i++;
        k--;
      }
      j++;
      l--;
    }
  }
  return target;
};
