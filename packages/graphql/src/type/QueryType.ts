// @flow

import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID, GraphQLBoolean } from 'graphql';
import { globalIdField, connectionArgs, fromGlobalId } from 'graphql-relay';

import { BuildLoader } from '../build/BuidLoader';
import { BuildType } from '../modules/build/BuildType';

import { EventLoader } from '../event/EventLoader';
import { EventType } from '../modules/event/EventType';


export default new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
 fields: () => ({
   /* event: {
     type: EventType,
     args: {
       id: {
         type: new GraphQLNonNull(GraphQLID),
       },
     },
     resolve: (obj, args, context) => {
       const { id } = fromGlobalId(args.id);
       return EventLoader.load(context, id);
     },
   }
 */
    build: {
      type: EventType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (obj, args, context) => {
        const { id } = fromGlobalId(args.id);
        return BuildLoader.load(context, id);
    },
}
})
});
