// 主要核心逻辑入口

var fs = require('fs');

var App = function(){};
App.prototype.initServer = function(req, res) {

	//.readFile第一个参数是文件路径，./是相对于process.cwd()
	fs.readFile('./public/index.html', 'utf8', function(err, data){
		res.end(data);
	})
}

module.exports = App