
// import 'isomorphic-fetch';

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import convert from 'koa-convert';
import cors from 'kcors';
import graphqlHttp from 'koa-graphql';
import Router from 'koa-router';
import { koaPlayground } from 'graphql-playground-middleware';


import schema from './schema';
import registerLoaders from './registerLoaders';

const app = new Koa();
const router = new Router();

router.all(
  '/playground',
  koaPlayground({
    endpoint: '/graphql',
  }),
);

const graphqlSettingsPerReq = async req => {

  const dataloaders = registerLoaders();
  console.log(schema)

  return {
    graphiql: process.env.NODE_ENV !== 'production',
    schema,
    context: {
      req,
      dataloaders,
    },
    formatError: error => {
      console.log(error.message);
      console.log(error.locations);
      console.log(error.stack);

      return {
        message: error.message,
        locations: error.locations,
        stack: error.stack,
      };
    },
  };
};

const graphqlServer = convert(graphqlHttp(graphqlSettingsPerReq));

// graphql standard route
router.all('/graphql', graphqlServer);

app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

export default app;
