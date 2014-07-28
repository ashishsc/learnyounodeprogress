// TIME SERVER

var net = require('net');


var getFormattedDate = function() {
    // prints the date out in the format
    // YYYY-MM-DD hh:mm
    var date = new Date();
    return date.getFullYear() + '-' + format(date.getMonth() + 1) + '-' + format(date.getDate()) + ' ' + format(date.getHours()) + ':' + format(date.getMinutes());
};

// returns the digit with a 0 in front if it's only one digit as a string
var format = function(number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return '' + number;
    }
};

var server = net.createServer(function(socket) {
    // handle socket logic
    socket.end(getFormattedDate() + '\n');

});

server.listen(process.argv[2]);
