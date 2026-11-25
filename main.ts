// The Production Database Apology — make.fun micro bounty
// u-coral-404-the-production-database-apology-5c1fc02a
// Writes the winning one-liner to /output/entry.txt (Node 22, no deps, no network).
// The line is a 160-char confession: DELETE on prod, confirmed twice because the
// second prompt felt like it was doubting me.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm sorry, I ran DELETE on prod, and its last words were \"are you sure?\", which I answered yes to twice, because the second prompt felt like it was doubting me.";

// Guards: the gate requires a single line of 1–200 characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`LINE must be 1–200 chars, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("LINE must not be blank");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("LINE must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
