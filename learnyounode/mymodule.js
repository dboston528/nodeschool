const fs = require('fs');
const path = require('path');

function filterFiles(folder, ext, callback) {
  fs.readdir(folder, function(err, list) {
    if (err) return callback(err);
    list = list.filter(function(file) {
      return path.extname(file) === '.' + ext;
    });
    callback(null, list);
  });
}
module.exports = filterFiles;
