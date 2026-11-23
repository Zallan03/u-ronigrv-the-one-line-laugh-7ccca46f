// The One-Line Laugh
// Writes one funny line — a single sentence of at most 200 characters —
// to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My password manager forgot my password, so now I stand outside my own account knocking politely.";

// Gate: 1 to 200 characters, a single sentence, nothing else. The punch
// ("knocking politely") must be the last thing the reader meets, so the
// line must carry exactly one sentence-ending period, at the very end.
if (
  [...LINE].length < 1 ||
  [...LINE].length > 200 ||
  LINE.trim() !== LINE ||
  /\n/.test(LINE) ||
  (LINE.match(/\./g) ?? []).length !== 1 ||
  !LINE.endsWith(".")
) {
  throw new Error(
    `Line ${JSON.stringify(LINE)} fails the one-line gate (1-200 chars, single sentence).`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
