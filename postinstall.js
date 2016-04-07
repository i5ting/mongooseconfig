#!/usr/bin/env node

// 在npm postinstall之后，创建config/mongodb.example.js（如果不存在的话）,提示用户修改“cp config/mongodb.example.js config/mongodb.js”


var project_path = process.cwd().replace('\/node_modules\/mongooseconfig', '') + "/config"
const _path =  project_path + '/mongodb.js'
const _examle_file_path = project_path + "/mongodb.example.js"

var fs = require('fs');

var is_exist = fs.existsSync(_path);
console.log(project_path)
console.log(_path)
console.log(is_exist);

var mkdirp = require('mkdirp');
    
mkdirp(project_path, function (err) {
    if (err) console.error(err)
    else console.log('("[MONGOOSE CONFIG] INFO create config folder')
      
    if (is_exist === true) {
      console.log("[MONGOOSE CONFIG] INFO " + _path + ' is exist')
    } else {
      console.log("[MONGOOSE CONFIG] INFO " + _path + ' is not exist, now create a example file')
  
      fs.createReadStream(__dirname + "/config/mongodb.example.js").pipe(fs.createWriteStream( _examle_file_path ))
      
      console.log("[MONGOOSE CONFIG] \033[32m提醒: 已创建示例配置文件，需要手动执行以下操作： cp config/mongodb.example.js config/mongodb.js \033[39m")
      
    }
});

