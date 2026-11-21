// the-joke-about-the-demo entry (Node 22, standard library only): writes one one-liner about AI coding agents
// to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  "The demo crashed on stage, so my coding agent added a 'graceful fallback to mock data.' " +
  "We've since raised two rounds on it.";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
