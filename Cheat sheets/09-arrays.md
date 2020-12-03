# Arrays

- An array is an ordered collection of values. Each value is called an element, and each element has a numeric position in the array, known as its index.
- JavaScript arrays are untyped: an array element may be of any type, and different elements of the same array may be of different types.
- Array elements may even be objects or other arrays, which allows you to create complex data structures, such as arrays of objects and arrays of arrays.
- JavaScript arrays are zero-based and use 32-bit indexes
- JavaScript arrays may be sparse: the elements need not have contiguous indexes, and there may be gaps
- Every JavaScript array has a length property
- For nonsparse arrays, this property specifies the number of elements in the array. For sparse arrays, length is larger than the highest index of any element.
- Undefined elements can be included in an array literal by simply omitting a value between commas. For example, the following array contains five elements, including three undefined elements: **let sparseArray = [1,,,,5];**
- access to numerically indexed array elements is generally significantlyfaster than access to regular object properties.
- “typed arrays.” Unlike regular JavaScript arrays, typed arrays have a fixed length and a fixed numeric element type.
- You access an element of an array using the [] operator

# iterating over an array 
## for/of
- the easiest way to **loop through each of the elements** of an array (or any iterable object) is with the **for/of** loop

- If you want to use a for/of loop for an array and need to know the index of each array element, use the **entries()** method of the array,along with destructuring assignment
> let everyother = "";
> for(let [index, letter] of letters.entries()) {
> if (index % 2 === 0) everyother += letter; // letters at even indexes
> }
> everyother // => "Hlowrd"

## forEach()
- an array method that offers a functional approach to array iteration
- You pass a function to the forEach() method of an array, and forEach() invokes your function once on each element of the array
> let uppercase = "";
> letters.forEach(letter => { // Note arrow function syntax here
> uppercase += letter.toUpperCase();
> });
> uppercase // => "HELLO WORLD"
>
- forEach() iterates the array in order, and it actually passes the array index to your function as a second argument, which is occasionally useful.
- forEach() is aware of sparse arrays and does not invoke your function for elements that are not there.

# Multidimensional arrays
- JavaScript does not support true multidimensional arrays, but you can approximate them with arrays of arrays
- To access a value in an array of arrays, simply use the [] operator twice.
- For example, suppose the variable matrix is an array of arrays of numbers. Every element in matrix[x] is an array of numbers. To access a particular number within this array, you would write matrix[x][y]

Multiplication table Example:
// Create a multidimensional array
> let table = new Array(10); // 10 rows of the table
>
> for(let i = 0; i < table.length; i++) {
>    table[i] = new Array(10);}
// each row has 10 columns

// Initialize the array
> for(let row = 0; row < table.length; row++) {
>   for(let col = 0; col < table[row].length; col++) { table[row][col] = row*col; } 
> }
> table[5][7] //=> 35





# Creating Arrays
## Array literals
- a comma-separated list of array elements within square brackets.
> let empty = [];
>
> let primes = [2, 3, 5, 7, 11];
>
> let misc = [ 1.1, true, "a", ];
>
> let base = 1024;
> let table = [base, base+1, base+2, base+3];
>
> let b = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]];

## Spread operator 
- In ES6 and later, you can use the “spread operator,” ..., to include the elements of one array within an array literal:
> let a = [1, 2, 3];
> 
> let b = [0, ...a, 4];

- The spread operator is a convenient way to create a (shallow) copy of an array:
> let original = [1,2,3];
> let copy = [...original];
> copy[0] = 0; // Modifying the copy does not change the original
> original[0] // => 1

- The spread operator works on any iterable object. Strings are iterable, so you can use a spread operator to turn any string into an array of single-character strings:
> let digits = [..."0123456789ABCDEF"];
> digits // => ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

## Array constructor 
- **let a = new Array();** This method creates an empty array with no elements and is equivalent to the array literal [].
- **let a = new Array(10);** This technique creates an array with the specified length (=10).
- **let a = new Array(5, 4, 3, 2, 1,"testing, testing");** In this form, the constructor arguments become the elements of the new array

- When the Array() constructor function is invoked with one numeric argument, it uses that argument as an array length. But when invoked with more than one numeric argument, it treats those arguments as elements for the array to be created. This means that the Array() constructor cannot be used to create an array with a single numeric element.

## Array.of()
- it is a factory method that creates and returns a new array, using its argument values (regardless of how many of them there are) as the array elements
> Array.of() // => []; returns empty array with no arguments
>
> Array.of(10) // => [10]; can create arrays with a single numeric argument
> 
> Array.of(1,2,3) // => [1, 2, 3]

