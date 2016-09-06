'use strict';

// Replace the null values with real values and rename the file to 'local_settings.js' //
// NEVER commit the real settings file to Git. EVER. //

let local_settings = {
  pg_user: null,
  pg_db: null,
  pg_pass: null,
  pg_host: null,
  pg_port: null,
  pg_ssl: null,
  aes_alg: null,
  aes_pass: null,
  sesh_name: null,
  sesh_secret: null,
  redis_port: null,
  redis_host: null,
  redis_password: null
};

module.exports = local_settings;
