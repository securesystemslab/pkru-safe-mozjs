// |reftest| skip -- numeric-separator-literal is not supported
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: >
  `0o` | `0O` OctalDigits NumericLiteralSeparator OctalDigit
info: |
  NumericLiteralSeparator ::
    _

  OctalIntegerLiteral ::
    0o OctalDigits
    0O OctalDigits

  OctalDigits ::
    OctalDigit
    OctalDigits OctalDigit
    OctalDigits NumericLiteralSeparator OctalDigit

  OctalDigit :: one of
    0 1 2 3 4 5 6 7

features: [numeric-separator-literal]
---*/

assert.sameValue(0o01_00, 0o0100);
assert.sameValue(0O01_00, 0O0100);

reportCompare(0, 0);
