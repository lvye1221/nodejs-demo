


Express4.0 来创建



express -e nodejs-demo

# 操作步骤 #


```
express -e nodejs-demo


```






下面是 express3.0 的版本信息：
```
// 命令安装
npm init

cnpm install express

cnpm install mongoose

// 数据库中间件
cnpm install session-mongoose

cnpm install session


```

MongoDB 连接文件




# 错误信息 #

```
Error: Most middleware (like session) is no longer bundled with Express and must be installed separately. Please see https://github.com/senchalabs/connect#middleware.
    at Function.get (C:\exercise\nodejs-demo\db数据库操作\node_modules\_express@
4.16.2@express\lib\express.js:108:13)
    at module.exports (C:\exercise\nodejs-demo\db数据库操作\node_modules\_sessio
n-mongoose@0.5.2@session-mongoose\index.js:266:15)
    at Object.<anonymous> (C:\exercise\nodejs-demo\db数据库操作\app.js:8:45)
    at Module._compile (module.js:573:30)
    at Object.Module._extensions..js (module.js:584:10)
    at Module.load (module.js:507:32)
    at tryModuleLoad (module.js:470:12)
    at Function.Module._load (module.js:462:3)
    at Function.Module.runMain (module.js:609:10)
    at startup (bootstrap_node.js:158:16)
    at bootstrap_node.js:578:3

```





# 参考资料 #

Mongoose使用案例–让JSON数据直接入库MongoDB
http://blog.fens.me/nodejs-mongoose-json/


