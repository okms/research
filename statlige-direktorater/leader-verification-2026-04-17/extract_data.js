const fs = require("fs");
const path = require("path");
const vm = require("vm");

const repoRoot = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(repoRoot, "index.html"), "utf8");
const match = html.match(/const data = \[(.|\n|\r)*?\n\];/);

if (!match) {
  throw new Error("Could not find data array in index.html");
}

const script = `
${match[0]}
JSON.stringify(data, null, 2);
`;

const result = vm.runInNewContext(script, {});
process.stdout.write(result);
