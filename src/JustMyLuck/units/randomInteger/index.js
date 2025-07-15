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
  // todo: rename
  let delta = max - min;
  if (delta === 1) {
    return min;
  }
  // todo: rename
  let n = dfgfynqq(random) * delta;
  // todo: format
  if (n >= delta) {
    return min;
  }
  {
    n = Math.floor(n);
  }
  return min + n;
};
