//allows you to use node file system methods
const fs = require('fs');
//this method returns the extension of a path.
const path = require('path');

const folder = process.argv[2];
const ext = '.' + process.argv[3];

fs.readdir(folder, function(err, files) {
  if (err) {
    return console.log(err);
  }
  /*loops through each file name and check if the file extension name equals 
  ext arguament passed into the console. If it does print it to the console */
  files.forEach(function(file) {
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});
