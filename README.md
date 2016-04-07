# mongooseconfig

老婆说“看不过后台php那货写的代码，想自己学学”，于是让我教她mongoose，我才发现原来用了这么久的mongoose，竟然每次都要手写连接，然后再调用，可是手写里面也是有很多坑的，作为一个初学者的她是很难搞定的，于是就有了这个库


在npm postinstall之后，创建config/mongodb.example.js（如果不存在的话）,提示用户修改“cp config/mongodb.example.js config/mongodb.js”


如果不存在config/mongodb.js，这是读取node_modules/mongooseconfig/config/mongodb.js


db.runCommand( { serverStatus: 1 } ).connections



## Install

```
npm install --save mongooseconfig
```

## Usages

in app.js(express or koa1 or koa2)

```
require('mongooseconfig')()
```

create config/mongodb.js

```
module.exports = {
  "host": "127.0.0.1",
  "port": "27017",
  "db": "mongoose-config-demo",
  "is_debug":true
};
```

## Dev

```
npm start
```

## Test

```
npm test
```