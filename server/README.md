### Server

A [Apollo Server](https://www.apollographql.com/docs/apollo-server) with [MongoDB](https://www.mongodb.com) backend 
for storing rental houses. 

All server code is located in the  `/server` folder.

#### Configure your environment variables

Create a environment variable, `.env` file in the `/server` folder:

```env
PORT=9000
DB_USER=<username>
DB_USER_PASSWORD=<password>
DB_CLUSTER=<mongodb cluster>
G_CLIENT_ID=<Google OAuth client id>
G_CLIENT_SECRET=<Google OAuth API secret>
PUBLIC_URL=<http://localhost:3000>
SECRET=<some secret text>
NODE_ENV=<development for local dev>
```
