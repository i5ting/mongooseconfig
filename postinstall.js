#!/usr/bin/env node

// 在npm postinstall之后，创建config/mongodb.example.js（如果不存在的话）,提示用户修改“cp config/mongodb.example.js config/mongodb.js”

const _path = process.cwd() + '/config/mongodb.js'
const _examle_file_path = process.cwd() + "/config/mongodb.example.js"

var fs = require('fs');

var is_exist = fs.existsSync(_path);

console.log(is_exist);

if (is_exist === true) {
  console.log("[MONGOOSE CONFIG] INFO " + _path + ' is exist')
} else {
  console.log("[MONGOOSE CONFIG] INFO " + _path + ' is not exist, now create a example file')
  
  fs.createReadStream(__dirname + "/config/mongodb.example.js").pipe(fs.createWriteStream( _examle_file_path ))
}