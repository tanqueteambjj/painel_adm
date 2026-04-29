const fs = require('fs');

let html = fs.readFileSync('public/index.html', 'utf8');

// Replace confirm
html = html.replace(/confirm\(/g, 'await window.customConfirm(');

// Replace alert
html = html.replace(/alert\(/g, 'window.customAlert(');

fs.writeFileSync('public/index.html', html);
console.log('Replaced confirm and alert');
