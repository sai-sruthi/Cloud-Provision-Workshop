Provison Workshop
===============

### Before you start

`git clone https://github.ncsu.edu/stallur2/HW0-DevOps.git`

##### Using package manager, install dependencies

`cd HW0-DevOps/DigitalOcean` then `npm install`

##### Set your token

```
# Mac/Linux
export NCSU_DOTOKEN="xxx"
# Windows
setx NCSU_DOTOKEN xxx
```

##### Run the node program

`node index.js`

If everything is set correctly, you should see output like the following:

```
Your token is: xxxxxx
Calls remaining 4931
```

### Concepts


| HTTP Verb	| Action             |	Example	       |Result  | 
| --------- | ------------------ | --------------- |------- |
| GET	    | Retrieve record(s) | GET /users/	   | Retrieves all users|
| POST	    | Create record	     | POST /users/	   | Creates a new user|
| PUT	    | Update record	     | PUT /users/6	   | Updates user 6|
| DELETE	| Delete record(s)	 | DELETE /users/1 | Deletes user with id 1|

Query parameters can be provided to provide additional information to the request. For example, `GET /users?country=France` would return a list of all users in France.

## Workshop

The code makes use of the [got api](https://github.com/sindresorhus/got#readme) for making http requests, suitable for interacting with a REST API.

Find code for the 7 steps specified in [`index.js`](index.js):

1. List regions.
2. List VM images.
3. Create droplet.
4. Get droplet ip
5. Ping ip
6. Destroy droplet
7. Ping ip, make sure dead.

You can use `curl` to help debug your calls:

```bash
curl -X GET -H 'Content-Type: application/json' -H "Authorization: Bearer $NCSU_DOTOKEN" "https://api.digitalocean.com/v2/images"
```

_Note: For Windows, use `%NCSU_DOTOKEN%` in your curl command to expand the environment variable._
