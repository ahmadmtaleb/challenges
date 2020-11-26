/*
Nonrepeating Character (searching challenge)
Have the function NonrepeatingCharacter(str) take the str parameter being passed, which will contain only alphabetic characters and spaces, and return the first non-repeating character. For example: if str is "agettkgaeee" then your program should return k. The string will always contain at least one character and there will always be at least one non-repeating character.

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
function NonrepeatingCharacter(str){
  // str = str.replace(/\s/g, ''); //remove space if you don't want to return the space as a non-repeating character
  let strg = str.toLowerCase();
  let countingObject = {};
  for(let i = 0; i < strg.length; i++){
    if(countingObject[strg[i]]){
      countingObject[strg[i]] += 1;
    }
    else{
      countingObject[strg[i]] = 1;
    }
  }
  let result = '';
  result = Object.keys(countingObject).find(key => countingObject[key] === 1);
  return result;
}
console.log(NonrepeatingCharacter('a gettkgaeee')); // Output: " "
console.log(NonrepeatingCharacter('agettkgaeee')); // Output: k
console.log(NonrepeatingCharacter('as;j;afdk.awefjslkijk.skwefmgettkgaeee')); // Output: d
console.log(NonrepeatingCharacter('jkdsfhluiuaehjbdhjkasgdfjhLADSJK.SG')); // Output: i
console.log(NonrepeatingCharacter('abcdef')); // Output: a
console.log(NonrepeatingCharacter('hello world hi hey')); // Output: w
