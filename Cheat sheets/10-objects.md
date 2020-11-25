# Objects
-An object is a composite value: it aggregates multiple values (primitive values or other objects) and allows you to store and retrieve those values by name.
- An object is an unordered collection of properties, each of which has a name and a value.
- roperty names are usually **strings** or **Symbols**
- objects map strings to values
- This string-to-value mapping goes by various names “hash,” “hashtable,” “dictionary,” or “associative array”
- a JavaScript object also inherits the properties of another object, known as its **“prototype”**
- JavaScript objects are dynamic—properties can usually be added and deleted
- They can also be used (by ignoring the value part of the string-to-value mapping) to represent sets of strings.
- Any value in JavaScript that is not a string, a number, a Symbol, or true, false, null, or undefined is an object. And even though strings, numbers, and booleans are not objects, they can behave like immutable objects.
- **Objects** are mutable and manipulated by reference rather than by value.
- **If the variable x refers to an object and the code let y = x; is executed, the variable y holds a reference to the same object, not a copy of that object. Any modifications made to the object through the variable y are also visible through the variable x.**
- A **property** has a **name** and a **value**. A property name may be any string, including the empty string (or any Symbol), but no object may have two properties with the same name. The value may be any JavaScript value, or it may be a getter or setter function (or both).
- it is **important** to be able to distinguish between properties defined directly on an object and those that are inherited from a prototype object.
-Almost every JavaScript object has a second JavaScript object associated with it. This second object is known as a **prototype**, and the first object inherits properties from the **prototype**
- we can refer to this prototype object in JavaScript code as **Object.prototype**
- **toString()** is inherited from the Object.prototype

- There is one exception to the rule that a property assignment either fails or creates or sets a property in the original object. If o inherits the property x, and that property is an accessor property with a setter method (see §6.10.6), then that setter method is called rather thancreating a new property x in o. Note, however, that the setter method is called on the object o, not on the prototype object that defines the property, so if the setter method defines any properties, it will do so on o, and it will again leave the prototype chain unmodified.

- Built-in methods that objects inherit are not enumerable, but the properties that your code adds to objects are enumerable by default.



# Object create
1.  an object literal is a comma-separated list of colon-separated name:value pairs, enclosed within curly braces.
**let book = {**
"main title": "JavaScript",
"sub-title": "The Definitive Guide",
for: "all audiences",
author: {
    firstname: "David",
    surname: "Flanagan"
}
**};**

2. The **new** operator creates and initializes a new object. The **new** keyword must be followed by a function invocation. A function used in this way is called a constructor and serves to initialize a newly created object.

let o = new Object()
let a = new Array();
let d = new Date();
let r = new Map();

3. Object.create() creates a new object, using its first argument as the prototype of that object

> let o1 = Object.create({x: 1, y: 2}); // o1 inherits properties x and y.
>
> o1.x + o1.y

> **let o3 = Object.create(Object.prototype);** // o3 is like {} or new Object(). amd inherit the prototype

# Deletig properties
- The delete operator removes a property from an object. Its single operand should be a property access expression. Surprisingly, delete does not operate on the value of the property but on the property itself: **delete book.author;**
- The delete operator only deletes own properties, not inherited ones.
- A delete expression evaluates to true if the delete succeeded or the delete had no effect

# Testing properties
check whether an object has a property with a given name.
1. **in** operator => The in operator expects a property name on its left side and an object on its right. It returns true if the object has an own property or an inherited property by that name: **"x" in objectBlah;**

2. **hasOwnProperty()** method of an object tests whether that object has an own property with the given name. It returns false for inherited properties: objectBlah.hasOwnProperty("x")

3. **propertyIsEnumerable()** It returns true only if the named property is an own property and its enumerable attribute is true.

**let o** = { x: 1 };
**o.propertyIsEnumerable("x")** // => true: o has an own enumerable property x
**o.propertyIsEnumerable("toString")** // => false: not an own property
**Object.prototype.propertyIsEnumerable("toString")** // => false: not enumerable

4. Instead of using the in operator, it is often sufficient to simply query the property and use **!==** to make sure it is not undefined: o.x !== undefined; 

*in can distinguish between properties that do not exist and properties that exist but have been set to undefined.*


# fail to set a property
An attempt to set a property p of an object o fails in these circumstances:
1. o has an own property p that is read-only: it is not possible to set read-only properties.
2. o has an inherited property p that is read-only: it is not possible to hide an inherited read-only property with an own property of the same name.
3. o does not have an own property p; o does not inherit a property p with a setter method, and o’s extensible attribute is false. Since p does not already exist in o, and if there is no setter method to call, then p must be added to o. But if o is not extensible, then no new properties can be defined on it.

# Object Methods 
*As discussed earlier, all JavaScript objects (except those explicitly created without a prototype) inherit properties from Object.prototype. These inherited properties are primarily methods, and because they are universally available, they are of particular interest to JavaScript programmers.*


- **Object.keys()** returns an array of property names of the enumerable own properties of an object. It does not include non-enumerable properties, inherited properties, or properties whose name is a Symbol
- **Object.getOwnPropertyNames()** works like Object.keys() but returns an array of the names of non-enumerable own properties as well, as long as their names are strings.
- **Object.getOwnPropertySymbols()** returns own properties whose names are Symbols, whether or not they are enumerable.
- **Reflect.ownKeys()** returns all own property names, both enumerable and non-enumerable, and both string and Symbol.


