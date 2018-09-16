// @flow

import {GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID, GraphQLBoolean, GraphQLList} from 'graphql';
import { globalIdField, connectionArgs, fromGlobalId } from 'graphql-relay';

import * as BuildLoader from '../build/BuidLoader';
import BuildType from '../modules/build/BuildType';


export default new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    builds: {
      type: new GraphQLList(BuildType),
      resolve: (obj, args, context) => BuildLoader.loadBuilds(context, args),
    }
  })
});