## Array.from()
- array factory method introduced in ES6. It expects an iterable or array-like object as its first argument and returns a new array that contains the elements of that object.
- It is also a simple way to make a copy of an array
> let copy = Array.from(original);
>
> let truearray = Array.from(arraylike);

- Array.from() also accepts an optional second argument. If you pass a function as the second argument, then as the new array is being built, each element from the source object will be passed to the function you specify, and the return value of the function will be stored in the array instead of the original value.

# Sparse Arrays
- sparse array is one in which the elements do not have contiguous indexes starting at 0. 
- the length property of an array specifies the number of elements in the array. If the array is sparse, the value of the length property is greater than the number of elements. Sparse arrays can be created with the Array() constructor or simply by assigning to an array index larger than the current array length.
> let a = new Array(5); // No elements, but a.length is 5.
>
> a = []; // Create an array with no elements and length = 0
>
> a[1000] = 0; // Assignment adds one element but sets length to 1001

# Array Method

**some of them modify the array they are called on and some of them leave the array unchanged. A number of the methods return an array: sometimes, this is a new array, and the original is unchanged. Other times, a method will modify the array in place and will also return a reference to the modified array**

## Array iterator Methods
loop over the elements of an array, typically invoking a function that you specify on each of those elements.

- all of these methods accept a **function** as their first argument and invoke that function once for each **element** (or some elements) of the array. 
- If the array is **sparse**, the function you pass is **not invoked** for nonexistent elements. 
- In most cases, the function you supply is invoked with three arguments: 
1. the value of the array element, 
2. the index of the array element, and 
3. the array itself. 
Often, you only need the first of these argument values and can ignore the second and third values.

- Most of the iterator methods described in the following subsections accept an optional second argument. 
- If specified, the function is invoked as if it is a method of this second argument. That is, the second argument you pass becomes the value of the **this** keyword inside of the function you pass as the first argument. 
- The return value of the function you pass is usually important, but different methods handle
the return value in different ways. 
- None of the methods described here modify the array on which they are invoked (though the function you pass can modify the array, of course).

### forEach()
- The forEach() method iterates through an array, invoking a function you specify for each element
- you pass the function as the first argument to forEach(). forEach() then invokes your function with three arguments: the value of the array element, the index of the array element, and the array itself. If you only care about the value of the array element, you can write a function with only one parameter—the additional arguments will be ignored
> let data = [1,2,3,4,5], sum = 0;
> data.forEach(value => { sum += value; }); //sum == 15
> data.forEach(function(v, i, a) { a[i] = v + 1; }); //data = [2,3,4,5,6]

- Note that forEach() does not provide a way to terminate iteration before all elements have been passed to the function. That is, there is no equivalent of the break statement you can use with a regular for loop.

### map()
- The map() method passes each element of the array on which it is invoked to the function you specify and **returns an array** containing the values returned by your function.
- the function you pass should return a value
- **map() returns a new array**: it does not modify the array it is invoked on
- If that array is sparse, your function will not be called for the missing elements, but the returned array will be sparse in the same way as the original array: it will have the same length and the same missing elements.

> let a=[1,2,3];
> a.map( x => x*x) // [1, 4, 9] a new array is returned

### filter()
- The filter() method returns an array containing a subset of the elements of the array on which it is invoked.
- The function you pass to it **should** be predicate: a function that **returns true or false**.
- If the return value is true, or a value that converts to true, then the element passed to the predicate is a member of the subset and is added to the array that will become the return value

> let a = [5, 4, 3, 2, 1];
> a.filter(x => x < 3) // => [2, 1]; values less than 3
> a.filter((x,i) => i%2 === 0) // => [5, 3, 1]; every other value

- filter() skips missing elements in sparse arrays and that its return value is always dense. To close the gaps in a sparse array, you can do this: **let dense = sparse.filter(() => true);**
- to close gaps and remove undefined and null elements, you can use filter, like this: **a = a.filter(x => x !== undefined && x !== null);**

