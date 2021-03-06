// |reftest| skip -- class-fields-public is not supported
// This file was procedurally generated from the following sources:
// - src/class-elements/ctor-called-after-fields-init.case
// - src/class-elements/default/cls-decl.template
/*---
description: The constructor method is called after the fields are initalized (field definitions in a class declaration)
esid: prod-FieldDefinition
features: [class-fields-public, class]
flags: [generated]
info: |
    [[Construct]] ( argumentsList, newTarget)

    8. If kind is "base", then
      a. Perform OrdinaryCallBindThis(F, calleeContext, thisArgument).
      b. Let result be InitializeInstanceFields(thisArgument, F).
      ...
    ...
    11. Let result be OrdinaryCallEvaluateBody(F, argumentsList).
    ...

---*/
var ctor;


class C {
  constructor() {
    ctor = this.foo;
  }
  foo = 42;
}

var c = new C();

assert.sameValue(ctor, 42);

reportCompare(0, 0);
