// @flow

import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID, GraphQLBoolean } from 'graphql';
import { globalIdField, connectionArgs, fromGlobalId } from 'graphql-relay';

//import { NodeField } from '../interface/NodeInterface';

import{
  UserLoader
} from 'data-models';

import UserType from '../modules/user/UserType';

export default new GraphQLObjectType({

  name: 'Query',
  description: 'The root of all... queries',

 fields: () =>({
   node: NodeField,
   me: {
     type: UserType,
     resolve: (root, args, context) => (context.user ? UserLoader.load(context, context.user._id) : null),
   },
   user: {
     type: UserType,
     args: {
       id: {
         type: new GraphQLNonNull(GraphQLID),
       },
     },
     resolve: (obj, args, context) => {
       const { id } = fromGlobalId(args.id);
       return UserLoader.load(context, id);
     },
   },
   

  });
