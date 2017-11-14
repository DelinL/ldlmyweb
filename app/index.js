// 主要核心逻辑入口

var App = function(){};
App.prototype.initServer = function(req, res) {
	res.end('hello world');
}

module.exports = App;