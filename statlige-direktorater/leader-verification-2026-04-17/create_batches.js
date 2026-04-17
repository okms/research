const fs = require("fs");
const path = require("path");

const outDir = __dirname;
const data = JSON.parse(fs.readFileSync(path.join(outDir, "data.json"), "utf8"));
const batchCount = 10;
const batchSize = Math.ceil(data.length / batchCount);

for (let i = 0; i < batchCount; i += 1) {
  const start = i * batchSize;
  const batch = data.slice(start, start + batchSize);
  if (batch.length === 0) {
    continue;
  }

  const lines = batch.map((item, index) => {
    const n = start + index + 1;
    return `${n}. ${item.name} (${item.abbrev || "ingen forkortelse"})\n   Nåværende leder i index.html: ${item.leader}\n   Tittel i index.html: ${item.title}\n   Departement: ${item.ministry}`;
  });

  const filename = `batch-${String(i + 1).padStart(2, "0")}.md`;
  fs.writeFileSync(
    path.join(outDir, filename),
    `# Batch ${i + 1}\n\n${lines.join("\n\n")}\n`
  );
}