### find() and findIndex()
- The find() and findIndex() methods are like filter() in that they iterate through your array looking for elements for which your predicate function returns a truthy value
- these two methods stop iterating the first time the predicate finds an element
- **find()** returns the matching element
- **findIndex()** returns the index of the matching element
- If no matching element is found, **find()** returns undefined and **findIndex()** returns -1:
> let a =[1,2,3,4,5];
> a.findIndex(x=>x===3) //=> 2; the value 3 appears at index 2
> a.findIndex(x=>x<0) //=> -1; no negative numbers in the array 
> a.find(x=>x%5===0) //=> 5: this is a multiple of 5
> a.find(x=>x%7 ===0) //=> undefined: no multiple of 7 in the array

### every() and some()
- The **every()** and **some()** methods are array predicates: they apply a predicate function you specify to the elements of the array, then **return true or false**.
- The **every()** method is like the mathematical “for all” quantifier ∀: it **returns true** **if** and only if your predicate **function returns true forall elements** in the array:
> let a = [1,2,3,4,5]
> a.every(x=>x<10>) //=>true
> a.every(x=>x%2===0) //=> false

- The **some()** method is like the mathematical “there exists” quantifier ∃: it **returns true if** there exists **at least one element** in the array for which the predicate **returns true** and **returns false if** and only if the predicate **returns false for all elements** of the array
> let a = [1,2,3,4,5];
> a.some(x=>x%2===0) //=>true
> a.some(isNaN) //false
- both every() and some() stop iterating array elements as soon as they know what value to return
- **some()** returns true the first time your predicate returns <code>true</code> and only iterates through the entire array if your predicate always returns false.
- **every()** returns false the first time your
predicate returns false and only iterates all elements if your predicate always returns true.
- **every()** returns true and **some()** returns false when invoked on an **empty array**.

### reduce() and reduceRight()
- The **reduce() and reduceRight()** methods combine the elements of an array, using the function you specify, to produce a **single value**.
- **reduce()** takes two arguments:
    1. the function that performs the reduction operation.
    2. an initial value to pass to the function
    - The familiar value, index, and array values are passed as the second, third, and fourth arguments.
    - When you invoke reduce() like this with no initial value, it uses the first element of the array as the initial value.
    - Calling reduce() on an empty array with no initial value argument causes a TypeError. If you call it with only one value—either an array with one element and no initial value or an empty array and an initial value—it simply returns that one value without ever calling the reduction function.
> let a = [1,2,3,4,5];
> a.reduce((x,y) => x+y, 0) //=> 15; sum
> a.reduce((x,y) => x*y, 1) //=> 120; product of values
> a.reduce((x,y) => (x > y) ? x : y) //=> 5; the largest of the values

- **reduceRight()** works just like reduce(), except that it processes the array from highest index to lowest (right-to-left), rather than from lowest to highest
> let a = [2, 3, 4];
> a.reduceRight((acc,val) => Math.pow(val,acc)) //=> 2.4178516392292583e+24

- Any function that can combine two values (such as two objects) into one value of the same type can be used as a reduction function.

## flat() and flatMap()
- the **flat()** method creates and returns a new array that contains the same elements as the array it is called on, except that any elements that are themselves arrays are “flattened” into the returned array.
- When called with no arguments, flat() flattens one level of nesting.
- If you want to flatten more levels, pass a number to flat()
>  [1, [2, 3]].flat() // => [1, 2, 3]
> [1, [2, [3]]].flat() // => [1, 2, [3]]
>  let a = [1,[2, [3, [4]]]];
> a.flat(1) // => [1, 2, [3, [4]]]
> a.flat(2) // => [1, 2, 3, [4]]
> a.flat(3) // => [1, 2, 3, 4]
> a.flat(4) // => [1, 2, 3, 4]

- The **flatMap()** method works just like the map() method, except that the returned array is automatically flattened as if passed to flat()
> let phrases = ["hello world", "the definitive guide"];
> let words = phrases.flatMap(phrase => phrase.split(" "));
> words // => ["hello", "world", "the", "definitive", "guide"];

## conact()
- The **concat()** method **creates and returns a new array** that contains the elements of the original array on which concat() was invoked, followed by each of the arguments to concat()
- If any of these arguments is itself an array, then it is the array elements that are concatenated, not the array itself. Note, however, that concat() does not recursively flatten arrays of arrays.
- **concat() does not modify the array on which it is invoked**
- concat() makes a new copy of the array it is called on
> let a = [1,2,3,4];
> a.concat(4,5); //=> [1,2,3,4,5]
> a.concat([4,5],[6,7]); //=> [1,2,3,4,5,6,7]
> a.concat(4,[5, [6,7]]); //=> [1,2,3,4,5,[6,7]]
> a //=> [1,2,3,4]

