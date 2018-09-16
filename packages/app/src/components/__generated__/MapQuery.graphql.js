/**
 * @flow
 * @relayHash 57a9b098502627f0e42847158091b6f2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Map_query$ref = any;
export type MapQueryVariables = {||};
export type MapQueryResponse = {|
  +$fragmentRefs: Map_query$ref
|};
export type MapQuery = {|
  variables: MapQueryVariables,
  response: MapQueryResponse,
|};
*/


/*
query MapQuery {
  ...Map_query
}

fragment Map_query on Query {
  builds {
    id
    name
    mark {
      latitude
      longitude
      id
    }
  }
  path(id: "UGF0aDo1YjllMGE4OWRlNjkxNDVmYmM3NmQzNGM=") {
    marks {
      id
      latitude
      longitude
      type
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "latitude",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "longitude",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MapQuery",
  "id": null,
  "text": "query MapQuery {\n  ...Map_query\n}\n\nfragment Map_query on Query {\n  builds {\n    id\n    name\n    mark {\n      latitude\n      longitude\n      id\n    }\n  }\n  path(id: \"UGF0aDo1YjllMGE4OWRlNjkxNDVmYmM3NmQzNGM=\") {\n    marks {\n      id\n      latitude\n      longitude\n      type\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MapQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Map_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MapQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "builds",
        "storageKey": null,
        "args": null,
        "concreteType": "Build",
        "plural": true,
        "selections": [
          v0,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "mark",
            "storageKey": null,
            "args": null,
            "concreteType": "Mark",
            "plural": false,
            "selections": [
              v1,
              v2,
              v0
            ]
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "path",
        "storageKey": "path(id:\"UGF0aDo1YjllMGE4OWRlNjkxNDVmYmM3NmQzNGM=\")",
        "args": [
          {
            "kind": "Literal",
            "name": "id",
            "value": "UGF0aDo1YjllMGE4OWRlNjkxNDVmYmM3NmQzNGM=",
            "type": "ID"
          }
        ],
        "concreteType": "Path",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "marks",
            "storageKey": null,
            "args": null,
            "concreteType": "Mark",
            "plural": true,
            "selections": [
              v0,
              v1,
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "type",
                "args": null,
                "storageKey": null
              }
            ]
          },
          v0
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7fc8fa26f4e1b494ac5fe32f39ec1ec7';
module.exports = node;
