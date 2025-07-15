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
  if (l === 0) {
    throw new RangeError(); // todo: message
  }
  if (l === 1) {
    target.fill(source[0]);
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
      // todo: large numbers
      if (chance(random, k / (k + l - 1))) {
        target[i] = source[j];
        i++;
        k--;
      } else {
        j++;
        l--;
      }
    }
  }
  return target;
};

export const alt1 = (random, source, k) => {
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
    if (l === 0) {
      throw new RangeError(); // todo: message
    }
    switch (true) {
      case l === 1:
        for (let i = 0; i < k; i++) target[i] = source[0];
        break;
      case k === 1:
        target[0] = sample(random, source);
        break;
      default: {
        let i = 0;
        let j = 0;
        // todo: only k > 0?
        while (k > 0 && l > 0) {
          if (chance(random, k / (k + l - 1))) {
            target[i] = source[j];
            i++;
            k--;
          } else {
            j++;
            l--;
          }
        }
      }
    }
  }
  return target;
};
