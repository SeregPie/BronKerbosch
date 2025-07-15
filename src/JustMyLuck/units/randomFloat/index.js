import dfgfynqq from '../dfgfynqq';

export default (random, min, max) => {
  // todo: handle min and max
  // todo: format
  if (!(min < max)) {
    throw new RangeError(); // todo: message
  }
  // todo: rename
  let delta = max - min;
  // todo: rename
  let n = dfgfynqq(random) * delta;
  // todo: format
  if (n >= delta) {
    return min;
  }
  return min + n;
};
