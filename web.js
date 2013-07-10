var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
        var indx = fs.readFileSync('index.html');
	buf = new Buffer();
	len = buf.write(indx);
	console.log(len + " bytes: " + buf.toString('utf8', 0, len));
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});


