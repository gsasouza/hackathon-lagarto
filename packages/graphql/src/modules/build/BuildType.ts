// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';
//import { NodeInterface } from '../../interface/NodeInterface';
import * as MarkLoader from '../../mark/MarkLoader';
import MarkType from '../mark/MarkType';

export default new GraphQLObjectType({
  name: 'Path',
  description: 'Path data',
  fields: () => ({
    id: globalIdField('Path'),
    _id: {
      type: GraphQLString,
      resolve: path => path._id,
    },
    name: {
      type: GraphQLString,
      resolve: path => path.name,
    },
    mark: {
      type: MarkType,
      resolve: (obj, args, context) => MarkLoader.load(context, obj.mark),
    }
  }),
  //interfaces: () => [NodeInterface],
});
