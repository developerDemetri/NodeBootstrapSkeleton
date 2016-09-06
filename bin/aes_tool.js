'use strict';

let aes_config = require('./secret_settings').aes_config;

let crypto = require('crypto');
let algorithm = aes_config.algorithm;
let password = aes_config.password;

let aes_tool = {};

aes_tool.encrypt = function(text) {
  let cipher = crypto.createCipher(algorithm,password)
  let crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}

aes_tool.decrypt = function(text) {
  let decipher = crypto.createDecipher(algorithm,password)
  let dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

module.exports = aes_tool;
