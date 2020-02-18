//The fs module provides an API for  interacting with the file sytem.
const fs = require('fs');
//this module provies utilities for working with file and directory paths.
const path = require('path');

//Global obejct arguments to used in the next funcion
const folder = process.argv[2];
const ext = '.' + process.argv[3];

/* Method from the file system module using the directory 
   as the first  parameter, and the async callback as the 
   second parmeter */
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
