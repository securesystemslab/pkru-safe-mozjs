// This file was procedurally generated from the following sources:
// - src/annex-b-fns/func-block-scoping.case
// - src/annex-b-fns/func/switch-case.template
/*---
description: A block-scoped binding is created (Function declaration in the `case` clause of a `switch` statement in function scope)
esid: sec-web-compat-functiondeclarationinstantiation
es6id: B.3.3.1
flags: [generated, noStrict]
info: |
    13.2.14 Runtime Semantics: BlockDeclarationInstantiation

    [...]
    4. For each element d in declarations do
       a. For each element dn of the BoundNames of d do
          i. If IsConstantDeclaration of d is true, then
             [...]
          ii. Else,
              2. Perform ! envRec.CreateMutableBinding(dn, false).

       b. If d is a GeneratorDeclaration production or a FunctionDeclaration
          production, then
          i. Let fn be the sole element of the BoundNames of d.
          ii. Let fo be the result of performing InstantiateFunctionObject for
              d with argument env.
          iii. Perform envRec.InitializeBinding(fn, fo). 
---*/
var initialBV, currentBV, varBinding;

(function() {
  

  switch (1) {
    case 1:
      function f() { initialBV = f; f = 123; currentBV = f; return 'decl'; }
  }

  varBinding = f;
  f();
}());


assert.sameValue(
  initialBV(),
  'decl',
  'Block-scoped binding value is function object at execution time'
);
assert.sameValue(currentBV, 123, 'Block-scoped binding is mutable');
assert.sameValue(
  varBinding(),
  'decl',
  'Block-scoped binding is independent of outer var-scoped binding'
);

reportCompare(0, 0);
