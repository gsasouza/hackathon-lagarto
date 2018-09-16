// @flow

import { GraphQLObjectType, GraphQLString,  GraphQLList } from 'graphql';
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
    marks: {
      type: new GraphQLList(MarkType),
      resolve: (path, args, context) => MarkLoader.loadMarks(context, path.marks),
    }
  }),
  //interfaces: () => [NodeInterface],
});
