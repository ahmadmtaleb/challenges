# String

- JS type for representing text 
- an **immutable** ordered sequence of 16-bit values, each of which typically represents a Unicode character
- an empty string is a string of length 0
- Strings are immutable in JS => Methods like replace() and toUpperCase() return new strings => they do not modify the string on which they are invoked
- Strings can also be treated like read-only arrays, and you can access individual characters from a string using square brackets instead of the charAt() method like so: **s[0] or s[s.length]**
- string literals can be delimited with **backticks `string`** 
- template literals can include arbitrary JavaScript expressions
- The final value of a string literal in backticks is computed by evaluating any included expressions, converting the values of those expressions to strings and combining those computed strings with the literal characters within the backticks
- Everything between the **${x}** is interpreted as a JavaScript expression => the expression inside the braces is evaluated and then converted to a string and inserted into the template, replacing the dollar sign, the curly braces, and everything in between them
- Everything outside the curly braces is normal string literal text
- **Tagged Template Literals** => A powerful but less commonly used feature of template literals is that, if a function name (or “tag”) comes right before the opening backtick, then the text and the values of the expressions within the template literal are passed to the function. The value of this “tagged template literal” is the return value of the function. This could be used, for example, to apply HTML or SQL escaping to the values before substituting them into the text.
- **String.raw()** returns the text within backticks without any processing of backslash escapes 




# Escape sequences in String Literals 

is the **backslash character (\)**
- \0 => the Null character(\u0000)
- \b => Backspace(\u0008)
- \t => Horizontal tab (\u0009)
- \n => Newline (\u000A)
- \v => Vertical tab (\u000B)
- \f => Form feed (\u000C)
- \r => Carriage return (\u000D)
- \" => Double quote (\u0022)
- \' => Single quote or apostrophe (\u0027)
- \\ => Backslash (\u005C)
- \xnn => The Unicode character specified by the two hexadecimal digits nn
- \unnnn => The Unicode character specified by the four hexadecimal digits nnnn
- \u{n} => The Unicode character specified by the codepoint n, where n is one to six hexadecimal digits between 0 and 10FFFF (ES6)

- if the \ character precedes any character other than those shown before, the backslash is simply ignored. For example, \# is the same as #
- you can break a string literal across multiple lines by ending each line but the last with a **backslash (\)**. Neither the backslash nor the line terminator that follow it are part of the string literal.

# String methods
- string.length

**Obtaining portions of a string**
- s.substring(1,4) => 
- s.slice(1,4) => 
- s.slice(-3) => last 3 characters
- s.split(", ") => split string at delimeter string 

**Searching a string**
- s.indexOf("l") 
- s.indexOf("l", 3)
- s.indexOf("zz")
- s.lastIndexOf("l")

 a negative second argument is treated as zero in indexOf() and lastIndexOf() methods.

**Boolean searching functions in ES6 and later**
- s.startsWith("Hell")
- s.endsWith("!")
- s.includes("or")

**Creating modified versions of a string**
- s.replace("llo", "ya")
- s.toLowerCase()
- s.toUpperCase()
- s.normalize() => Unicode NFC normalization: ES6
- s.normalize("NFD") => NFD normalization. Also "NFKC", "NFKD"

**Inspecting individual (16-bit) characters of a string**
- s.charAt(0)
- s.charAt(s.length-1)
- s.charCodeAt(0) => 16-bit number at the specified position
- s.codePointAt(0) => works for codepoints > 16 bits

**String padding functions in ES2017**
- "x".padStart(3) => add spaces on the left to a length of 3
- "x".padEnd(3) => add spaces on the right to a length of 3
- "x".padStart(3, "*") => add stars on the left to a length of 3
- "x".padEnd(3, "-") => add dashes on the right to a length of 3

**Space trimming functions. trim() is ES5; others ES2019**
- " test ".trim() => remove spaces at start and end 
- " test ".trimStart() => remove spaces on left 
- " test ".trimEnd() => remove spaces at right

**Miscellaneous string methods**
- s.concat("!") => concatenate the two strings s and '!', we can use + instead 
- "<>".repeat(5) => concatenate 5 copies of "<>"