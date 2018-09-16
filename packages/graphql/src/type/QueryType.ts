// @flow

import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID, GraphQLBoolean } from 'graphql';
import { globalIdField, connectionArgs, fromGlobalId } from 'graphql-relay';

import {EventLoader} from '../event/EventLoader';
import {EventType} from '../modules/event/EventType';
import {load} from '../mark/MarkLoader';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
 fields: () => ({
   build: {
     type: BuildType,
     args:{
       id:{
         type: new GraphQLNonNull(GraphQLID)
       },
       resolve:(obj, args, context) =>{
         const {id} = fromGlobalId(args,id);
         return UserLoad.load(context, id);
       }
     }
   }
  })
});
