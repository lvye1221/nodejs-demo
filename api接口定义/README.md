

# �������� #

```
// ���軷������ȿ�  ��һ�½�

// ����������
node index.js

```





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



# ��ϰ���� #

## ��Ʒ�ӿ� ##

### 1. ��ȡĳ����Ʒ ###

�ӿ����� api_goods
���󷽷����ͣ� GET


����|	����|	����
----|------|----
goods_id|	int	| ��Ʒ���(���봫�ݣ� 
page|	int|	��Ʒ�б���
pagesize|	int|	��Ʒ�б�����������
		
		

���ؽ����

```
{
    "code": 0,
    "message": "��Ʒ���ݻ�ȡ�ɹ�",
    "data": [
        {
            "goods_id": "253286",
            "id": "1",
            "cat_id": "45",
            "cat_name": " ",
            "brand_id": "0",
            "goods_name": "����600g��Я�������� ������� רҵ������ ������ˮ ������",
            "goods_desc": "�����ı��ʽ�������������ȿɳ��������ֿɽ������磬����ֻ��600g��\r\n��...",
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
            "goods_name": "��������������ɵǻ������� | �������� �������� վ�ž�������ȡ�õ���20�硿",
            "goods_desc": "TUPLUS ONE��;��1�š������䣬�з�����13���£�����TUPLUS;�ӵĵ�һ��...",
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
            "goods_name": "��������������ɵǻ������� �������� �������� վ�ž�������ȡ���ʯ��20�硿",
            "goods_desc": "TUPLUS ONE��;��1�š������䣬�з�����13���£�����TUPLUS;�ӵĵ�һ��...",
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
            "goods_name": "���Ϳ������������ҡ�",
            "goods_desc": "�����������ʣ���������ů��Ҳ��һֱ���������ǡ������Ǵ����˳��˺�����...",
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
            "goods_name": "�����Я ��ѹ���ȱ�����ʱ�ȿ��ȡ�",
            "goods_desc": "�������۴�&amp;��������,ֻ��6.95Ӣ��,Լ18cm������������Ϊֹ��...",
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
            "goods_name": "С����̬��������ˢ | �������ݽ���ˢ˿��ѧ����������� ����װ��ɫ",
            "goods_desc": "1.ȫ����ѡ����ˢ˿ ָ���ձ���¹���������\r\n2.������ʽˢ˿���֣�ɽ��...",
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
            "goods_name": "�����Яʽ��֭ե֭�� Ӣ����������С�ҵ�",
            "goods_desc": "1.С�ɻ���,ʱ�����\r\n2.�������,��ȫ��ת\r\n3.����ʽ����,���ɷ���\r\n4....",
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
            "goods_name": "Mini��������ɫ��",
            "goods_desc": "����ȫ���OSTRICH PILLOW�Ƴ������µ���ƷMINI�������ڵ�ѡ���ڰ칫...",
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
            "goods_name": "���Ϳ��������ƺ�ɫ��",
            "goods_desc": "�����������ʣ���������ů��Ҳ��һֱ���������ǡ������Ǵ����˳��˺�����...",
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
            "goods_name": "����������������� | ���������������Ƴ� ���г��κð��¡���ɫ��",
            "goods_desc": "�����������ʣ���������ů��Ҳ��һֱ���������ǡ������Ǵ����˳��˺�����...",
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
            "goods_name": "�Ա ����+���� ��װ����/˫�ˣ�",
            "goods_desc": "ÿ��̧ͷ�����ǿգ�����һ���Զ����������嫵����档����ÿһ��̫����...",
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
            "goods_name": "�������ر��� С����  ������� �ĺ�/��װ",
            "goods_desc": "��С���ӡ�����һ�������˶�����ͯ����һ�������ù����Ϲ��ߡ�������...",
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


### 2. �û���¼ ###


�ӿ����� api_user
�ӿ����ͣ� POST



����|	����|	����
----|------|----
status|	string	| Register ע��Login ��¼
username|	string |	�û��� �����봫�ݣ�3-20λ��ĸ�����»��ߣ�
password|	string |	���루���봫�ݣ���С����6λ��


�������ݸ�ʽ�����������ݸ�ʽ��ģ��3�����ݼ��ɣ�


�ڵ�|	����|	����
----|------|----
code|	int|	����״̬���磺0: ��¼�ɹ���2003: �û��������ڣ�message	string	��ʾ��Ϣ���磺��¼�ɹ�
data|	array|	���ص�������Ϣ
data/username|	string|	�û���
data/avator|	string|	�û�ͷ��
data/user_id|	int|	�û����
data/token|	string|	�û���¼�ɹ��󷵻ص�token(����)


		
