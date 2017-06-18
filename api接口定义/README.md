

# ����� #

## �Ա��������� ##

http://npm.taobao.org/


```
�����ʹ�����Ƕ��Ƶ� cnpm (gzip ѹ��֧��) �����й��ߴ���Ĭ�ϵ� npm:

$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## ��Ŀ��ʼ�� ##

```
npm init


// ���Ա���������װ
cnpm install express --save 
```


# �ӿڶ��� #


## �����ܹ� ##

```
var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
	res.send('hello world');
});


// ʹ�þ�̬�ļ�Ŀ¼
app.use(express.static('public'));

// ����һ�����񲢼����� 3000 �˿ڽ����������������
var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});

```

## ��̬�ļ�Ŀ¼ ##

```
// ʹ�þ�̬�ļ�Ŀ¼
app.use(express.static('public'));


```

�� /public/ Ŀ¼�£������� images �ļ��к󣬼���ͨ���������ӻ�ȡ��ͼƬ��ַ

http://localhost:3000/images/2.png


## ���� JSON ���� ##

�������´�����ʾ��

```
// ��ӻ�ȡJSON����
app.get('/persons', function(req, res) {

	// ���ﶨ��JS�Ķ���
	var persons = [];

	persons.push({
		"name": "����",
		"age": "18"
	});

	persons.push({
		"name": "����",
		"age": "20"
	});


	// ����JSON������
	res.json(persons);
});

```

## ��������Ľ�� ##

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


ͨ��ֱ�Ӵ��ļ��Ƿ��ʲ��˵�
file:///C:/exercise/nodejs-demo/api%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89/public/index.html

��ͨ����ͬһ�������ǿ��Է��ʵġ�



```
// ��ӻ�ȡJSON����
app.get('/persons', function(req, res) {

	// ��������������
	res.header('Access-Control-Allow-Origin', '*');


...

```
