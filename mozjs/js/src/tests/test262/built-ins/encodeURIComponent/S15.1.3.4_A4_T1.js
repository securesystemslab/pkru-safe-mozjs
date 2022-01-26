// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: URI tests
es5id: 15.1.3.4_A4_T1
es6id: 18.2.6.5
esid: sec-encodeuricomponent-uricomponent
description: Checking ENGLISH ALPHABET
---*/

//CHECK#1
if (encodeURIComponent("http://unipro.ru/0123456789") !== "http%3A%2F%2Funipro.ru%2F0123456789") {
  $ERROR('#1: http://unipro.ru/0123456789');
}

//CHECK#2
if (encodeURIComponent("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ") !== "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ") {
  $ERROR('#2: aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ');
}

//CHECK#3
if (encodeURIComponent(";/?:@&=+$,") !== "%3B%2F%3F%3A%40%26%3D%2B%24%2C") {
  $ERROR('#3: ');
}

reportCompare(0, 0);
