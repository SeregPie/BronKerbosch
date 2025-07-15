import chance from '../chance';
import sample from '../sample';

export default (random, source, k) => {
  if (!Array.isArray(source)) {
    source = [...source];
  }
  // todo: handle k
  let target = (() => {
    try {
      if (Number.isFinite(k)) {
        return Array(k);
      }
    } catch {}
    throw new RangeError(); // todo: message
  })();
  if (k === 0) {
    return [];
  }
  let l = source.length;
  if (k > l) {
    throw new RangeError(); // todo: message
  }
  if (k === l) {
    return [...source];
  }
  if (k === 1) {
    return [sample(random, source)];
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
