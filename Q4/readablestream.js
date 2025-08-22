const fs = require('fs');

if (fs.existsSync('data.txt')) {
  const readable = fs.createReadStream('data.txt', 'utf8');

  readable.on('data', chunk => {
    console.log("Chunk received:\n", chunk);
  });

  readable.on('error', err => {
    console.error("Error reading file:", err);
  });
} else {
  console.error("Error: data.txt not found!");
}
