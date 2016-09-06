'use strict';

let Redis = require('ioredis');
let redis_config = require('./secret_settings').redis_config;

let redis_tool = new Redis({
  port: redis_config.port,
  host: redis_config.host,
  password: redis_config.password
});

redis_tool.on('connect', function () {
  console.log('connected to redis');
});


module.exports = redis_tool;
