const fs = require('fs').promises;

fs.readFile('./employees.json', 'utf-8').then(res => {
  console.log(res);
});
