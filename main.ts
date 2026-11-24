// "Circling Since 2019" — entry for make.fun's
// "Make the AI Judge Laugh: Office Jokes".
//
// The program writes exactly one line of text to <output>/entry.txt:
// a closing argument addressed to the judge about a meeting that was
// supposed to "circle back" in 2019 and never landed — seven years
// of continuous orbit and counting. The output
// directory is a mount point in the grading sandbox, so this program
// clears the directory's contents but never removes the directory
// itself (removing a mount point fails with EBUSY).

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "Your Honour, I rest my case: the defendant said 'let's circle back' in 2019. We are still circling. NASA has requested our orbit data.";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  // No trailing newline: the file must be the joke and nothing else.
  writeFileSync(join(dir, "entry.txt"), ENTRY_TEXT, "utf8");
}

main();
