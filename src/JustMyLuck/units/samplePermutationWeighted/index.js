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
  let hkvkoqxx = [];
  let nzidbjek = [];
  source.forEach(([v, w], i) => {
    nzidbjek.push(v);
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
    hkvkoqxx.push(...result);
    k -= result.length;
  }
  while (piubpiah.length && k > 0) {
    let i = sampleWeighted(random, piubpiah);
    piubpiah.splice(i, 1);
    hkvkoqxx.push(i);
  }
  if (kdqdfoca.length && k > 0) {
    let result = sampleCombination(random, kdqdfoca, k);
    hkvkoqxx.push(...result);
    k -= result.length;
  }
  if (idpvdilo.length && k > 0) {
    // todo
  }
  if (rwfkoumu.length && k > 0) {
    let result = sampleCombination(random, rwfkoumu, k);
    hkvkoqxx.push(...result);
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
  return nzidbjek.filter((_, i) => hkvkoqxx.includes(i));
};
