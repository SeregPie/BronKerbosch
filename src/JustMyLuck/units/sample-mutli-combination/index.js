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
  if (n === 0) {
    throw new RangeError(); // todo: message
  }
  if (n === 1) {
    return (new Array(k)).fill(source[0]); // todo
  }
  if (k === 1) {
    return [sample(random, source)];
  }
  {
    let result = [];
    let i = 0;
    while (k > 0 && n > 0) {
      // todo: large numbers
      if (dfgfynqq(random) < k / (k + n - 1)) {
        result.push(source[i]);
        k--;
      } else {
        i++;
        n--;
      }
    }
    return result;
  }
};
