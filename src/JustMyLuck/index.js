



// todo: rename
export function ahkmdyhx(fn) {
  let r = fn();
  if (typeof r !== "number" || r < 0 || r >= 1) {
    throw new Error(); // todo: message
  }
  return r;
}

export const useMersenneTwister = (seed) => {
  {
    seed = +seed; // todo
  }
  let a = [seed];
  let n = 624;
  for (let i = 1; i < n; i++) {
    a[i] = 0x6c078965 * (a[i - 1] ^ (a[i - 1] >> 30)) + i;
  }
  let i = 0;
  return () => {
    if (i > 0) {
      for (let i = 0; i < n; i++) {
        let x = (a[i] & 0x80000000) + (a[(i + 1) % n] & 0x7fffffff);
        let y = x >> 1;
        if (x % 2) {
          y ^= 0x9908b0df;
        }
        a[i] = a[(i + 397) % n] ^ y;
      }
    }
    let x = a[i];
    x ^= x >> 11;
    x ^= (x << 7) & 0x9d2c5680;
    x ^= (x << 15) & 0xefc60000;
    x ^= x >> 18;
    i = (i + 1) % n;
    return x / 0x80000001;
  };
};

export function randomBoolean(random) {
  return ahkmdyhx(random) < 1 / 2;
}

export function randomBooleanWeighted(random, w) {
  {
    w = Number(w);
  }
  if (Number.isNaN(w)) {
    w = 0;
  }
  if (w > 0) {
    if (w < Number.MAX_SAFE_INTEGER) {
      return ahkmdyhx(random) < w / (w + 1);
    }
    return !0;
  }
  if (w < 0) {
    if (w > Number.MIN_SAFE_INTEGER) {
      return ahkmdyhx(random) < 1 / (1 - w);
    }
    return !1;
  }
  return randomBoolean(random);
}

/*

+1 => 1/2
+2 => 2/3
+3 => 3/4

+1/2 => 1/3
+1/3 => 1/4
+1/4 => 1/5


-1 => 1/2
-2 => 1/3
-3 => 1/4

-1/2 => 2/3
-1/3 => 3/4
-1/4 => 4/5


*/

export function randomFloat(random, min, max, maxInclusive = false) {
  {
    min = Number(min);
    max = Number(max);
  }
  if (Number.isNaN(min) || Number.isNaN(max)) {
    return Number.NaN;
  }
  // todo
  {
    min = Math.max(min, Number.MIN_SAFE_INTEGER);
    max = Math.min(max, Number.MAX_SAFE_INTEGER);
  }
  if (min >= max) {
    throw new RangeError(); // todo: message
  }
  let delta = max - min;
  let n = ahkmdyhx(random) * delta + min;
  if (n >= max) {
    return min;
  }
  return n;
}

export function randomInteger(random, min, max, maxInclusive = false) {
  {
    min = Number(min);
    max = Number(max);
  }
  if (Number.isNaN(min) || Number.isNaN(max)) {
    return Number.NaN;
  }
  // todo
  {
    min = Math.ceil(min);
    max = Math.ceil(max);
  }
  {
    min = Math.max(min, Number.MIN_SAFE_INTEGER);
    max = Math.min(max, Number.MAX_SAFE_INTEGER);
  }
  if (min >= max) {
    throw new RangeError(); // todo: message
  }
  let delta = max - min;
  if (delta === 1) {
    return min;
  }
  let n = ahkmdyhx(random) * delta + min;
  if (n >= max) {
    return min;
  }
  {
    n = Math.floor(n);
  }
  return n;
}

export function sample(random, source) {
  {
    source = Array.isArray(source) ? source : Array.from(source);
  }
  let n = source.length;
  if (n === 0) {
    throw new RangeError(); // todo: message
  }
  if (n === 1) {
    return source[0];
  }
  return source[randomInteger(random, 0, n)];
}

