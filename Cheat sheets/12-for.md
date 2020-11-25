# For

## for of
- The for/of loop works with iterable objects.
- arrays, strings, sets, and maps are iterable: they represent a sequence or set of elements that you can loop or iterate through using a for/of loop

> let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;
> for(let element of data) {
> sum += element;
> }

- Attempting to use for/of on a regular **object** throws a TypeError at runtime
- for object you can use **for/in**
- or **for/of** with **Object.keys()** method or with **Object.values()** or **Object.entries**


## for of in strings 
let frequency = {};
for(let letter of "mississippi") {
if (frequency[letter]) {
frequency[letter]++;
} else {
frequency[letter] = 1;
}
}
-  Note that strings are iterated by Unicode codepoint, not by UTF-16 character. The string “I ❤ cat” has a .length of 5 (because the two emoji characters each require two UTF-16 characters to represent). But if you iterate that string with for/of, the loop body will run three times, once for each of the three code points “I”, “❤”, and “cat.”
- 

## for in 
- for/in loop works with any object after the in
- for (variable in object)
- The for/in loop does not actually enumerate all properties of an object. 
- It does not enumerate properties whose names are symbols.
- And of the properties whose names are strings, it only loops over the enumerable properties


you can use code like the following to copy the names of all object properties into an array:
let o = { x: 1, y: 2, z: 3 };
let a = [], i = 0;
for(a[i++] in o){}

