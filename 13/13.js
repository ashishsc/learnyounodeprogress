// HTTP JSON API SERVER

var http = require('http');
var url = require('url');
(function() {
    var port = process.argv[2];
    var server = http.createServer(function(request, response) {
        // Request handling logic
        var parsed = url.parse(request.url, true);
        if (parsed.pathName === '/api/parsetime') {
        
        } else if (parsed.pathName === '/api/unixtime') {
        
        } else {
            // Bad filepath
            return response.end("BAD API PATH");
        }

    });
    server.listen(port);

    function headerJSON(response) {
        response.writeHead(502);
    }
})();

