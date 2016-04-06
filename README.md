# mongooseconfig


在npm postinstall之后，创建config/mongodb.example.js（如果不存在的话）,提示用户修改“cp config/mongodb.example.js config/mongodb.js”


如果不存在config/mongodb.js，这是读取node_modules/mongooseconfig/config/mongodb.js


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