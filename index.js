
/*
 * created by ludelin
 */

var http = require('http');
var PORT = 64400;
var App = require('./app');

var server = new App();
http.createServer(server.initServer).listen(PORT, function(){
	console.log("server listening on port" + PORT)
});