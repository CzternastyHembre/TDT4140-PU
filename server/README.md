# Server

To start the application run:

```bash
cd server
npm i
npm run server
```

The server runs on port: **5000**

## Methods for post as in buy/sale -post:

- Get Posts => rertuns all posts
- Get Posts/:id => returns the post corresponding id
- Post Post => Adds a post to the RAPI
- Put Post/:id => Edit your posts
- Get Posts/:user => returns all posts form this user (when logged in)
- Delete Post/:id => Deletes post if state allows

## Methods for user

- Login User/:email:password => Logs in
- Post User => Creates a user
- Put User/:id => Edits the user info
- Get UserInfo/:id => gets the userInfo
