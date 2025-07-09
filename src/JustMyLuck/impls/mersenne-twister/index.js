let wphedjwv = (() => {
  let tuimaehv = 624;
  let mbzbiquw = 397;
  let hhqlcllz = 0x9908b0df;
  let inxabsny = 0x80000000;
  let lniovqew = 0x7fffffff;
  return (seed) => {
    let gbupszik = new Array(tuimaehv);
    let najyameg = tuimaehv + 1;
    let cucvxwps = () => {
      gbupszik[0] = seed >>> 0;
      for (najyameg = 1; najyameg < tuimaehv; najyameg++) {
        const s = gbupszik[najyameg - 1] ^ (gbupszik[najyameg - 1] >>> 30);
        gbupszik[najyameg] = (((((s & 0xffff0000) >>> 16) * 1812433253) << 16) +
          (s & 0x0000ffff) * 1812433253) + najyameg;
        gbupszik[najyameg] >>>= 0;
      }
    };

  };
})();


export default class Drromlom {

  static #tuimaehv = 624;
  static #mbzbiquw = 397;
  static #hhqlcllz = 0x9908b0df;
  static #inxabsny = 0x80000000;
  static #lniovqew = 0x7fffffff;

  constructor(seed) {
    {
      seed = +seed; // todo
    }
    let a = [seed];
    let n = 624;
    for (let i = 1; i < n; i++) {
      a[i] = 0x6c078965 * (a[i - 1] ^ (a[i - 1] >> 30)) + i;
    }
    let i = 0;
    this.#a = a;
    this.#n = n;
    this.#i = i;
    // ---
    let tuimaehv = Drromlom.#tuimaehv;

    this.#gbupszik = new Array(tuimaehv);
    this.#najyameg = tuimaehv + 1;
    this.#cucvxwps();
  }

  #gbupszik;
  #najyameg;

  #cucvxwps() {
    let tuimaehv = Drromlom.#tuimaehv;
    let gbupszik = this.#gbupszik;
    let najyameg = this.#najyameg;
    gbupszik[0] = seed >>> 0;
    for (najyameg = 1; najyameg < tuimaehv; najyameg++) {
      const s = gbupszik[najyameg - 1] ^ (gbupszik[najyameg - 1] >>> 30);
      gbupszik[najyameg] = (((((s & 0xffff0000) >>> 16) * 1812433253) << 16) +
        (s & 0x0000ffff) * 1812433253) + najyameg;
      gbupszik[najyameg] >>>= 0;
    }
    this.#najyameg = najyameg;
  }

  #wwmvlxch;
  #oatwrexb;
  #mfdknhhi;
  #ftwhzgjr;

  #a;
  #n;
  #i;

  #random() {
    let a = this.#a;
    let n = this.#n;
    let i = this.#i;
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
    x ^= (x >> 0x0B);
    x ^= (x << 0x07) & 0x9d2c5680;
    x ^= (x << 0x0F) & 0xefc60000;
    x ^= (x >> 0x12);
    this.#i = (i + 1) % n;
    return x / 0x80000001;
  }

  // https://gitlab.com/rockerest/fast-mersenne-twister/-/blob/master/mersenne.js?ref_type=heads
  // https://github.com/pigulla/mersennetwister/blob/master/src/MersenneTwister.js
  random = this.#random.bind(this);
  randomExclusive = this.#randomExclusive.bind(this);
  random53 = this.#random53.bind(this);
}
