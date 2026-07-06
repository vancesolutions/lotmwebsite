import { rmSync } from "node:fs";
import path from "node:path";

const root = process.cwd();

for (const dir of [".next", "out"]) {
  rmSync(path.join(root, dir), { recursive: true, force: true });
  console.log(`Removed ${dir}/`);
}

console.log("Clean complete.");
