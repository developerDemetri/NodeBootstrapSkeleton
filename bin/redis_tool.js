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

/*
Copyright 2016 DeveloperDemetri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
