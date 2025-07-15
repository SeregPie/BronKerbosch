import dfgfynqq from '../dfgfynqq';

export default (random, min, max) => {
  // todo: handle min and max
  if (typeof min !== "number" || Number.isNaN(min)) {
    return Number.NaN;
  }
  if (typeof max !== "number" || Number.isNaN(max)) {
    return Number.NaN;
  }
  {
    min = Math.max(min, -Number.MAX_VALUE);
    max = Math.min(max, +Number.MAX_VALUE);
  }
  if (min >= max) {
    throw new RangeError(); // todo: message
  }
  // todo: handle Number.MAX_VALUE + Number.MAX_VALUE
  // todo: rename
  let delta = max - min;
  // todo: rename
  let n = dfgfynqq(random) * delta;
  if (n >= delta) {
    return min;
  }
  return min + n;
};
