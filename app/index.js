// 主要核心逻辑入口

var fs = require('fs');
var path = require('path');

var root = path.resolve(process.argv[2] || '.');

var App = function(){};
App.prototype.initServer = function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	//.readFile第一个参数是文件路径，./是相对于process.cwd()
	var filepath = path.join(root,'public', 'index.html');
	fs.createReadStream(filepath).pipe(res);

	console.log('Static root dir: ' + root);
}

module.exports = App