const fs = require('fs');
const acorn = require('acorn');

const html = fs.readFileSync('public/index.html', 'utf8');
const scriptRegex = /<script type="module">([\s\S]*?)<\/script>/gi;
const match = scriptRegex.exec(html);

if (match) {
  const code = match[1];
  try {
    acorn.parse(code, { ecmaVersion: 2022, sourceType: 'module' });
    console.log("No syntax error found by acorn.");
  } catch (e) {
    console.error("Syntax error at line", e.loc.line, "column", e.loc.column);
    console.error(e.message);
    const lines = code.split('\n');
    console.error(lines[e.loc.line - 1]);
  }
} else {
  console.log("Script not found");
}
