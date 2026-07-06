import { execSync } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "out");
const zipPath = path.join(root, "lotmwebsite-deploy.zip");

if (!existsSync(outDir)) {
  console.error("Missing out/ folder. Run npm run build first.");
  process.exit(1);
}

if (existsSync(zipPath)) {
  execSync(`rm -f "${zipPath}"`);
}

execSync(`cd "${outDir}" && zip -r "${zipPath}" .`, { stdio: "inherit" });

const zipMb = (statSync(zipPath).size / (1024 * 1024)).toFixed(1);

console.log("");
console.log(`Deploy package created: ${zipPath}`);
console.log(`Zip size: ${zipMb} MB`);
console.log("");
console.log("Upload instructions:");
console.log("1. Unzip lotmwebsite-deploy.zip");
console.log("2. Upload ALL files to your web root (public_html)");
console.log("3. Visit your domain");
