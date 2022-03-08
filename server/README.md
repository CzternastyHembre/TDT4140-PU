# Server

To start the application from the root, open a terminal and run:

```bash
cd server
npm i
npm run server
```

The server runs on port: **5000**

## Methods for post as in buy/sale -post:

- Get Posts => returns all posts
- Get Posts/:id => returns the post corresponding id
- Post Posts => Adds a post to the RAPI
- Put Posts/:id => Edit your posts
- Get Posts/:user => returns all posts form this user (when logged in)
- Put posts/sold/:postId => marks a post as sold
- Delete Post/:id => Deletes post if state allows

## Methods for user

- Login User/:email:password => Logs in
- Post User => Creates a user
- Put User/:id => Edits the user info
- Get UserInfo/:id => gets the userInfo
