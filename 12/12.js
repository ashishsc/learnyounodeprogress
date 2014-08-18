// HTTP UPPERCASERER
var http = require('http');
var map = require('through2-map');
var fs = require('fs');
(function() {
    'use strict';
    var port = process.argv[2];
    var server = http.createServer(function(req,res) {
        if (req.method != 'POST') {
            return res.end("This API accepts POST requests only");
        }
        req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase(); 
        })).pipe(res); 
    });
    server.listen(port);
})();
