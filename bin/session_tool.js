'use strict';

let uuid = require('node-uuid');
let session = require('express-session');
let redis_tool = require('./redis_tool');
let RedisStore = require('connect-redis')(session);
let session_config = require('./secret_settings').session_config;

let options = {
  client: redis_tool
};

let session_settings = {
  name: session_config.sesh_name,
  store: new RedisStore(options),
  genid: function(req) {
    return uuid.v4();
  },
  secret: session_config.sesh_secret,
  saveUninitialized: true,
  unset: 'destroy',
  resave: 'true'
};

let session_tool = session(session_settings);

module.exports = session_tool;

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
