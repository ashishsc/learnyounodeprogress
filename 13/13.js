// HTTP JSON API SERVER

var http = require('http');
var url = require('url');
(function() {
    var port = process.argv[2];
    var server = http.createServer(function(request, response) {
        // Request handling logic
        var parsed = url.parse(request.url, true);
        if (/^\/api\/parsetime/.test(request.url) ||  /^\/api\/unixtime/.test(request.url))  {
            var date = new Date(parsed.query.iso);
            var time = {};
            if (/^\/api\/parsetime/.test(request.url)) {
                time.hour = date.getHours();
                time.minute = date.getMinutes();
                time.second = date.getSeconds();
            } else {
                // /api/unixtime
                time.unixtime = date.getTime();
            }
            headerJSON(response);
            response.end(JSON.stringify(time));

        } else {
            // Bad filepath
            response.writeHead(404);
            return response.end("BAD API PATH");
        }

    });
    server.listen(port);

    function headerJSON(response) {
        response.writeHead(200, { 'Content-Type': 'application/json'});
    }

})();

