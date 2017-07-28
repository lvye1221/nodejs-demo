

# 快速入门 #

```
// 如需环境搭建，先看  那一章节

// 启动服务器
node index.js

```





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



# 练习案例 #

## 商品接口 ##

### 1. 获取某件商品 ###

接口名： api_goods
请求方法类型： GET


参数|	类型|	描述
----|------|----
goods_id|	int	| 商品编号(必须传递） 
page|	int|	商品列表编号
pagesize|	int|	商品列表中数据数量
		
		

返回结果：

```
{
    "code": 0,
    "message": "商品数据获取成功",
    "data": [
        {
            "goods_id": "253286",
            "id": "1",
            "cat_id": "45",
            "cat_name": " ",
            "brand_id": "0",
            "goods_name": "仅重600g便携蓝牙音箱 丹麦设计 专业级音质 防滑防水 长续航",
            "goods_desc": "真正的便捷式蓝牙扬声器，既可畅想音乐又可接听来电，重量只有600g。\r\n音...",
            "goods_thumb": "http://imgs-qn.iliangcang.com/ware/goods/big/2/253/253286.jpg?t=1476238032",
            "goods_number": "0",
            "star_number": "0",
            "sort_order": "50",
            "price": "1898.00",
            "is_new": "0",
            "is_best": "0",
            "is_hot": "1",
            "site_id": "0"
        },
        {
            "goods_id": "257557",
            "id": "2",
            "cat_id": "45",
            "cat_name": " ",
            "brand_id": "0",
            "goods_name": "轻金属竖开合收纳登机旅行箱 | 安检神器 按键即开 站着就能轻松取物【玫瑰金20寸】",
            "goods_desc": "TUPLUS ONE「途加1号」旅行箱，研发周期13个月，代表TUPLUS途加的第一款...",
            "goods_thumb": "http://imgs-qn.iliangcang.com/ware/goods/big/2/257/257557.jpg?t=1497600292",
            "goods_number": "0",
            "star_number": "0",
            "sort_order": "50",
            "price": "1259.00",
            "is_new": "0",
            "is_best": "0",
            "is_hot": "1",
            "site_id": "0"
        },
        {
            "goods_id": "256672",
            "id": "3",
            "cat_id": "45",
            "cat_name": " ",
            "brand_id": "0",
            "goods_name": "轻金属竖开合收纳登机旅行箱 安检神器 按键即开 站着就能轻松取物【钻石银20寸】",
            "goods_desc": "TUPLUS ONE「途加1号」旅行箱，研发周期13个月，代表TUPLUS途加的第一款...",
            "goods_thumb": "http://imgs-qn.iliangcang.com/ware/goods/big/2/256/256672.jpg?t=1497600281",
            "goods_number": "0",
            "star_number": "0",
            "sort_order": "50",
            "price": "1199.00",
            "is_new": "0",
            "is_best": "0",
            "is_hot": "1",
            "site_id": "0"
        },
        {
            "goods_id": "245152",
            "id": "4",
            "cat_id": "45",
            "cat_name": " ",
            "brand_id": "0",
            "goods_name": "轻型款鸵鸟枕【宝蓝灰】",
            "goods_desc": "她让我们舒适，让我们温暖，也在一直关照着我们。陪我们穿过人潮人海、经...",
            "goods_thumb": "http://imgs-qn.iliangcang.com/ware/goods/big/2/245/245152.jpg?t=1479893375",
            "goods_number": "0",
            "star_number": "0",
            "sort_order": "50",
            "price": "299.00",
            "is_new": "0",
            "is_best": "0",
            "is_hot": "1",
            "site_id": "0"
        },
        {
            "goods_id": "257133",
            "id": "5",
            "cat_id": "45",
            "cat_name": " ",
            "brand_id": "0",
            "goods_name": "迷你便携 手压咖啡杯【随时喝咖啡】",
            "goods_desc": "造型美观大方&amp;创意满满,只有6.95英寸,约18cm。绝对是迄今为止最...",
            "goods_thumb": "http://imgs-qn.iliangcang.com/ware/goods/big/2/257/257133.jpg",
            "goods_number": "0",
            "star_number": "0",
            "sort_order": "50",
            "price": "399.00",
            "is_new": "0",
            "is_best": "0",
            "is_hot": "1",
            "site_id": "0"
        },
        {
            "goods_id": "257654",
            "id": "6",
            "cat_id": "45",
            "cat_name": " ",
            "brand_id": "0",
            "goods_name": "小米生态链巴氏牙刷 | 净白牙齿进口刷丝科学布局温柔给力 旅行装四色",
            "goods_desc": "1.全球严选三种刷丝 指定日本与德国本土生产\r\n2.三明治式刷丝布局＋山形...",
            "goods_thumb": "http://imgs-qn.iliangcang.com/ware/goods/big/2/257/257654.jpg",
            "goods_number": "0",
            "star_number": "0",
            "sort_order": "50",
            "price": "59.00",
            "is_new": "0",
            "is_best": "0",
            "is_hot": "1",
            "site_id": "0"
        },
        {
            "goods_id": "256622",
            "id": "7",
            "cat_id": "45",
            "cat_name": " ",
            "brand_id": "0",
            "goods_name": "迷你便携式果汁榨汁机 英国畅销智能小家电",
            "goods_desc": "1.小巧机身,时尚设计\r\n2.联锁设计,安全运转\r\n3.懒人式启动,灵巧方便\r\n4....",
            "goods_thumb": "http://imgs-qn.iliangcang.com/ware/goods/big/2/256/256622.jpg",
            "goods_number": "0",
            "star_number": "0",
            "sort_order": "50",
            "price": "298.00",
            "is_new": "0",
            "is_best": "0",
            "is_hot": "1",
            "site_id": "0"
        },
        {
            "goods_id": "106507",
            "id": "8",
            "cat_id": "45",
            "cat_name": " ",
            "brand_id": "0",
            "goods_name": "Mini鸵鸟枕【黑色】",
            "goods_desc": "风靡全球的OSTRICH PILLOW推出了最新的作品MINI，更大众的选择。在办公...",
            "goods_thumb": "http://imgs-qn.iliangcang.com/ware/goods/big/2/106/106507.jpg",
            "goods_number": "0",
            "star_number": "0",
            "sort_order": "50",
            "price": "219.00",
            "is_new": "0",
            "is_best": "0",
            "is_hot": "1",
            "site_id": "0"
        },
        {
            "goods_id": "245154",
            "id": "9",
            "cat_id": "45",
            "cat_name": " ",
            "brand_id": "0",
            "goods_name": "轻型款鸵鸟枕【酒红色】",
            "goods_desc": "她让我们舒适，让我们温暖，也在一直关照着我们。陪我们穿过人潮人海、经...",
            "goods_thumb": "http://imgs-qn.iliangcang.com/ware/goods/big/2/245/245154.jpg?t=1479892935",
            "goods_number": "0",
            "star_number": "0",
            "sort_order": "50",
            "price": "299.00",
            "is_new": "0",
            "is_best": "0",
            "is_hot": "1",
            "site_id": "0"
        },
        {
            "goods_id": "245134",
            "id": "10",
            "cat_id": "45",
            "cat_name": " ",
            "brand_id": "0",
            "goods_name": "西班牙经典款鸵鸟枕 | 保丽龙颗粒材质制成 旅行出游好伴侣【蓝色】",
            "goods_desc": "她让我们舒适，让我们温暖，也在一直关照着我们。陪我们穿过人潮人海、经...",
            "goods_thumb": "http://imgs-qn.iliangcang.com/ware/goods/big/2/245/245134.jpg",
            "goods_number": "0",
            "star_number": "0",
            "sort_order": "50",
            "price": "699.00",
            "is_new": "0",
            "is_best": "0",
            "is_hot": "1",
            "site_id": "0"
        },
        {
            "goods_id": "34361",
            "id": "11",
            "cat_id": "45",
            "cat_name": " ",
            "brand_id": "0",
            "goods_name": "宇航员 被套+枕套 套装（单/双人）",
            "goods_desc": "每当抬头仰望星空，总想一股脑儿飞向深邃浩瀚的宇宙。对于每一个太空迷...",
            "goods_thumb": "http://imgs-qn.iliangcang.com/ware/goods/big/2/34/34361.jpg",
            "goods_number": "0",
            "star_number": "0",
            "sort_order": "50",
            "price": "868.00",
            "is_new": "0",
            "is_best": "0",
            "is_hot": "1",
            "site_id": "0"
        },
        {
            "goods_id": "232243",
            "id": "12",
            "cat_id": "45",
            "cat_name": " ",
            "brand_id": "0",
            "goods_name": "安东尼特别创作 小王子  主题火柴盒 四盒/套装",
            "goods_desc": "《小王子》与火柴，一个无数人读过的童话，一件人人用过的老工具。看似无...",
            "goods_thumb": "http://imgs-qn.iliangcang.com/ware/goods/big/2/232/232243.jpg",
            "goods_number": "0",
            "star_number": "0",
            "sort_order": "50",
            "price": "69.00",
            "is_new": "0",
            "is_best": "0",
            "is_hot": "1",
            "site_id": "0"
        }
    ],
    "page": {
        "count": "3096",
        "page_count": 258
    }
}
```


### 2. 用户登录 ###


接口名： api_user
接口类型： POST



参数|	类型|	描述
----|------|----
status|	string	| Register 注册Login 登录
username|	string |	用户名 （必须传递，3-20位字母数字下滑线）
password|	string |	密码（必须传递，最小长度6位）


返回数据格式：（参照数据格式来模拟3条数据即可）


节点|	类型|	描述
----|------|----
code|	int|	返回状态。如：0: 登录成功；2003: 用户名不存在；message	string	提示信息。如：登录成功
data|	array|	返回的数据信息
data/username|	string|	用户名
data/avator|	string|	用户头像
data/user_id|	int|	用户编号
data/token|	string|	用户登录成功后返回的token(令牌)


		
