// @flow

import { GraphQLObjectType, GraphQLString} from 'graphql';
import { globalIdField } from 'graphql-relay';
//import { NodeInterface } from '../../interface/NodeInterface';
import MarkLoader from '../../mark/MarkLoader';
import BuildLoader from '../../build/BuidLoader';
import MarkType from '../mark/MarkType';

export default new GraphQLObjectType({
  name: 'Event',
  description: 'Event data',
  fields: () => ({
    id: globalIdField('Event'),
    _id: {
      type: GraphQLString,
      resolve: path => path._id,
    },
    name: {
      type: GraphQLString,
      resolve: path => path.name,
    },
    dateStart: {
      type: GraphQLString,
      resolve: path => path.dateStart,
    },
    dateEnd: {
      type: GraphQLString,
      resolve: path => path.dateEnd,
    },
    mark: {
      type: MarkType,
      resolve: (obj, args, context) => MarkLoader.loadMarks(context, obj.mark),
    },
    build: {
      type: MarkType,
      resolve: (obj, args, context) => BuildLoader.loadBuilds(context, obj.build),
    },
  }),
  //interfaces: () => [NodeInterface],
});
