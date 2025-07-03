const result = await Bun.build({
  entrypoints: ["./src/BronKerbosch/index.js"],
  outdir: "./dist",
  minify: true,
});

{
  const file = Bun.file("./src/BronKerbosch/index.d.ts");
  await Bun.write("./dist/index.d.ts", file);
}
{
  const file = Bun.file("./LICENSE");
  await Bun.write("./dist/LICENSE", file);
}
{
  const json = {
    "name": "@seregpie/bron-kerbosch",
    "version": "1.0.1",
    "description": "An implementation of the Bron-Kerbosch algorithm to find the maximal cliques in an undirected graph.",
    "repository": "github:SeregPie/BronKerbosch",
    "license": "MIT",
    "author": "Sergej Sintschilin <seregpie@gmail.com>",
    "type": "module",
  };
  await Bun.write("./dist/package.json", JSON.stringify(json, null, 2));
}



export {};
