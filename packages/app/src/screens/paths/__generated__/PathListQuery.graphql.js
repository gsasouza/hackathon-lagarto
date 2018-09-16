/**
 * @flow
 * @relayHash 4be2127bd0b1ddd9d6431ec7a23629b5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PathList_query$ref = any;
export type PathListQueryVariables = {||};
export type PathListQueryResponse = {|
  +$fragmentRefs: PathList_query$ref
|};
export type PathListQuery = {|
  variables: PathListQueryVariables,
  response: PathListQueryResponse,
|};
*/


/*
query PathListQuery {
  ...PathList_query
}

fragment PathList_query on Query {
  paths {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "PathListQuery",
  "id": null,
  "text": "query PathListQuery {\n  ...PathList_query\n}\n\nfragment PathList_query on Query {\n  paths {\n    id\n    name\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PathListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "PathList_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PathListQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "paths",
        "storageKey": null,
        "args": null,
        "concreteType": "Path",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = 'ed71a5579502ccc725b295dd39ace697';
module.exports = node;
