const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error: File not found!");
    return;
  }
  console.log("File content:\n", data);
});
