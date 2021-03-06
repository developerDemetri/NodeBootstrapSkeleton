# Node & Bootstrap Skeleton
Starter app for rapid Node Express & Bootstrap development.
Node is set to EJS for templating, a PostgreSQL database and Redis for session storage.
It also has tools setup to use AES for encryption, bcrypt for hashing.

## Quick Start:
1. Clone/Download this entire project
2. Modify [package.json] (./package.json) with new info for your project
3. Create your own bin/local_settings.js file based on [bin/local_settings_template.js] (./bin/local_settings_template.js)
4. Run `npm install` to install the basic dependencies, the `npm start` to test out the app
5. Make something awesome (:

## Requirements for local development:
* [PostgreSQL] (https://www.postgresql.org/download/) 9.x
* [pgAdmin] (https://www.pgadmin.org/download/) 3 or 4
* [Redis] (http://redis.io/download) 3.x
* [NodeJS] (https://nodejs.org/en/download/) 6.x with [npm] (https://docs.npmjs.com/getting-started/installing-node) 3.8 or higher

## Included Tools:
* [pg_tool.js] (./bin/pg_tool.js) handles PostgreSQL database queries. It uses the [pg] (https://www.npmjs.com/package/pg) npm package. Quick usage example:
```
let pg_tool = require('../bin/pg_tool'); // importing into a route file

let id = 5;
pg_tool.query('SELECT * FROM stuff WHERE id=$1', [id], function(error, rows) {
  if (error) {
    let result = {
      "status": 500,
      "error": error
    };
    res.send(result);
  }
  else {
    let result = {
      "status": 200,
      "data": rows
    };
    res.send(result);
  }
});
```
* [aes_tool.js] (./bin/aes_tool.js) allows simple AES encryption/decryption of strings or numbers. It uses the built in [crypto] (https://nodejs.org/api/crypto.html) NodeJS library. Quick usage example:
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
* [validator_tool.js] (./bin/validator_tool.js) provides simple input validation. It checks that the input variable exists, is the correct object type, and checks strings against the provided regex. Common usage example:
```
  let validator_tool = require('../bin/validator_tool'); // importing into a route file
  let checkInput = validator_tool.checkInput; //only method so far

  let name_re = /^\w{3,63}$/; //simple regex for usernames
  router.get('/', function(req, res) {
    if (checkInput(req.body.username, 'string', name_re) && checkInput(req.body.id_num, 'number', null)) {
      console.log('valid input');
      // process valid request
    }
    else {
      console.log('invalid input');
      // reject invalid request
    }
  });
```
* Other packages already included for use:
  * [bcrypt-nodejs] (https://www.npmjs.com/package/bcrypt-nodejs) for hashing passwords
  * [request] (https://www.npmjs.com/package/request) for super easy external API calls

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
