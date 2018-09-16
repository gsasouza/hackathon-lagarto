// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';
//import { NodeInterface } from '../../interface/NodeInterface';
import { MarkLoader } from 'data-models';
import MarkType from '../mark/MarkType';

export default new GraphQLObjectType({
  name: 'Path',
  description: 'User data',
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
      resolve: (obj, args, context) => MarkLoader.loadMarks(context, obj.mark),
    }
  }),
  //interfaces: () => [NodeInterface],
});