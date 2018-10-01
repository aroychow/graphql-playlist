**graphql-playlist**

A test app using node, express, graphql, mongo(mLab), react & apollo client. The graphql server has a book -> author relatioship in the backend. 

Each book has the following properties:

* id
* name
* genre
* authorId

Each Author has the following properties:

* id
* name
* age

The overall app consists of two small apps. A server app & a client app.

The server consists the following:

* A nodejs server backend.
* An express route to serve graphql server.
* Connected to mongo instance in mLab(local mongo could also be used).

The client app consists the following:

* A react frontend to serve client UI.
* Apollo client to interact with graphql server.

**To make the app working**

* Clone the repo
* Go to the server folder & execute the following command(Need to use own mLab configuration in [app.js](server/app.js#L12))
```
cd server
npm start
```
  
  Your server will be avaialable in http://localhost:4000/graphql
* Go to the client folder & execute the following command.
```
cd client
npm start
```
Your client will be avaialable in http://localhost:3000
