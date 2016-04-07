var debug = require('debug')('mongooseconfig')
  , connectionString
  , db
  , mongoose = require('mongoose')
  , options

module.exports = function(config){
  var port     = config.port;
  var db       = config.db;
  var host;

  var is_debug = config.is_debug;
  if(is_debug) {
    console.log('\033[32m提醒:debug状态连接数据库:\033[39m');
    host  = config.host;
  }else{
    console.log('\033[91m警告:非debug状态连接数据库:\033[39m');
    host  = config.host;
  }

  connectionString = 'mongodb://' + host + ':' + port + '/' + db + '';

  options = {
    db: {
      native_parser: true
    },
    server: {
      auto_reconnect: true,
      poolSize: 5
    }
  };

  debug(connectionString);

  mongoose.connect(connectionString, options, function(err, res) {
    if (err) {
      debug('[mongoose log] Error connecting to: ', +connectionString + '. ' + err);
      return process.exit(1);
    } else {
      return debug('[mongoose log] Successfully connected to: ', +connectionString);
    }
  });

  db = mongoose.connection;

  db.on('error', console.error.bind(console, 'mongoose connection error:'));

  db.once('open', function() {
    return debug('mongoose open success');
  });
  
  var gracefulExit = function() { 
    mongoose.connection.close(function () {
      console.log('[MONGOOSE CONFIG] INFO : Mongoose default connection with DB is disconnected through app termination');
      process.exit(0);
    });
  }

  // If the Node process ends, close the Mongoose connection
  process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);
  
  return connectionString
};
