'use strict';

// Replace the null values with real values and rename the file to 'local_settings.js' //
// NEVER commit the real settings file to Git. EVER. //

let local_settings = {
  pg_user: null,
  pg_db: null,
  pg_pass: null,
  pg_host: null, //localhost for local
  pg_port: null, //usually 5432 for local
  pg_ssl: null, //usually false for local and true for cloud
  aes_alg: 'aes-256-ctr', //there are others if you wanna Google the NodeJS crypto library
  aes_pass: null, //pick a really long and secure string
  sesh_name: null, //cookie name
  sesh_secret: null, //pick a really long and secure string
  redis_port: null, //usually 6379 for local
  redis_host: null, //localhost for local
  redis_password: null //usually null for local
};

module.exports = local_settings;
