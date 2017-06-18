

# 环境搭建 #

## 淘宝镜像配置 ##

http://npm.taobao.org/


```
你可以使用我们定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:

$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 项目初始化 ##

```
npm init


// 用淘宝镜像来安装
cnpm install express --save 
```


# 接口定义 #


## 基本架构 ##

```
var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
	res.send('hello world');
});


// 使用静态文件目录
app.use(express.static('public'));

// 启动一个服务并监听从 3000 端口进入的所有连接请求。
var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});

```

## 静态文件目录 ##

```
// 使用静态文件目录
app.use(express.static('public'));


```

在 /public/ 目录下，建立好 images 文件夹后，即可通过如下链接获取到图片地址

http://localhost:3000/images/2.png


## 返回 JSON 数据 ##

按照如下代码所示：

```
// 添加获取JSON数据
app.get('/persons', function(req, res) {

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


	// 返回JSON的数据
	res.json(persons);
});

```

## 跨域问题的解决 ##

index.html

```
   <script src="js/jquery-1.10.1.js"> </script>
   <script>

var url = "http://127.0.0.1:3000/persons";

$.get(url, function(res) {
	alert(res);
});

   </script>

```


通过直接打开文件是访问不了的
file:///C:/exercise/nodejs-demo/api%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89/public/index.html

但通过在同一域名下是可以访问的。



```
// 添加获取JSON数据
app.get('/persons', function(req, res) {

	// 这里允许跨域访问
	res.header('Access-Control-Allow-Origin', '*');


...

```
