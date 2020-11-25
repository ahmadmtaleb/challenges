# JavaScript type conversions

Value       |   to String       |   to Number       |   to Boolean
-------------------------------------------------------------------
undefined   |   "undefined"     |   NaN             |   false      
null        |   "null"          |   0               |   false
true        |   "true"          |   1               |
false       |   "false"         |   0               |
""          |                   |   0               |   false
"1.2"       |                   |   1.2             |   true
"one"       |                   |   NaN             |   true
0           |   "0"             |                   |   false
-0          |   "0"             |                   |   false
1           |   "1"             |                   |   true
Infinity    |   "Infinity"      |                   |   true
-Infinity   |   "-Infinity"     |                   |   true
NaN         |   "NaN"           |                   |   false
{}          |                   |                   |   true
[]          |                   |                   |   true
[9]         |   "9"             |   9               |   true
['a']       |   "a"             |   NaN             |   true
function(){}|                   |   NaN             |   true


- null == undefined // => true: These two values are treated as equal
- "0" == 0 // => true: String converts to a number before comparing.
- 0 == false // => true: Boolean converts to number before comparing.
- "0" == false // => true: Both operands convert to 0 before comparing!


