var log = console.log
var db = require('./db')
var cfg

var fs = require('fs');


module.exports = function (path) {
  var _local_path = process.cwd() + '/config/mongodb'
  var _mongoose_config_path = __dirname + '/config/mongodb'

  if (path) {
    // 使用自定义路径
    console.log("[MONGOOSE CONFIG] INFO use custom path: " + path + ' confit')
    cfg = require(path)
  } else {
    // 默认路径
    var is_exist = fs.existsSync(_local_path);

    if (is_exist === true) {
      // 当前路径下，如果存在
      console.log("[MONGOOSE CONFIG] INFO use default path: " + _local_path + ' confit')
      cfg = require(_path)
    } else {
      // 当前路径下，如果不存在，使用mongooseconfig里的本地配置文件
      console.log("[MONGOOSE CONFIG] INFO use path in mongoose_config: " + _mongoose_config_path + ' confit')
      cfg = require(_mongoose_config_path)
    }
  }
  
  db(cfg)
}
