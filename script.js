'use stict';

// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
// Output:
// my cat
// 12
// string literals: 1 + 2 = 3
// Note that the `+` operator is used for concatenating strings in JavaScript, but 
// it is also used for addition. So, if you add a string to a number, the number
// will be converted to a string and concatenated to the other string.
// To perform arithmetic operations on variables or values inside template literal expressions, use `${expression}` syntax
// To avoid this behavior when adding two numbers or any combination of types, use template literal syntax
// instead of string concatenation.

