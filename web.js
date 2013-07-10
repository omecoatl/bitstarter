var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
        var indx = fs.readFileSync('index.html');
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.send(indx);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});


