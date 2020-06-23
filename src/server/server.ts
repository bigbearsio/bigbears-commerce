import http from 'http';
import express from 'express';
import 'express-async-errors';
import { applyMiddleware, applyRoutes } from './utils';
import middleware from './middleware';
import graphqlHTTP  from 'express-graphql';
import errorHandlers from './middleware/errorHandlers';
import routes from './services';
import { root, schema } from './graphql/schema';
//import { initDependencies } from './config/index';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

process.on('uncaughtException', (e) => {
  console.log('uncaughtException!', e);
  process.exit(1);
});

process.on('unhandledRejection', (e) => {
  console.log('unhandledRejection!', e);
  process.exit(1);
});

const router = express();
router.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

async function start() {
  server.listen(PORT, () =>
    console.log(`Server is running http://localhost:${PORT}...`),
  );
}

start();
