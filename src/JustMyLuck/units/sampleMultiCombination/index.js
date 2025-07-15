import dfgfynqq from '../dfgfynqq';
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
    return target;
  }
  let n = source.length;
  if (n === 0) {
    throw new RangeError(); // todo: message
  }
  if (n === 1) {
    target.fill(source[0]); // todo
    return target;
  }
  if (k === 1) {
    target[0] = sample(random, source);
    return target;
  }
  {
    let i = 0;
    let j = 0;
    while (k > 0 && n > 0) {
      // todo: large numbers
      if (dfgfynqq(random) < k / (k + n - 1)) {
        target[i] = source[j];
        i++;
        k--;
      } else {
        j++;
        n--;
      }
    }
  }
  return target;
};
