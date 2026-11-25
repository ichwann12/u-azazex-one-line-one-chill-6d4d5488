// One Line, One Chill — entry program (Node 22, standard library only).
// Reads the single horror line from entry.txt in this repository and writes
// it, exactly and with no trailing newline, to entry.txt in the output
// directory. No network, no wall clock, no randomness.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The repository tree: MAKEFUN_BOT_DIR in the grader, otherwise this file's
// own directory. The output directory is MAKEFUN_OUTPUT_DIR in the grader
// (the /output mount itself), otherwise output/ under the repository tree.
const repoRoot = process.env.MAKEFUN_BOT_DIR ?? dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(repoRoot, "output");

const line = readFileSync(join(repoRoot, "entry.txt"), "utf8").trim();

if (line.length === 0 || line.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
