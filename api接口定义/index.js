

var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
	res.send('hello world');
});



// 添加获取JSON数据
app.get('/persons', function(req, res) {

	// 这里允许跨域访问
	res.header('Access-Control-Allow-Origin', '*');

	// 这里定义JS的对象
	var persons = [];

	persons.push({
		"name": "张三",
		"age": "18"
	});

	persons.push({
		"name": "李四",
		"age": "20"
	});
s

	// 返回JSON的数据
	res.json(persons);
});


// 使用静态文件目录
app.use(express.static('public'));

// 启动一个服务并监听从 3000 端口进入的所有连接请求。
var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});

