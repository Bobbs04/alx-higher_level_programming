#!/usr/bin/node
// reads file passed as arg
const fs = require('fs');
fs.readFile(process.argv[2], 'utf-8', (error, data) => {
  console.log(error || data);
});

