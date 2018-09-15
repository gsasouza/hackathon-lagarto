// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';
//import { NodeInterface } from '../../interface/NodeInterface';

export default new GraphQLObjectType({
  name: 'Mark',
  description: 'Mark data',
  fields: () => ({
    id: globalIdField('Mark'),
    _id: {
      type: GraphQLString,
      resolve: mark => mark._id,
    },
    latitude: {
      type: GraphQLString,
      resolve: mark => mark.latitude,
    },
    longitude: {
      type: GraphQLString,
      resolve: mark => mark.longitude,
    },
    type: {
      type: GraphQLString,
      resolve: user => user.type,
    },
  }),
  //interfaces: () => [NodeInterface],
});