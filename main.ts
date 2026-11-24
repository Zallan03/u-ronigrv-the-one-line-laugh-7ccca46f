// One-Line Laugh Sprint — round 2 iteration entry.
// Writes a single funny line (one sentence, <= 200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I told my AI assistant I felt lonely, so it scheduled a meeting with me and marked itself as optional.";

// Gate: the entry must be one sentence of 1-200 characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry is ${LINE.length} chars; must be 1-200.`);
}
if ((LINE.match(/\./g) || []).length !== 1 || !LINE.endsWith(".")) {
  throw new Error("Entry must be exactly one sentence.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
