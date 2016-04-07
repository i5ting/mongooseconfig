# mongooseconfig

[![npm version](https://badge.fury.io/js/mongooseconfig.svg)](http://badge.fury.io/js/mongooseconfig)

老婆说“看不过后台php那货写的代码，想自己学学”，于是让我教她mongoose，我才发现原来用了这么久的mongoose，竟然每次都要手写连接，然后再调用，可是手写里面也是有很多坑的，作为一个初学者的她是很难搞定的，于是就有了这个库

## Features

- 无需自己创建连接，用的时候创建配置文件即可
- 处理了SIGTERM事件，即Node process ends，会自动关闭连接，避免mongodb连接数过多，导致服务器假死
- 在npm postinstall之后，创建config/mongodb.example.js（如果不存在的话）,提示用户修改“cp config/mongodb.example.js config/mongodb.js”
- 如果不存在config/mongodb.js，这是读取node_modules/mongooseconfig/config/mongodb.js


## Install

```
npm install --save mongooseconfig
```

## Usages

in app.js(express or koa1 or koa2)

```
require('mongooseconfig')()
```

它会自动创建 config/mongodb.example.js, 你只需复制一份即可

```
cp config/mongodb.example.js config/mongodb.js
```

## 配置项

```
module.exports = {
  "host": "127.0.0.1",
  "port": "27017",
  "db": "mongoose-config-demo",
  "is_debug":true
};
```

稍后会加

- native_parser: true
- auto_reconnect: true,
- poolSize: 10
- is_debug: true

## Dev

```
npm start
```

## Test

```
npm test
```


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.0.0 初始化版本

## 欢迎fork和反馈

- write by `i5ting` i5ting@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
