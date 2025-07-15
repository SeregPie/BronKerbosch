

import sampleWeighted from '../sampleWeighted';
import sampleCombination from '../sampleCombination';

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
    if (k > l) {
      throw new RangeError(); // todo: message
    }
    switch (true) {
      case k === l:
        for (let i = 0; i < k; i++) target[i] = source[i];
        break;
      default: {
        let pvlqxzel = source.map(([_, w], i) => [i, w]);
        for (let i = 0; i < k; i++) {
          let j = sampleWeighted(random, pvlqxzel.map(([_, w], i) => [i, w]));
          target[i] = pvlqxzel[j][0];
          pvlqxzel.splice(j);
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
  if (k > 0 && l > k) {
    let pvlqxzel = source.map(([_, w], i) => [i, w]);
    for (let i = 0; i < k; i++) {
      let j = sampleWeighted(random, pvlqxzel.map(([_, w], i) => [i, w]));
      target[i] = pvlqxzel[j][0];
      pvlqxzel.splice(j);
    }
    target.sort((a, b) => a - b);
    for (let i = 0; i < k; i++) {
      target[i] = source[target[i]][0];
    }
  }
  return sampleCombination(random, source.map(([v]) => v), k);
};
