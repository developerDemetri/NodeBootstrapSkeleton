# Node & Bootstrap Skeleton
Starter app for rapid Node & Bootstrap development.
Set to use a PostgreSQL database and Redis for session storage.
AES for encryption, bcrypt for hashing.

## Quick Start:
1. Clone/Download this entire project
2. Modify [package.json] (./package.json) with new info for your project
3. Create your own bin/local_settings.js file based on [bin/local_settings_template.js] (./bin/local_settings_template.js)
4. Run `npm install` to install the basic dependencies, the `npm start` to test out the app
5. Make something awesome (:

## Suggestions for local development:
* [PostgreSQL] (https://www.postgresql.org/download/) 9.x
* [pgAdmin] (https://www.pgadmin.org/download/) 3 or 4
* [Redis] (http://redis.io/download) 3.x
* [NodeJS] (https://nodejs.org/en/download/) 6.x with [npm] (https://docs.npmjs.com/getting-started/installing-node) 3.8 or higher

## Included Tools:
* [db_pool.js] (./bin/db_pool.js) handles a PostgreSQL database connection pool. It uses the [pg] (https://www.npmjs.com/package/pg) npm package. Quick usage example:
```
let db_pool = require('../bin/db_pool'); // importing into a route file

db_pool.connect(function(err, client, done) { // getting a db connection from the pool
  if (err) {
     // error fetching connection from pool
  }
  else {
    let id = 5; // arbitrary parameter
    client.query('SELECT * FROM users WHERE id=$1', [id], function(err, result) { // make sql query
      done(); // release connection back into pool
      if (err) {
        // sql query error
      }
      else {
        // sql query successful
        if (result.rows[0]) {
          // query returned something
        }
        else {
          // query returned nothing
        }
      }
    });
  }
});
```
* [aes_tool.js] (./bin/aes_tool.js) allows simple AES encryption/decryption. It uses the built in [crypto] (https://nodejs.org/api/crypto.html) NodeJS library. Quick usage example:
```
let aes_tool = require('../bin/aes_tool'); // importing into a route file

let encryptedVar = aes_tool.encrypt(myString); // encrypting a string

let unencryptedVar = aes_tool.decrypt(encryptedVar); // unencrytping a string
```
* [redis_tool.js] (./bin/redis_too.js) handles connection to a Redis database. It uses the [ioredis] (https://www.npmjs.com/package/ioredis) npm package. Quick usage example:
```
let redis_tool = require('../bin/redis_tool'); // importing into a route file

// set data for r_key
let myVar = 'important data';
redis_tool.set(r_key, JSON.stringify(myVar));

// get data for r_key
redis_tool.get(r_key, function (err, data) {
  if (err) {
    // error retreiving data
  }
  else {
    // data successfully retreived
    let usableData = JSON.parse(data); //parse the returned Redis string into JSON
  }
  res.send(result);
});
```
* [session_tool.js] (./bin/session_tool.js) handles sessions via the [express-session] (https://www.npmjs.com/package/express-session) npm package. Just add
```
let session_tool = require('../bin/session_tool');
```
to the top of your routes files and use session variables according to the [express-session documentation] (https://github.com/expressjs/session/blob/master/README.md).  

## License
The MIT License (MIT)

Copyright (c) 2016 DeveloperDemetri

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
