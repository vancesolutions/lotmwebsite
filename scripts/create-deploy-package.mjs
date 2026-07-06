import { createWriteStream, existsSync, rmSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import archiver from "archiver";

const root = process.cwd();
const outDir = path.join(root, "out");
const zipPath = path.join(root, "lotmwebsite-deploy.zip");

if (!existsSync(outDir)) {
  console.error("Missing out/ folder. Run npm run build first.");
  process.exit(1);
}

if (existsSync(zipPath)) {
  rmSync(zipPath, { force: true });
}

await new Promise((resolve, reject) => {
  const output = createWriteStream(zipPath);
  const archive = archiver("zip", { zlib: { level: 9 } });

  output.on("close", resolve);
  archive.on("error", reject);

  archive.pipe(output);
  archive.directory(outDir, false);
  archive.finalize();
});

const zipMb = (statSync(zipPath).size / (1024 * 1024)).toFixed(1);

console.log("");
console.log(`Deploy package created: ${zipPath}`);
console.log(`Zip size: ${zipMb} MB`);
console.log("");
console.log("Upload instructions:");
console.log("1. Unzip lotmwebsite-deploy.zip");
console.log("2. Upload ALL files to your web root (public_html)");
console.log("3. Visit your domain");
