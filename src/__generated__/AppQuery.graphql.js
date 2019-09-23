/**
 * @flow
 * @relayHash 964ec18547989a10eb7a8bd7d3da2f95
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +characters: ?{|
    +info: ?{|
      +count: ?number
    |},
    +results: ?$ReadOnlyArray<?{|
      +name: ?string
    |}>,
  |},
  +character: ?{|
    +id: ?string
  |},
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  characters(page: 2, filter: {name: "rick"}) {
    info {
      count
    }
    results {
      name
      id
    }
  }
  character(id: 1) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "filter",
    "value": {
      "name": "rick"
    }
  },
  {
    "kind": "Literal",
    "name": "page",
    "value": 2
  }
],
v1 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "info",
  "storageKey": null,
  "args": null,
  "concreteType": "Info",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "count",
      "args": null,
      "storageKey": null
    }
  ]
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "character",
  "storageKey": "character(id:1)",
  "args": [
    {
      "kind": "Literal",
      "name": "id",
      "value": 1
    }
  ],
  "concreteType": "Character",
  "plural": false,
  "selections": [
    (v3/*: any*/)
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "characters",
        "storageKey": "characters(filter:{\"name\":\"rick\"},page:2)",
        "args": (v0/*: any*/),
        "concreteType": "Characters",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "results",
            "storageKey": null,
            "args": null,
            "concreteType": "Character",
            "plural": true,
            "selections": [
              (v2/*: any*/)
            ]
          }
        ]
      },
      (v4/*: any*/)
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "characters",
        "storageKey": "characters(filter:{\"name\":\"rick\"},page:2)",
        "args": (v0/*: any*/),
        "concreteType": "Characters",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "results",
            "storageKey": null,
            "args": null,
            "concreteType": "Character",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ]
          }
        ]
      },
      (v4/*: any*/)
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  characters(page: 2, filter: {name: \"rick\"}) {\n    info {\n      count\n    }\n    results {\n      name\n      id\n    }\n  }\n  character(id: 1) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9edc5ca45e0bc9f49920252895fdd880';
module.exports = node;