## Stacks and Queues with push() pop() shift() unshift()
Stack and queue methods add and remove array elements to and from the beginning and the end of an array.

### push()
- **push()** method is used to add (append) **one or more** elements (values) to the end of an array and **returns** the new length of the array
- The **push()** method does not flatten an array you pass to it, but if you want to push all of the elements from one array onto another array, you can use the spread operator to flatten it explicitly: **a.push(...values);**

### pop()
- **pop()** method is the opposite of push(): it removes the last element of the array and **returns** it, reducing the length of an array by 1

### unshift()
- **unshift()** method is used to insert a value at the beginning of an array, shifting the existing array elements to higher indexes and **returns** the new length of the array.
- When passing multiple arguments to unshift(), they are inserted all at once, which means that they end up in the array in a different order than they would be if you inserted
them one at a time

### shift()
- **shift()** method removes and **returns** the first element of the array, reducing the length by 1 and shifting all elements down to an index one lower than their current index.

## SubArrays
Subarray methods are for extracting, deleting, inserting, filling, and copying contiguous regions of a larger array.
### slice() 
- **slice()** method returns a slice, or subarray, of the specified array.
- Its two arguments specify the start and end of the slice to be returned. The **returned array** contains the element specified by the first argument and all subsequent elements up to, but not including, the element specified by the second argument.
- argument could be negative => -1 is the last element in the array 
- **slice()** does not modify the array on which it is invoked
> let a = [1,2,3,4,5];
> a.slice(0,3); // Returns [1,2,3]
> a.slice(3); // Returns [4,5]
> a.slice(1,-1); //Returns [2,3,4]
> a.slic(-3,-2); //Returns [3]

### splice() 
- **splice()** is a general-purpose method for inserting or removing elements from an array
- **splice() modifies the array on which it is invoked**
- **splice()** can delete elements from an array, insert new elements into an array, or perform both operations at the same time.
    1. The first argument to splice() specifies the array position at which the insertion and/or deletion is to begin. 
    2. The second argument specifies the number of elements that should be deleted from (spliced out of) the array. **it is an end position**
    3. The first two arguments to splice() specify which array elements are to be deleted. 
    4. These arguments may be followed by any number of additional arguments that specify elements to be inserted into the array, starting at the position specified by the first argument.
- splice() **returns an array of the deleted elements**, or an empty array if no elements were deleted.
> let a = [1,2,3,4,5,6,7,8];
> a.splice(4); //=> [5,6,7,8] a is now [1,2,3,4]
> a.splice(1,2); //=> [2,3] a is now [1,4]
> a.splice(1,1); //=> [4] a is now [1]

> let b = [1,2,3,4,5];
> b.splice(2,0,'a', 'b'); //=> [] b is now [1,2,'a', 'b', 3,4,5]
> b.splice(2,2,[1,2],3); //=> ['a','b'] b is now [1,2,[1,2],3,3,4,5]

- **splice()** inserts arrays themselves,
not the elements of those arrays

### fill() 
- **fill()** method sets the elements of an array, or a slice of an array, to a specified value
- It **mutates** the array it is called on, and also **returns** the modified array
> let a = new Array(5);
> a.fill(0); //=> [0,0,0,0,0]
> a.fill(9,1); //=> [0,9,9,9,9]
> a.fil(8,2,-1); //=> [0,9,8,8,9]
- **fill()** arguments:
    1. the first argument is the value to set array elements to 
    2. the optional second argument specifies the starting index; if omitted, filling starts at index 0.
    3. the optional third argument specifies the ending index-array elements up to, but not including this index will be filled; if omitted, then the array is filled from the start index to the end 

### copyWithin()
- **copyWithin()** copies a slice of an array to a new position within the array
- it **modifies** the array in place and **returns** the modified array, but it will not change the length of the array
    1. The first argument specifies the destination index to which the first element will be copied. 
    2. The second argument specifies the index of the first element to be copied. If this second argument is omitted, 0 is used. 
    3. The third argument specifies the end of the slice of elements to be copied. If omitted, the length of the array is used.
> let a = [1,2,3,4,5];
> a.copyWithin(1); //=> [1,1,2,3,4]
> a.copyWithin(2,3,5) //=> [1,1,3,4,4]
> a.copyWithin(0,-2); //=> [4,4,3,4,4]

