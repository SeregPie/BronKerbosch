const result = await Bun.build({
  entrypoints: ['./src/BronKerbosch/index.js'],
  outdir: './dist',
  minify: true,
});

export {};
