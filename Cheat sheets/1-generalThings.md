JavaScript types can be divided into two categories: **primitive** types and **object** types.
# primitive types
- Numbers
- Strings
- Boolean
- Null
- Undefined
- Symbol 

# Object types
Any JavaScript value that is not a number, a string, a boolean, a symbol, null, or undefined is an **object**. 
An **object** is a collection of properties where each property has a name and a value (either a primitive value or another object. 
- Global Object 
- Object => an unordered collection of named values
- array => an ordered collection of numbered values
- Set => a set of values
- Map => mapping from keys to values
- Typed array => facilitate operations on arrays of bytes and other binary data 
- RegExp => textual patterns and enables sophisticated matching, searching, and replacing operations on strings 
- Date => dates and times 
- Error => errors that can arise when executing JS code 
- Functions and Classes are a specialized kind of object 

# Automatic Garbage collection 
The JavaScript interpreter performs automatic garbage collection for memory management. This means that a JavaScript programmer generally does not need to worry about destruction or deallocation of objects or other values.

# Loosely
This means that rather than having globally defined functions to operate on value of various types, the types themselves define methods for working with values.

# Mutable vs Ummutable
Javascript's **Object** types are **mutable**
and its **primitive** types are **immutable**
**Strings** are **immutable**

# Conversion
JavaScript liberally converts values from one type to another. If a program expects a string, for example, and you give it a number, it will automatically convert the number to a string for you.

# Untyped
Javascript constants and variables are **untyped** => declarations do not specify what kind of values will be assigned 


- the fundamental difference in JS between primitive values and objects is that **Primitives are immutable** 
- Strings are immutable => all string methods that appear to return a modified string are returning a new string value 
- if two distinct string values are compared, JS treats them as **equal** **if** they have the same length and if the character at each index is the same 
- **Objects** are not compared by value => two distinct objects are not equal even if they have the same properties and values. 
- two distinct **Arrays** are not equal even if they have the same elements in the same order


- Objects are called **reference types**
- Object values are references, and we say that objects are compared by reference
- Two Object values are the same if and only if they refer to the same underlying object 

> let a = [];     | The variable a refers to an empty array.
> let b = a;      | Now b refers to the same array.
> b[0] = 1;       | Mutate the array referred to by variable b.
> a[0]            | => 1: the change is also visible through variable a.
> a === b         | => true: a and b refer to the same object, so they are equal.

- **Assigning an object (or array) to a variable** simply assigns the reference => it does not create a new copy of the object 
- if you want to make a new copy of an object or array, you must explicitly copy the propoerties of the object or the elements of the array.
like the following:
> let a = ["a", "b", "c"];
> let b = [];
> for(let i = 0; i < a.ength; i++){ b[i] = a[i];}
> let c = Array.from(b)

- In ESI, copy arrays with **Array.from()**

# Delete a variable 
- a declared variable can be deleted by **delete** 

# Variable scope
- The scope of a variable is the region of your program source code in which it is defined.
- Variables and constants declared with **let** and **const** are **block** scoped.
- JavaScript class and function definitions are blocks, and so are the bodies of if/else statements, while loops, for loops, and so on.
- When a declaration appears at the top level, outside of any code blocks, we say it is a global variable or constant and has global scope. 
- In Node and in client-side JavaScript modules, the scope of a global variable is the file that it is defined in. In traditional client-side JavaScript, however, the scope of a global variable is the HTML document in which it is defined.
- Variables declared with **var** do **not** have block scope. Instead, they are scoped to the body of the containing function no matter how deeply nested they are inside that function.
- If you use **var** outside of a function body, it declares a global variable
- Globals declared with var are implemented as properties of the **global object** which can be referenced as **globalThis**
- global variables and constants declared with **let** and **const** are **not** properties of the global object.
- It is a syntax error to use the same name with more than one **let** or **const** declaration in the same scope.
- it is legal to declare the same variable multiple times with **var**
- **var** variables have function scope instead of block scope
- **hoisting** => When a variable is declared with **var**, the declaration is lifted up (or **“hoisted”**) to the top of the enclosing function. The initialization of the variable remains where you wrote it, but the definition of the variable moves to the top of the function. So variables declared with **var** can be used, without error, anywhere in the enclosing function. If the initialization code has not run yet, then the value of the variable may be undefined, but you won’t get an error if you use the variable before it is initialized.

# Strict mode 
- In strict mode (§5.6.3), if you attempt to use an undeclared variable, you’ll get a reference error when you run your code.
- Outside of strict mode, however, if you assign a value to a name that has not been declared with let, const, or var, you’ll end up creating a new global variable. It will be a global no matter now deeply nested within functions and blocks your code is, which is almost certainly not what you want, is bug-prone, and is one of the best reasons for using strict mode!

# Destructuring
- In a **destructuring assignment**, the value on the righthand side of the equals sign is an array or object (a “structured” value), and the lefthand side specifies one or more variable names using a syntax that mimics array and object literal syntax.
- When a destructuring assignment occurs, one or more values are extracted (“destructured”) from the value on the right and stored into the variables named on the left.
- Here is a code that loops over the name/value pairs of all properties of an object and uses destructuring assignment to convert those pairs from two-element arrays into individual variables
>let o = { x: 1, y: 2 };
>
>for(const [name, value] of Object.entries(o)) {
>    
> console.log(name, value);}
>
- The number of variables on the left of a destructuring assignment does not have to match the number of array elements on the right. Extra variables on the left are set to undefined, and extra values on the right are ignored.
- If you want to collect all unused or remaining values into a single variable when destructuring an array, use three dots (...) before the last variable name on the left-hand side:
> let [x, ...y] = [1,2,3,4]; // y == [2,3,4]
>
- (...) are used to indicate that all remaining function arguments should be collected into a single array
- A powerful feature of array destructuring is that it does not actually require an array! You can use any iterable object on the righthand side of the assignment;
> let [first, ...rest] = "Hello"; // first == "H"; rest ==["e","l","l","o"]
- Destructuring assignment can also be performed when the righthand side is an object value. In this case, the lefthand side of the assignment looks something like an object literal: a comma-separated list of variable names within curly braces:
> let transparent = {r: 0.0, g: 0.0, b: 0.0, a: 1.0};
> 
> let {r, g, b} = transparent; // r == 0.0; g == 0.0; b == 0.0

> const {sin, cos, tan} = Math;
> Same as const sin=Math.sin, cos=Math.cos, tan=Math.tan
>
- If the lefthand side of this assignment had included a variable whose name was not a property of Math, that variable would simply be assigned undefined.
> const {value} = event sames as value = event.value
>
>
> const { cos: cosine, tan: tangent } = Math;
> Same as const cosine = Math.cos, tangent = Math.tan;

# Expressions and operators

- An expression is a phrase of JavaScript that can be evaluated to produce a value
- The most common way to build a complex expression out of simpler expressions is with an operator.
- An operator combines the values of its operands (usually two of them) in some way and evaluates to a new value.

# this
- **this** evaluates to the current object 
- it evaluates to different values in different places in the program
- The **this** keyword is used in object-oriented programming
-Within the body of a method, **this** evaluates to the object on which the method was invoked

# Property access expressions 
- A property access expression evaluates to the value of an object property or an array element. JavaScript defines two syntaxes for property access:
> expression . identifier
> expression [ expression ]
- if the expression on the
left evaluates to null or undefined. You can use ?. and ?.[] syntax to guard against errors of this type. like so,
> expression ?. identifier
> expression ?.[ expression ]

# && 
- This operator starts by evaluating its first operand, the expression on its left. If the  value on the left is falsy, the value of the entire expression must also be falsy, so && simply returns the value on the left and does not even evaluate the expression on the right.
- On the other hand, if the value on the left is truthy, then the overall value of the expression depends on the value on the righthand side.

# ||
- it starts by evaluating its first operand, the expression on its left. If the value of this first operand is truthy, it short-circuits and returns that truthy value without ever evaluating the expression on the right. If, on the other hand, the value of the first operand is falsy, then || evaluates its second operand and returns the value of that expression.

# Jumps
- **break** statement makes the interpreter jump to the end of a loop or other statement.
- **continue** makes the interpreter skip the rest of the body of a loop and jump back to the top of a loop to begin a new iteration.
- **return** statement makes the interpreter jump from a function invocation back to the code that invoked it and also supplies the value for the invocation.
- **throw** statement is a kind of interim return from a generator function. The throw statement throws an exception and is designed to work with the **try/catch/finally** statement, which establishes a block of exception-handling code. This is a complicated kind of jump statement: when an exception is thrown, the interpreter jumps to the nearest enclosing exception handler, which may be in the same function or up the call stack in an invoking function.
- Any statement may be labeled by preceding it with an identifier and a colon: **identifier: statement**

> mainloop: while(token !== null) {
    continue mainloop;
}

# trhow
- An exception is a signal that indicates that some sort of exceptional condition or error has occurred
- To throw an exception is to signal such an error or exceptional condition. To catch an exception is to handle it, to take whatever actions are necessary or appropriate to recover from the exception.
- exceptions are thrown whenever a runtime error occurs and whenever the program explicitly throws one using the throw statement.
- **throw expression;** expression may evaluate to a value of any type
- The Error class and its subclasses are used when the JavaScript interpreter itself throws an error, and you can usethem as well.
- An Error object has a name property that specifies the type of error and a message property that holds the string passed to the constructor function.
- **throw new Error("x must not be negative");**
- When an exception is thrown, the JavaScript interpreter immediately stops normal program execution and jumps to the nearest exception handler like **catch** in the **try/catch/finally** statement
- If an exception is thrown in a function that does not contain a try/catch/finally statement to handle it, the exception propagates up to the code that invoked the function. In this way, exceptions propagate up through the lexical structure of JavaScript methods and up the call stack. If no exception handler is ever found, the exception is treated as an error and is reported to the user.

# try/catch/finally
- the try/catch/finally statement is JavaScript’s exception handling mechanism.
- **try** defines the block of code whose exceptions are to be handled.
- **catch** s a block of statements that are invoked when an exception occurs anywhere within the try block
- **finally** block containing cleanup code that is guaranteed to be executed, regardless of what happens in the try block

**try {**
//Normally, this code runs from the top of the block to the bottom without problems. But it can sometimes throw an exception, either directly, with a throw statement, or indirectly, by calling a method that throws an exception.
**}**
**catch(e) {**
// The statements in this block are executed if, and only if, the try block throws an exception. These statements can use the local variable **e** to refer to the Error object or other value that was thrown. This block may handle the exception somehow, may ignore the exception by doing nothing, or may rethrow the exception with throw.
**finally {**
// This block contains statements that are always executed, regardless of what happens in the try block. They are executed whether the try
// block terminates:
1. normally, after reaching the bottom of the block
2. because of a break, continue, or return statement
3. with an exception that is handled by a catch
clause above
4. with an uncaught exception that is still
propagating
**}**

# with
- The with statement runs a block of code as if the properties of a specified object were variables in scope for that code
- Syntax: 
with (object)
    statement
- This statement creates a temporary scope with the properties of object as variables and then executes statement within that scope.
- The with statement is **forbidden** in strict mode
- avoid using it whenever possible. JavaScript code that uses with is difficult to optimize and is likely to run significantly more slowly than the equivalent code written without the with statement

**with(document.forms[0]) {**
// Access form elements directly here. For example:
name.value = "";
address.value = "";
email.value = "";
**}**

# debugger
- The debugger statement normally does nothing. - If, however, a debugger program is available and is running, then an implementation may (but is not required to) perform some kind of debugging action. 
- In practice, this statement acts like a breakpoint: execution of JavaScript code stops, and you can use the debugger to print variables’ values, examine the call stack, and so on

# "use strict"
- "use strict" is a directive introduced in ES5
- the directive is just an expression statement that consists of a special string literal (in single or double quotes)
- It can appear only at the start of a script or at the start of a function body, before any real statements have appeared.
- Strict code is executed in strict mode. Strict mode is a restricted subset of the language that fixes important language deficiencies and provides stronger error checking and increased security. Because strict mode is not the default, old JavaScript code that still uses the deficient legacy features of the language will continue to run correctly.
