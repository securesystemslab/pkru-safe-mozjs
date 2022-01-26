// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2018 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Balinese`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v11.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x001B00, 0x001B4B],
    [0x001B50, 0x001B7C]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Balinese}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Balinese}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Bali}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Bali}"
);
testPropertyEscapes(
  /^\p{scx=Balinese}+$/u,
  matchSymbols,
  "\\p{scx=Balinese}"
);
testPropertyEscapes(
  /^\p{scx=Bali}+$/u,
  matchSymbols,
  "\\p{scx=Bali}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x001AFF],
    [0x001B4C, 0x001B4F],
    [0x001B7D, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Balinese}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Balinese}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Bali}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Bali}"
);
testPropertyEscapes(
  /^\P{scx=Balinese}+$/u,
  nonMatchSymbols,
  "\\P{scx=Balinese}"
);
testPropertyEscapes(
  /^\P{scx=Bali}+$/u,
  nonMatchSymbols,
  "\\P{scx=Bali}"
);

reportCompare(0, 0);
