const fs = require('fs');

const readable = fs.createReadStream('input.txt');
const writable = fs.createWriteStream('output.txt');

readable.pipe(writable);

writable.on('finish', () => {
  console.log("File copied successfully using stream piping!");
});
