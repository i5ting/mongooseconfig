var log = console.log
var db = require('./db')

module.exports = function () {
  const path = process.cwd() + '/config/mongodb'
  const cfg = require(path)
  
  db(cfg)
}
