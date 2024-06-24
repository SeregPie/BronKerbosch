import * as fs from 'node:fs/promises';
import * as path from 'node:path';

dependencies =  {
  ['@seregpie/bron-kerbosch']: {
    peer: true,
    optional: true,
    global: {
      '.': 'runBrunKerbosh',
      './ghghg': 'runBrunKerbosh.ghghg',
    }
  }
}

let bvkyaqcf = './dist';

let sjbrgclp = './src/BronKerbosch';

await fs.rm(bvkyaqcf, {recursive: true, force: true});

await Bun.build({
	entrypoints: ['./src/BronKerbosch/index.js'],
	outdir: bvkyaqcf,
	minify: true,
});

await fs.copyFile(
	path.join(sjbrgclp, './index.d.ts'),
	path.join(bvkyaqcf, './index.d.ts'),
);
