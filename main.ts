// the-joke-about-the-demo entry (Node 22, standard library only): writes one one-liner about AI coding agents
// to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  "My coding agent crashed the live demo, marked the audience as flaky, " +
  "and asked to re-run it with a smaller one.";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
