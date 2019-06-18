# Angular-Nest-Fullstack-CNode

A simple application demonstrating [Angular](https://github.com/angular/angular) (SPA, SSR) the basic usage of permissions with [NestJS](https://github.com/nestjs/nest) (JWT, Passport, Github, User, Group, Permission) based on [CNode](https://cnodejs.org) template

## Related Technology

- [NestJS](https://github.com/nestjs/nest) - a JS backend framework providing architecture out of the box with a syntax similar to Angular
- [Angular](https://github.com/angular/angular) - a JS frontend framework created by Google
- [Angular Universal](https://github.com/angular/universal) - a JS frontend framework created by Google
- [Material-ui](https://material.angular.io/) - Material Design components for Angular
- [TypeScript](https://github.com/Microsoft/TypeScript) - reactive extensions for JavaScript
- [RxJS](https://github.com/Reactive-Extensions/RxJS) - superset of JS which compiles to JS, providing compile-time type checking
- [MongoDB](https://github.com/mongodb/mongo) - a NoSQL database
- [Graphql](https://github.com/graphql/graphiql) - A query language for your API
- [TypeORM](https://github.com/typeorm/typeorm) - ORM for TypeScript and JavaScript (ES7, ES6, ES5). Supports MySQL, PostgreSQL, MariaDB, SQLite, MS SQL Server, Oracle, WebSQL databases.
- [Ioredis](https://github.com/luin/ioredis) - A robust, performance-focused and full-featured Redis client for Node.js.
- [Passport](https://github.com/jaredhanson/passport) - a popular library used to implement JavaScript authentication
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - a JavaScript json web tokens implementation by auth0
- [@nrwl/schematics](https://github.com/nrwl/nx/blob/master/packages/schematics/src/collection.json) - Angular CLI power-ups for modern development

## Features

- Use the graphql query API
- Use the TypeORM connect MongoDB
- Use the Ioredis connect Redis
- Use JWT for authentication
- Support github authentication login
- Super easy to install and start using the full-featured controllers and services
- DB and service agnostic extendable CRUD controllers
- Reach query parsing with filtering, pagination, sorting, relations, nested relations, cache, etc.
- Framework agnostic package with query builder for a frontend usage
- Query, path params and DTOs validation included
- Overriding controller methods with ease
- Tiny config (including globally)
- Additional helper decorators
- Swagger documentation
- Support Angular server rendering
- Support Angular responsive presentation

## Running the project

These instructions should be sufficient for one to get the project going on their local machine

### Installing core dependencies

- make sure you have [node.js](https://nodejs.org/en/download/) installed version 10.15+
- make sure you have [MongoDB](https://www.mongodb.com/) installed version 3.4+
- make sure you have [Redis](https://redis.io/download) installed version 3.2+

### Cloning the github repository

To clone the project, run

```bash
git clone https://github.com/jiayisheji/AngularNest-Fullstack-CNode.git
npm 
```

### Installing the dependencies

To install the dependencies after you've cloned the project, go to its root folder and run

```bash
cd AngularNest-Fullstack-CNode && npm install
```

### Starting the MongoDB and Redis

Once you start the database application, you are ready to run the server

Boot according to your system

Notice that the server uses MongoDB and Redis so we need to have a MongoDB and Redis instance running so the server can connect to it

### Alternative commands

If you need to work on the frontend and backend parts at the same time, you can run

```bash
npm start
```

Then, you can go to the Angular dev server at port 4200 and test server requests (to port 3000), we got a proxy to the backend

If you only need to work on the frontend, you can run

```bash
npm run start:client
```

Alternatively, if you only need to work on the backend, you can run

```bash
npm run start:server
```

Keeping in mind that you need to have the Angular app built and a mongodb and redis connection established

## Documentation

- [Angular Docs](https://angular.io/docs) 
- [NestJS Docs](https://docs.nestjs.com) 
- [Typescript Docs](http://www.typescriptlang.org/) 
- [Rxjs Docs](https://rxjs.dev/api) 
- [Typeorm Docs](https://typeorm.io/#/) 
- [Ioredis Docs](https://github.com/luin/ioredis/blob/master/API.md) 
- [Graphql Docs](https://graphql.org/) 
- [Passport Docs](http://www.passportjs.org/) 
- [JWT Docs](https://jwt.io/) 

## Support

Any support is wellcome. At least you can give us a star :star:

## License

[MIT](LICENSE)