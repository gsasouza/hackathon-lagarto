// @flow

import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID, GraphQLBoolean } from 'graphql';
import { globalIdField, connectionArgs, fromGlobalId } from 'graphql-relay';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
 fields: () => ({

  })
});