export function sampleWeighted(random, source) {
  {
    source = Array.isArray(source) ? source : Array.from(source);
  }
  // todo: rename
  let fkmuymhx = []; // +Infinity
  // todo: rename
  let piubpiah = []; // > 0
  // todo: rename
  let kdqdfoca = []; // = 0
  // todo: rename
  let idpvdilo = []; // < 0
  // todo: rename
  let rwfkoumu = []; // -Infinity
  source.forEach(([v, w]) => {
    if (w > 0) {
      if (w < Number.POSITIVE_INFINITY) {
        return piubpiah.push([v, w]);
      }
      return fkmuymhx.push(v);
    }
    if (w < 0) {
      if (w > Number.NEGATIVE_INFINITY) {
        return idpvdilo.push([v, w]);
      }
      return rwfkoumu.push(v);
    }
    return kdqdfoca.push(v);
  });
  if (fkmuymhx.length) {
    return sample(random, fkmuymhx);
  }
  if (piubpiah.length) {
    // todo
    let ws = [];
    let vs = [];
    piubpiah
      .sort((a, b) => b[1] - a[1])
      .forEach(([v, w]) => {
        vs.push(v);
        ws.push(w);
      });
    let wMax = ws[0];
    let wMin = ws.at(-1);
    if (wMin === wMax) {
      return sample(random, vs);
    }
    ws = ws.map((w) => w / wMax);
    // todo: rename
    let totalWeight = ws.reduce((r, v) => r + v); // Math.sum
    // todo: rename
    let totalWeightFraction = randomFloat(random, 0, totalWeight);
    // todo
    let i = ws.findIndex((w) => {
      totalWeightFraction -= w;
      return totalWeightFraction < 0;
    });
    return vs[i > 0 ? i : 0];
  }
  if (kdqdfoca.length) {
    return sample(random, kdqdfoca);
  }
  if (idpvdilo.length) {
    // todo
  }
  if (rwfkoumu.length) {
    return sample(random, rwfkoumu);
  }
  throw new RangeError(); // todo: message
}

export const sampleCombination = (random, source, k) => {
  {
    source = Array.isArray(source) ? source : Array.from(source);
    // todo
    k = Math.min(Math.max(Math.trunc(k), 0), Number.MAX_SAFE_INTEGER);
  }
  if (Number.isNaN(k)) {
    k = 0;
  }
  let n = source.length;
  if (n === 0 || k === 0) {
    return [];
  }
  if (n === 1) {
    return [source[0]];
  }
  if (k === 1) {
    return [sample(random, source)];
  }
  if (k >= n) {
    return [...source];
  }
  {
    let result = [];
    let i = 0;
    while (k > 0 && n > 0) {
      if (ahkmdyhx(random) < k / n) {
        result.push(source[i]);
        k--;
      }
      i++;
      n--;
    }
    return result;
  }
};

export const sampleCombinationWeighted = (random, source, k) => {
  {
    random = ahkmdyhx(random);
    source = Array.isArray(source) ? source : Array.from(source);
    k = Math.trunc(k);
  }
  // todo: rename
  let fkmuymhx = []; // +Infinity
  // todo: rename
  let piubpiah = []; // > 0
  // todo: rename
  let kdqdfoca = []; // = 0
  // todo: rename
  let idpvdilo = []; // < 0
  // todo: rename
  let rwfkoumu = []; // -Infinity
  let is = [];
  let vs = [];
  source.forEach(([v, w], i) => {
    vs.push(v);
    if (w > 0) {
      if (w < Number.POSITIVE_INFINITY) {
        return piubpiah.push([i, w]);
      }
      return fkmuymhx.push(i);
    }
    if (w < 0) {
      if (w > Number.NEGATIVE_INFINITY) {
        return idpvdilo.push([i, w]);
      }
      return rwfkoumu.push(i);
    }
    return kdqdfoca.push(i);
  });
  if (fkmuymhx.length && k > 0) {
    let result = sampleCombination(random, fkmuymhx, k);
    is.push(...result);
    k -= result.length;
  }
  while (piubpiah.length && k > 0) {
    let i = sampleWeighted(random, piubpiah);
    piubpiah.remove(i);
    is.push(i);
  }
  if (kdqdfoca.length && k > 0) {
    let result = sampleCombination(random, kdqdfoca, k);
    is.push(...result);
    k -= result.length;
  }
  if (idpvdilo.length && k > 0) {
    // todo
  }
  if (rwfkoumu.length && k > 0) {
    let result = sampleCombination(random, rwfkoumu, k);
    is.push(...result);
    k -= result.length;
  }
  /*
  let xtsmygzy = (source) => {
    if (k > 0 && source.length) {
      sampleCombination(random, source, k).forEach((i) => {
        is.push(i);
        k--;
      });
    }
  };
  xtsmygzy(fkmuymhx);

  (() => {
    let n = normalWeightedArray.length;
    if (n > 0 && k > 0) {
      return sampleWeighted(
        random,
        Array_prototype_combinations(normalWeightedArray, Math.min(k, n)).map((v) => [v.map((v) => v[0]), Array_prototype_sum(v.map((v) => v[1]))]),
      );
    }
    return [];
  })().forEach((index) => {
    is.add(index);
    k--;
  });
  xtsmygzy(kdqdfoca);
  // todo
  xtsmygzy(rwfkoumu);
  */
  return vs.filter((_, i) => is.includes(i));
};

