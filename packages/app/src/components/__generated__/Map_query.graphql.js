/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Map_query$ref: FragmentReference;
export type Map_query = {|
  +builds: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
    +mark: ?{|
      +latitude: ?string,
      +longitude: ?string,
    |},
  |}>,
  +path: ?{|
    +marks: ?$ReadOnlyArray<?{|
      +id: string,
      +latitude: ?string,
      +longitude: ?string,
      +type: ?string,
    |}>
  |},
  +$refType: Map_query$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
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
  "kind": "Fragment",
  "name": "Map_query",
  "type": "Query",
  "metadata": null,
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
            v2
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
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fcdfc642dee32120e36f4d74ed24f489';
module.exports = node;
