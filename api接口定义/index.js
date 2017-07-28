

var express = require('express');
var app = express();

// 定义接口
app.get('/api_goods', function(req, res) {
	res.send('你真棒！');
});


// 定义口接2
app.get('/api_position', function(req, res) {
	res.send('又被你套路了！');
});

// 启动一个服务并监听从 3000 端口进入的所有连接请求。
var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});

