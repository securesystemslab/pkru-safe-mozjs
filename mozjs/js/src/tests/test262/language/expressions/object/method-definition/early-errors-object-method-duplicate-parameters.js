// |reftest| error:SyntaxError
// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Early error rules for StrictFormalParameters are applied
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
({
  async foo(a, a) { }
})
