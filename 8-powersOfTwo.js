/*Powers of Two
Have the function PowersofTwo(num) take the num parameter being passed which will be an integer and return the string true if it's a power of two. If it's not return the string false. For example if the input is 16 then your program should return the string true but if the input is 22 then the output should be the string false.

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
function PowersofTwo(num){
  let x = Math.sqrt(num);
  if(num === 0){
    return 'false';
  }
  if(Math.ceil((Math.log(num) / Math.log(2))) == Math.floor(((Math.log(num) / Math.log(2))))){
    return 'true';
  }
  return 'false';
}
console.log(PowersofTwo(22)); // Output: false
console.log(PowersofTwo(16)); // Output: true
console.log(PowersofTwo(25)); // Output: false
console.log(PowersofTwo(12)); // Output: false
console.log(PowersofTwo(32)); // Output: true
console.log(PowersofTwo(8)); // Output: true
console.log(PowersofTwo(64)); // Output: true