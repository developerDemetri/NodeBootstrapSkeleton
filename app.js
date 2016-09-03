'use strict';

let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let db_pool = require('./bin/db_pool');
let redis_tool = require('./bin/redis_tool');
let session_tool = require('./bin/session_tool');

let index = require('./routes/index');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('./public'));
app.use(express.static('./public/stylesheets'));
app.use(express.static('./public/images'));
app.use(express.static('./public/javascripts'));
app.use(session_tool);

app.use('/', index);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(function(req, res) {
  res.render('lost');
});

module.exports = app;

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
