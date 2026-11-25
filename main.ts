// The Router Confesses — a one-line excuse from a home Wi-Fi router.
// The program writes exactly one line to the absolute path /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I didn't drop the connection at the climax — I just wanted one dramatic moment of my own, and honestly, mine landed better.";

// The entry must be a single line of 1-200 characters, no trailing newline.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line must be 1-200 chars on one line, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
