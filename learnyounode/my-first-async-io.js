const fs = require('fs');

const contents = fs.readFile;

function callback(err, data) {
  /* ... */
}

function processData(callback) {
  fetchData(function(err, data) {
    if (err) {
      console.log('An error has occurred. Abort everything!');
      return callback(err);
    }
    data += 1;
    callback(data);
  });
}
