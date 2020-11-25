# NULL AND UNDEFINED

- **null** is a language keyword that evaluates to a special value that is usually used to indicate the absence of a **value**
- **typeof(null)** = object 
- null can be be thought of as a special object value that indicates **“no object”**.
- null can be used to indicate 'no value' for numbers and strings as well as objects

- **undefined** value represents a deeper kinf of absence of value.
- It is the value of variables that have not been initialized and the value you get when you query the value of an object property or array element that does not exist.
- The undefined value is also the return value of functions that do not explicitly return a value and the value of function parameters for which no argument is passed.
- undefined is a predefined global constant (not a language keyword like null, though this is not an important distinction in practice) that is initialized to the undefined value.
- **typeof(undefined)** = indefined

- **null** and **undefined** both indicate an absence of value and can often be used interchangeably.
- the equality operator **==** consider them to be equal
- to distinguish them use the strict equality **===***
