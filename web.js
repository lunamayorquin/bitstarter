var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var bf = fs.readFileSync("index.html");
var dato = bf.toString('utf8');

app.get('/', function(request, response) {
  response.send(dato);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
