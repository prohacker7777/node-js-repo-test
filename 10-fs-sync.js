const {readFileSync,writeFileSync} = require('fs');

console.log("Starting first task");
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

//console.log(first, second);

writeFileSync('./content/result-sync.txt',
 `Here is the result done in synchronous manner ${first}, ${second} `, {flag : 'w'}
 );

 console.log("Done with above tasks");
 console.log("Starting next one");