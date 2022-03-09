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
- Get Posts/:id => returns the post on corresponding id
- Post Posts => Adds a post to the RestRAPI
- Put Posts/:id => Edit your posts
- Get Posts/:user => returns all posts form this user (when logged in)
- Put posts/sold/:postId => marks a post as sold
- Delete Post/:id => Deletes post on id if state allows

## Methods for user

- Login User/:email:password => Logs in
- Post User => Creates a user
- Put User/:id => Edits the user info
- Get UserInfo/:id => gets the userInfo

## Methods for conversations

- Get Conversation => returns all conversations, only if state allows, temporary
- Get Conversation/:id => Returns the conversation on corresponding id
- Post Conversation => Adds a post to the RestAPI
- Put Conversation/:id/message => Posts a message on corresponding conversationId
- Delete Conversation/:id => Deletes conversation on id if state allows
- Put Conversation/:id/ => Adds a message to the conversaiton
