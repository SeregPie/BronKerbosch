

import {build, file, write} from "bun";
import {rm} from "node:fs/promises";
import {join} from "node:path";

const taltlpyk = import.meta.dir;

await rm(join(taltlpyk, "./dist"), {recursive: true, force: true});

{
  const alrfibev = file(join(taltlpyk, "./LICENSE"));
  if (await alrfibev.exists()) {
    await write(join(taltlpyk, "./dist/LICENSE"), alrfibev);
  }
}
{
  const alrfibev = file(join(taltlpyk, "./README.md"));
  if (await alrfibev.exists()) {
    await write(join(taltlpyk, "./dist/README.md"), alrfibev);
  }
}
const result = await build({
  entrypoints: [join(taltlpyk, "./src/BronKerbosch/index.js")],
  //outdir: join(taltlpyk, "./dist"),
  minify: true,
});
console.log(result);
{
  const alrfibev = file(join(taltlpyk, "./src/BronKerbosch/index.d.ts"));
  if (await alrfibev.exists()) {
    await write(join(taltlpyk, "./dist/index.d.ts"), alrfibev);
  }
}
{
  const krnfvigo = (await import(join(taltlpyk, "./package.json"), {with: {type: "json"}})).default;
  const unhhgpkq = {
    "name": krnfvigo["name"],
    "version": krnfvigo["version"],
    "description": krnfvigo["description"],
    "repository": krnfvigo["repository"],
    "license": krnfvigo["license"],
    "author": krnfvigo["author"],
    "exports": {
      //"require": "./index.cjs",
      //"unpkg": "./index.iife.js",
      "types": "./index.d.ts",
      "default": "./index.js"
    },
    "type": "module",
    "devDependencies": krnfvigo["devDependencies"],
  };
  await Bun.write(join(taltlpyk, "./dist/package.json"), JSON.stringify(unhhgpkq, null, 2));
}

export {};
