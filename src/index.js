var express = require("express");
var app = express();
var fs = require("fs");

app.get("/listUsers", function(req, res) {
  fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data) {
    console.log(data);
    let x = JSON.parse(data);
    console.log(x.user1);
    res.end(data);
  });
});

var server = app.listen(8080, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});

//var http = require("http");

//create a server object:
//http
//  .createServer(function(req, res) {
//    res.write("Hello World!"); //write a response to the client
//    res.end(); //end the response
//  })
//  .listen(8080); //the server object listens on port 8080
