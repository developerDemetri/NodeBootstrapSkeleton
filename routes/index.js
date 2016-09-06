'use strict';

let app = require('../app');
let express = require('express');
let db_pool = require('../bin/db_pool');
let aes_tool = require('../bin/aes_tool');
let bcrypt = require('bcrypt-nodejs');
let redis_tool = require('../bin/redis_tool');
let session_tool = require('../bin/session_tool');

let router = express.Router();

router.get('/', function(req, res) {
  res.render('home');
});

module.exports = router;
