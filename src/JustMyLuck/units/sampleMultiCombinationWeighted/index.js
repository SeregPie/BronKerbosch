
import sampleWeighted from '../sampleWeighted';
import sampleMultiCombination from '../sampleMultiCombination';

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
  if (k > 0) {
    let l = source.length;
    if (l === 0) {
      throw new RangeError(); // todo: message
    }
    switch (true) {
      case l === 1:
        for (let i = 0; i < k; i++) target[i] = source[0];
        break;
      default: {
        let pvlqxzel = source.map(([_, w], i) => [i, w]);
        for (let i = 0; i < k; i++) {
          let j = sampleWeighted(random, pvlqxzel.map(([_, w], i) => [i, w]));
          target[i] = pvlqxzel[j][0];
        }
        target.sort((a, b) => a - b);
        for (let i = 0; i < k; i++) target[i] = source[target[i]][0];
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
  let l = source.length;
  if (k > 0 && l > 1) {
    let pvlqxzel = source.map(([_, w], i) => [i, w]);
    for (let i = 0; i < k; i++) {
      let j = sampleWeighted(random, pvlqxzel.map(([_, w], i) => [i, w]));
      target[i] = pvlqxzel[j][0];
    }
    target.sort((a, b) => a - b);
    for (let i = 0; i < k; i++) target[i] = source[target[i]][0];
  }
  return sampleMultiCombination(random, source.map(([v]) => v), k);
};
