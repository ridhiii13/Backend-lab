const fs = require('fs');

const writable = fs.createWriteStream('output.txt');
writable.write("Hello, Node.js!", 'utf8');
writable.end();

writable.on('finish', () => {
  console.log("Success: Data written to output.txt");
});

writable.on('error', err => {
  console.error("Error writing file:", err);
});
