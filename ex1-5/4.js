// my first asycio
var fs = require('fs');
fs.readFile(process.argv[2], function (err, contents) {
    if (err) throw err;
    console.log(contents.toString().split('\n').length - 1);
});
