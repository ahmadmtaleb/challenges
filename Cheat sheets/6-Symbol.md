# Symbol 

- Symbols were introduced in ES6 to serve as non-string property names
- Symbols can serve as property names in object 

object type is an unordered collection of properties, where each property has a name and a value

- let symname = Symbol("propname)
- To obtain a Symbol value, you call the **Symbol()** function.
- This function never returns the same value twice, even when called with the same argument.
- This means that if you call Symbol() to obtain a Symbol value, you can safely use that value as a property name to add a new property to an object and do not need to worry that you might be overwriting an existing property with the same name.
- The Symbol() function takes an optional string argument and returnsa unique Symbol value.
- If you supply a string argument, that string will be included in the output of the Symbol’s toString() method.
- **toString()** is the only interesting method of Symbol instances.
- The **Symbol.for()** function takes a string argument and returns a Symbol value that is associated with the string you pass. If no Symbol is already associated with that string, then a new one is created and returned; otherwise, the already existing Symbol is returned. That is, the Symbol.for() function is completely different than the Symbol() function: Symbol() never returns the same value twice, but Symbol.for() always returns the same value when called with the same string.