export function samplePermutation(random, source, k) {
  // todo: ok?
  return shuffle(random, sampleCombination(random, source, k));
}

export function samplePermutationWeighted(random, source, k) {
  // todo: ok?
  return shuffle(random, sampleCombinationWeighted(random, source, k));
}

export function sampleMultiCombination(random, source, k) {
  {
    source = Array.isArray(source) ? source : Array.from(source);
    // todo
    k = Math.min(Math.max(Math.trunc(k), 0), Number.MAX_SAFE_INTEGER);
  }
  if (Number.isNaN(k)) {
    k = 0;
  }
  let n = source.length;
  if (n === 0 || k === 0) {
    return [];
  }
  if (n === 1) {
    return (new Array(k)).fill(source[0]);
  }
  if (k === 1) {
    return [sample(random, source)];
  }
  {
    let result = [];
    let i = 0;
    while (k > 0 && n > 0) {
      // todo: large numbers
      if (ahkmdyhx(random) < k / (k + n - 1)) {
        result.push(source[i]);
        k--;
      } else {
        i++;
        n--;
      }
    }
    return result;
  }
}

export function sampleMultiCombinationWeighted(random, source, k) {
  {
    random = ahkmdyhx(random);
    source = Array.isArray(source) ? source : Array.from(source);
    k = Math.trunc(k);
  }
  // todo: rename
  let fkmuymhx = []; // +Infinity
  // todo: rename
  let piubpiah = []; // > 0
  // todo: rename
  let kdqdfoca = []; // = 0
  // todo: rename
  let idpvdilo = []; // < 0
  // todo: rename
  let rwfkoumu = []; // -Infinity
  let is = [];
  let vs = [];
  source.forEach(([v, w]) => {
    vs.push(v);
    if (w > 0) {
      if (w < Number.POSITIVE_INFINITY) {
        return piubpiah.push([v, w]);
      }
      return fkmuymhx.push(v);
    }
    if (w < 0) {
      if (w > Number.NEGATIVE_INFINITY) {
        return idpvdilo.push([v, w]);
      }
      return rwfkoumu.push(v);
    }
    return kdqdfoca.push(v);
  });
  if (fkmuymhx.length) {
    return sampleMultiCombination(random, fkmuymhx, k);
  }
  if (piubpiah.length) {
    return Array.from({length: k}, () => sampleWeighted(piubpiah, source));
  }
  if (kdqdfoca.length) {
    return sampleMultiCombination(random, kdqdfoca, k);
  }
  if (idpvdilo.length) {
    return Array.from({length: k}, () => sampleWeighted(idpvdilo, source));
  }
  if (rwfkoumu.length) {
    return sampleMultiCombination(random, rwfkoumu, k);
  }
  return [];
}

export function sampleMultiPermutation(random, source, k) {
  // todo: ok?
  return shuffle(random, sampleMultiCombination(random, source, k));
}

export function sampleMultiPermutationWeighted(random, source, k) {
  // todo: ok?
  return shuffle(random, sampleMultiCombinationWeighted(random, source, k));
}

export const shuffle = (random, source) => {
  let result = Array.from(source);
  let n = result.length;
  while (n > 1) {
    // todo
    let i = randomInteger(random, 0, n);
    n--;
    [result[n], result[i]] = [result[i], result[n]];
  }
  return result;
};
