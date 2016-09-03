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
