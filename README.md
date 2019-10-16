# Teacher student management

Built on Node with Sequelize ORM

Available publicly on
```
52.221.235.126:3000
```

## Getting Started

This runs on Node and MySQL, so both should be installed
sequelize-cli uses npx for it's initialization of the db

### Installing

First install all packages

```
npm i
```

Change db config in
(This should really be handled better, like with vault or at least env variables)

```
./config/config.json
./src/db/db-connect.js
```

Initialize the db
```
npm run db:init
```
You should see the following output or similar
```
== 20191014093305-create-teachers: migrating =======
== 20191014093305-create-teachers: migrated (0.026s)

== 20191014093349-create-students: migrating =======
== 20191014093349-create-students: migrated (0.021s)

== 20191014093433-create-teachers-students: migrating =======
== 20191014093433-create-teachers-students: migrated (0.018s)
```

Start the server
```
npm start
```
You should see the following output or similar
```
== @index.js: Importing server.js ==
Server running on port 3000
```

## Running the tests

Unit tests are built on Jest
No integration tests are written
```
npm run test
```

### Linter

Eslint on airbnb preset, turned off some rules because it makes it messy IMO
Only looks in the `./src` folder

```
npm run lint
npm run lint:fix
```
