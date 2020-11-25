# Obperators

Table 4-1 in the book check it

- The operators listedfirst have higher precedence than those listed last.
- A gives the operator associativity, which can be L (left-to-right) or R (right-to-left)
- Types lists the expected types of the operands and (after the → symbol) the result type for the operator.

Operator    |   Operation                   | A | Types
++          |   Pre- or Post- increment     | R | 1 val -> num
--          |   Pre- or Post- decrement     | R | 1 val -> num
-           |   Negate number               | R | 1 val -> num
+           |   convert to number           | R | any -> num
~           |   Invert bits                 | R | int -> int
!           |   Invert boolean value        | R | bool -> bool
delete      |   remove a property           | R | 1val -> bool
typeof      |   determine type of operand   | R | any -> str
void        |   return undefined value      | R | any -> undef
**          |   Exponentiate                | R | num, num -> num
*,/,%       |   multiply, divide, remainder | L | num, num -> num
+, -        |   add, subtract               | L | num, num -> num
+           |   concatenate strings         | L | str, str -> str
!           |   Invert boolean value        | R | bool -> bool