# Numbers
- JavaScript’s primary numeric type, Number, is used to represent integers and to approximate real numbers. 
- JavaScript represents numbers using the 64-bit floating-point format defined by the IEEE 754 standard, 1 which means it can represent numbers as large as ±1.7976931348623157 × 10^308 and as small as ±5 × 10^−324.
- Array indexing and the bitwise operators are performed with 32-bit integers.
- In addition to base-10 integer literals, JS recognizes hexadecimal (base-16) values. (0xff => 255: (15*16+15))
- you can express integers in **binary** (base-2) or **octal** (base-8) using the prefixes 0b or 0B and 0o or 0O
- Floating-point literals may also be represented using exponential notation: a real number followed by the letter e (or E), followed by an optional plus or minus sign, followed by an integer exponent. This notation represents the real number multiplied by 10 to the power of the exponent. (6.02e32 or 1.473E-32)
- you can use underscores within numeric literals to break long literals up into chunks that are easier to read (let billion = 1_000_000_000) => this approach isn't standardized yet 
- JavaScript programs work with numbers using the arithmetic operators. These include + for addition, - for subtraction, * for multiplication, / for division, and % for modulo (remainder after division)
- ** for exponentiation 
- Arithmetic in JS does not raise errors in cases of **overflow**, **underflow** , or **division vy zero**
- **Infinity** is the result of a numeric operation that is larger than the largest representable number = **Number.MAX_VALUE** (overflow)
- **-Infinity** is the result the absolute value of a negative value becomes larger than the absolute value of the largest representable negative number  = **-Number.MAX_VALUE**
- **0** is the result of a numeric operation that is closer to zero than the smallest representable number (underflow) 
- **-0** / **negative zero** is an underflow that occurs from a negative numver 
- **Division by 0** is not an error in JS => it returns **Infinity** or **-Infinity**
- **NaN** is the result of dividing zero by zero, dividing infinity by infinity, take the square root of a negative number, or **use arithmetic operators with non-numeric operands that cannot be converted to number**
- when you’re working with **real numbers** in JavaScript, the representation of the number will often be an approximation of the actual number.
- Binary floating-point representations cannot exactly represent numbers as simple as 0.1.
- If these floating-point approximations are problematic for your programs, consider using scaled integers. For example, you might manipulate monetary values as integer cents rather than fractional dollars.
- **BigInt** is a new numeric type in ES2020. it has been implemented in Chrome, Firefox, Edge, and Node => it allows the representation of 64-bit integers
- 


# Math Object 

- **Math.pow(2,53)**            | 2 to the power 53
- **Math.round(.6)**            | round to the nearest integer
- **Math.ceil(.6)**             | round up to an integer
- **Math.floor(.6)**            | round down to an integer
- **Math.abs(-5)**              | absolute value
- **Math.max(x,y,z)**           | Return the largest argument
- **Math.min(x,y,z)**           | Return the smallest argument
- **Math.random()**             | Pseudo-random number x where 0 <= x < 1.0
- **Math.PI**                   | π: circumference of a circle/diameter
- **Math.E**                    | e: The base of the natural logarithm
- **Math.sqrt(3)**              | the square root of 3
- **Math.pow(3, 1/3)**          | the cube root of 3
- **Math.sin(0)**               | Trigonometry: also **Math.cos, Math.atan**, etc.
- **Math.log(10)**              | natural logarithm of 10
- **Math.log(100)/Math.LN10**   | base 10 logarithm of 100
- **Math.log(512)/Math.LN2**    | base 2 logarithm of 512
- **Math.exp(3)**               | Math.E cubed
- **Math.cbrt(27)**             | cube root
- **Math.hypot(3, 4)**          | square root of sum of squares of all arguments
- **Math.log10(100)**           | Base-10 logarithm
- **Math.log2(1024)**           | Base-2 logarithm
- **Math.log1p(x)**             | Natural log of (1+x); accurate for very small x
- **Math.expm1(x)**             | Math.exp(x)-1; the inverse of Math.log1p()
- **Math.sign(x)**              | -1, 0, or 1 for arguments <, ==, or > 0
- **Math.imul(2,3)**            | optimized multiplication of 32-bit integers
- **Math.clz32(0xf)**           | number of leading zero bits in a 32-bit integer
- **Math.trunc(3.9)**           |=> 3 / convert to an integer by truncating fractional part 
- **Math.fround(x)**            | Round to nearest 32-bit float number
- **Math.sinh(x)**              | Hyperbolic sine. Also **Math.cosh(), Math.tanh()**
- **Math.asinh(x)**             | Hyperbolic arcsine. Also **Math.acosh(), Math.atanh()** 