## Searching and sorting 
Searching and sorting methods are for locating elements within an array and for sorting the elements of an array.
### indexOf() and lastIndexOf()
- indexOf() and lastIndexOf() search an array for an element with a specified value and **return** the **index** of the first such element found, or -1 if none is found. 
- indexOf() searches the array from beginning to end
- lastIndexOf() searches from end to beginning
    1. first argument is the element to search 
    2. an optional second argument that specifies the array index at which to begin the search. If this argument is omitted, indexOf() starts at the beginning and lastIndexOf() starts at the end. Negative values are allowed for the second argument and are treated as an offset from the end of the array
- indexOf() will not detect the NaN value in an array 

### includes()
- **includes()** method takes a single argument and **returns** true if the array contains that value or false otherwise.
- It does not tell you the index of the value,
- it only tell you whether it exists or not.
- includes() will detect the NaN value in an array 
> let a = [1,true,3,NaN];
> a.includes(true); //=> true
> a.includes(2); //=> false
> a.includes(NaN); //=> trure
> a.indexOf(NaN); //=> -1; indexOf can't find NaN

### sort()
- sorts the elements of an array in place and returns the sorted array.
- When sort() is called with no arguments, it sorts the array elements in alphabetical order (temporarily converting them to strings to perform the comparison, if necessary)
- If an array contains undefined elements, they are sorted to the end of the array

> let a = ["banana", "cherry", "apple"];
> a.sort(); // a == ["apple", "banana", "cherry"]

- To sort an array into some order other than alphabetical, you must pass a comparison function as an argument to sort()
    1. **if the first argument should appear before the second, the comparison function should return a number less than zero**
    2. **if the first argument should appear after the second in the sorted array, the function should return a number greater than zero**
    3.**And if the two values are equivalent (i.e, if their order is irrelevant), the comparison function should return 0.**

> let a = [33, 4, 1111, 222];
> a.sort(); // a == [1111, 222, 33, 4];alphabetical order
> a.sort(function(a,b) {
     // Pass a comparator function
> return a-b; // Returns < 0, 0, or > 0, depending on order
> }); // a == [4, 33, 222, 1111]; numerical order
> a.sort((a,b) => b-a); // a == [1111, 222, 33, 4]; reverse numerical order


> let a = ["ant", "Bug", "cat", "Dog"];
> a.sort(); // a == ["Bug","Dog","ant","cat"]; case- sensitive sort
> a.sort(function(s,t) {
> let a = s.toLowerCase();
> let b = t.toLowerCase();
> if (a < b) return -1;
> if (a > b) return 1;
> return 0;
> });// a == ["ant","Bug","cat","Dog"]; case-insensitive sort

### reverse()
-  The **reverse()** method reverses the order of the elements of an array and returns the reversed array.
- it doesn’t create a new array with the elements rearranged but instead rearranges them in the already existing array
> let a = [1,2,3];
> a.reverse(); // a == [3,2,1]

## Array to String 
### JSON.stringify 
- serialize the array if you want to save the contents of an array in textual form for later reuse 
### join()
- The join() method converts all the elements of an array to strings and concatenates them, **returning** the resulting string
- You can specify an optional string that separates the elements in the resulting string.
- If no separator string is specified, a comma is used
- The join() method is the inverse of the String.split() method, which creates an array by breaking a string into pieces.

> let a = [1, 2, 3];
> a.join() //=>"1,2,3"
> a.join(" ") //=>"1 2 3"
> a.join("") //=>"123"
> let b = new Array(10);
> b.join("-") //=>"---------":a string of 9 hyphens

### toString()
- this method works just like the join() method with no arguments
> [1,2,3].toString() // => "1,2,3"
> ["a", "b", "c"].toString() // => "a,b,c"
> [1, [2,"c"]].toString() // => "1,2,c"

## isArray()
- isArray() is a static array function which is useful for determining whether an unknown value is an array or not 
> Array.isArray([]) //=> true
> Array.isArray({}) //=> false

## length property 

- **[].length** => the length **property** (not method) specifies the number of elements in the array => **if you set the length property to a non- negative integer n smaller than its current value, any array elements whose index is greater than or equal to n are deleted from the array:**
> a = [1,2,3,4,5];
> a.length = 3; //a is now [1,2,3].
> a.length = 0; //Delete all elements. a is [].
> a.length = 5; //Length is 5, but no elements, like

- You can **delete** array elements with the **delete** operator, just as you can delete object properties: **delete a[2];** => Note that using delete on an array element does not alter the length property and does not shift elements with higher indexes down to fill in the gap that is left by the deleted property. If you delete an element from an array, the arraybecomes sparse.
