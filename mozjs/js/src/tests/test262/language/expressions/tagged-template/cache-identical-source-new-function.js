// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-gettemplateobject
description: Template caching is by site, using identical expressions within `new Function`
info: >
    1. For each element _e_ of _templateRegistry_, do
      1. If _e_.[[Site]] is the same Parse Node as _templateLiteral_, then
        1. Return _e_.[[Array]].
---*/
function tag(templateObject) {
  previousObject = templateObject;
}
var a = 1;
var firstObject = null;
var previousObject = null;

tag`head${a}tail`;
firstObject = previousObject;
assert(firstObject !== null);
previousObject = null;

(new Function('tag', 'a', 'b', 'return tag`head${b}tail`;'))(tag, 1, 2);
assert.notSameValue(previousObject, firstObject);

reportCompare(0, 0);
