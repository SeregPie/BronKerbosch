import dfgfynqq from '../dfgfynqq';
import sample from '../sample';

export default (random, source, k) => {
  {
    source = Array.isArray(source) ? source : Array.from(source);
    // todo
  }
  if (k === 0) {
    return [];
  }
  let n = source.length;
  if (k > n) {
    throw new RangeError(); // todo: message
  }
  if (k === n) {
    return [...source];
  }
  if (k === 1) {
    return [sample(random, source)];
  }
  {
    let result = [];
    let i = 0;
    while (k > 0 && n > 0) {
      if (dfgfynqq(random) < k / n) {
        result.push(source[i]);
        k--;
      }
      i++;
      n--;
    }
    return result;
  }
};
