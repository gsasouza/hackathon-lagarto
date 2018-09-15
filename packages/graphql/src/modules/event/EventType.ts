// @flow

import { GraphQLObjectType, GraphQLString,  GraphQLList } from 'graphql';
import { globalIdField } from 'graphql-relay';
//import { NodeInterface } from '../../interface/NodeInterface';
import { MarkLoader, BuildLoader } from 'data-models';
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
      resolve: (obj, args, context) => MarkLoader.loadMarks(context, obj.mark),
    },
    build: {
      type: MarkType,
      resolve: (obj, args, context) => BuildLoader.loadB(context, obj.build),
    },
  }),
  //interfaces: () => [NodeInterface],
});