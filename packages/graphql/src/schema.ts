// @flow

import { GraphQLSchema } from 'graphql';

import QueryType from './type/QueryType';

const schema = new GraphQLSchema({
  query: QueryType,
  //mutation: MutationType,
});

export default schema;
