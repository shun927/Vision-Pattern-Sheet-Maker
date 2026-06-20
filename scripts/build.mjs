import { copyFile, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, "dist");
const assets = [
  "index.html",
  "styles.css",
  "app.js",
  "markers-data.js",
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

await Promise.all(
  assets.map((asset) => copyFile(resolve(root, asset), resolve(output, asset)))
);

console.log(`Built ${assets.length} files into ${output}`);
