const fs = require('fs');

const data = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(data);

const textOut = `This is what we know about the avocado: ${data}.\nCreated on ${Date.now()}`;

fs.writeFileSync('./txt/output.txt', textOut);