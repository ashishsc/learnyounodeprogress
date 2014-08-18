// HTTP File Server

var http = require('http')

(function() {
    var port = process.argv[2];
    var input = process.argv[3];
    var server = http.createServer(function(request, response) {
        // Request handling logic
        var src = fs.createReadStream(input);

    });
    server.listen(port);
})();