# Infinity, NaN
- **Infinity**                  | A positive number too big to represent 
- Number.POSITIVE_INFINITY
- 1/0 
- Number.MAX_VALUE * 2

- **-Infinity**                 | A negative number too big to represent 
- Number.NEGATIVE_INFINITY
- Number.MAX_VALUE * 2
- -1/0                          
- -Number.MAX_VALUE * 2         

- **NaN**                       | The not-a-number value 
- Number.NaN                   
- 0/0
- Infinity/Infinity

- **0** and **-0**
- Number.MIN_VALUE/2
- -Number.MIN_VALUE/2
- -1/Infinity

# Number of methods
- Number.parseInt()
- Number.parseFloat()
- Number.isNaN(x)
- Number.isFinite(x)
- Number.isInteger(x)
- Number.isSafeInteger(x)   | is x an integer -(2**53) < x < 2**53
- Number.MIN_SAFE_INTEGER
- Number.MAX_SAFE_INTEGER
- Number.EPSILON

# Dates and Times
- Js defines a simple Date class for representing and manipulating the numbers that represent dates and times.
- JS Dates are objects, but they hav a numeric representation as a *timestamp* that specifies the number of elapsed milliseconds since January 1, 1970
> let timestamp = Date.now(); => the current time as a timestamp (a number)
> let now = new Date(); => the current time as a Date object
> let ms = now.getTime(); => convert to a millisecond timestamp
> let iso = now.toISOString(); => convert to a string in standard format 


# Conversion to String 

- **toFixed()** converts a number to a string with a specified number of digits after the decimal point. It never uses exponential notation.
- **toExponential()** converts a number to a string using exponential notation, with one digit before the decimal point and a specified number of digits after the decimal point (which means that the number of significant digits is one larger than the valueyou specify)
- **toPrecision()** converts a number to a string with the number of significant digits you specify. It uses exponential notation if the number of significant digits is not large enough to display the entire integer portion of the number.

> let n = 123456.789;
> n.toFixed(0)    //=> "123457"
> n.toFixed(2)    //=> "123456.79"
> n.toFixed(5)    //=> "123456.78900"
> n.toExponential(1) //=> "1.2e+5"
> n.toExponential(3) //=> "1.235e+5"
> n.toPrecision(4) //=> "1.235e+5"
> n.toPrecision(7) //=> "123456.8"
> n.toPrecision(10) //=> "123456.7890"

- If you pass a string to the **Number()** conversion function, it attempts to parse that string as an integer or floating-point literal.
- That function only works for base-10 integers and does not allow trailing characters that are not part of the literal. 
- The **parseInt()** and **parseFloat()** functions (these are global functions, not methods of any class) are more flexible.
- **parseInt()** parses only integers, while **parseFloat()** parses both integers and floating-point numbers.
- If a string begins with “0x” or “0X”, **parseInt()** interprets it as a hexadecimal number.
- Both **parseInt()** and **parseFloat()** skip leading whitespace, parse as many numeric characters as they can, andignore anything that follows.
- If the first nonspace character is not part of a valid numeric literal, they return **NaN**
- **parseInt()** accepts an optional second argument specifying the radix (base) of the number to be parsed.

> parseInt("3 blind mice") //=> 3
>
> parseFloat(" 3.14 meters") //=> 3.14
>
> parseInt("-12.34") //=> -12
>
> parseInt("0xFF") //=> 255
>
> parseInt("0xff") //=> 255
>
> parseInt("-0XFF") //=> -255
>
> parseFloat(".1") //=> 0.1
>
> parseInt("0.1") //=> 0
>
> parseInt(".1") //=> NaN: integers can't start with "."
>
> parseFloat("$72.47") //=> NaN: numbers can't start with $
>
> parseInt("11", 2) //=> 3: (1*2 + 1)
>
> parseInt("ff", 16) //=> 255: (15*16 + 15)
>
> parseInt("zz", 36) //=> 1295: (35*36 + 35)
>
> parseInt("077", 8) //=> 63: (7*8 + 7)
>
> parseInt("077", 10) //=> 77: (7*10 + 7)
>


