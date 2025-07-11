import dfgfynqq from '../dfgfynqq';

export default (random, min, max) => {
  // todo: handle min and max
  {
    min = Math.ceil(min);
    max = Math.ceil(max);
  }
  // todo: format
  if (!(min < max)) {
    throw new RangeError(); // todo: message
  }
  let delta = max - min;
  if (delta > 1) {
    let n = dfgfynqq(random) * delta + min;
    // todo: format
    if (n < max) {
      n = Math.floor(n);
      return n;
    }
  }
  return min;
};