- **Object.assign()** expects two or more objects as its arguments. It **modifies** and **returns** the **first argument**, which is the **target** object, but does not alter the **second** or any subsequent arguments, which are the source objects. For each source object, it copies the enumerable own properties of that object (including those whose names are Symbols) into the target object. It processes the source objects in argument list order so that properties in the first source object override properties by the same name in the target object and properties in the second source object (if there is one) override properties with the same name in the first source object.
> Object.assign(o, defaults); // overwrites everything in o with defaults
> o = Object.assign({}, defaults, o); //create a new object, copy the defaults into it, and then override those defaults with the properties in o

- **toString()** method takes no arguments; it returns a string that somehow represents the value of the object on which it is invoked.
- **toLocaleString()** The purpose of this method is to return a localized string representation of the object.
- The **valueOf()** method is much like the toString() method, but it is called when JavaScript needs to convert an object to some primitive type other than a string—typically, a number
- **toJSON()** JSON.stringify() method looks for a **toJSON()** method on any object it is asked to serialize. If this method exists on the object to be serialized, it is invoked, and the return value is serialized, instead of the original object


- **JSON.parse()**
- **JSON.stringify()** 

- **Object.entries()** returns an array of arrays, where each inner array represents a key/value pair for one property of the object. We use destructuring assignment in this code example to unpack those inner arrays into two individual variables.
- **Object.values()** to get the values

for(let v of Object.values(o)) {
sum += v;
}
for(let k of Object.keys(o)) {
keys += k;
}
for(let [k, v] of Object.entries(o)) {
pairs += k + v;
}


# Serializing Objects 
- Object serialization is the process of converting an object’s state to a string from which it can later be restored.
- The functions **JSON.stringify()** and **JSON.parse()** serialize and restore JavaScript objects.
- NaN, Infinity, and -Infinity are serialized to null.
- Date objects are serialized to ISO-formatted date strings (see the **Date.toJSON()** function)
- but **JSON.parse()** leaves these in string form and does not restore the original Date object
- Function, **RegExp**, and **Error** objects and the **undefined** value cannot be serialized or restored.
- **JSON.stringify()** serializes only the enumerable own properties of an object
- Both **JSON.stringify()** and **JSON.parse()** accept optional second arguments that can be used to customize the serialization and/or restoration process by specifying a list of properties to be serialized, for example, or by converting certain values during the serialization orstringification process.

# shorthand
in ES6 and later, you can drop the colon and one copy of the identifier and end up with much simpler code:

> let x = 1, y = 2;
> let o = { x, y };
> o.x + o.y // => 3

with an ES6 feature
known as computed properties that lets you take the square brackets from the preceding code and move them directly into the object literal:
> const PROPERTY_NAME = "p1";
> function computePropertyName() { return "p" + 2; }
> let p = {
>   [PROPERTY_NAME]: 1,
>   [computePropertyName()]: 2
> };
> p.p1 + p.p2 // => 3


# Symbols
The point of Symbols is not security, but to define a safe extension mechanism for JavaScript objects. If you get an object from third-party code that you do not control and need to add some of your own properties to that object but want to be sure that your properties will not conflict with any properties that may already exist on the object, you can safely use Symbols as your property names. If you do this, you can also be confident that the third-party code will not accidentally alter your symbolically named properties. (That third-party code could, of course, use Object.getOwnPropertySymbols() to discover the Symbols you’re using and could then alter or delete your properties. This is why Symbols are not a security mechanism.)

# Spread Operator 
- you can copy the properties of an existing object into a new object using the “spread operator” ... inside an object literal:
> let position = { x: 0, y: 0 };
> let dimensions = { width: 100, height: 75 };
> let rect = { ...position, ...dimensions };
> rect.x + rect.y + rect.width + rect.height // => 175

- If the object that is spread and the object it is being spread into both have a property with the same name, then the value of that property will be the one that comes last:
> let o = {x:1}
> let p = {x:0, ...o}
> p.x //=> 1
> let q = {...o, x:2}
> q.x //=> 2

- the spread operator only spreads the own properties of an object, not any inherited ones
> let o = Object.create({x: 1}); // o inherits the property x
> let p = { ...o };
> p.x // => undefined

- Finally, it is worth noting that, although the spread operator is just three little dots in your code, it can represent a substantial amount of work to the JavaScript interpreter. If an object has n properties, the process of spreading those properties into another object is likely to bean O(n) operation. This means that if you find yourself using ... within a loop or recursive function as a way to accumulate data into one large object, you may be writing an inefficient O(n 2 ) algorithm that will not scale well as n gets larger.

# Getter and Setter
- When a program queries the value of an accessor property, JavaScript invokes the **getter** method (passing no arguments). The return value of this method becomes the value of the property access expression. 
- When a program sets the value of an accessor property, JavaScript invokes the **setter** method, passing the value of the righthand side of the assignment. This method is responsible for **“setting”** in some sense, the property value. The return value of the setter method is ignored.

> let o = {
> // An ordinary data property
>       dataProp: value,
> // An accessor property defined as a pair of functions.
>        get accessorProp() { return this.dataProp; },
>        set accessorProp(value) { this.dataProp = value; }
> };
