const { log } = require("console");
const path = require("path");

console.log(path.sep)

const filePath = path.join('/content', 'subFolder', 'text.txt');
console.log(filePath)

const absolute = path.resolve(__dirname, 'content', 'subFolder', 'text.txt');
console.log(absolute)