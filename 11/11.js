// HTTP File Server

var http = require('http');
var fs = require('fs');

(function() {
    var port = process.argv[2];
    var input = process.argv[3];
    var server = http.createServer(function(request, response) {
        // Request handling logic
        var src = fs.createReadStream(input);
        src.pipe(response);

    });
    server.listen(port);
})();
