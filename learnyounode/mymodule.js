const fs = require('fs');
const path = require('path');

function filterFiles(folder, ext, callback) {
  fs.readdir(folder, function(err, files) {
    if (err) {
      return callback(err);
    }
    files = files.filter(function(file) {
      return path.extname(file) === '.' + ext;
    });
    callback(null, files);
  });
}
module.exports = filterFiles;
