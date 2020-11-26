/*
String Challenge
Have the function StringChallenge(str) take the str parameter being passed and return it in proper camel case format where the first letter of each word is capitalized (excluding the first letter). The string will only contain letters and some combination of delimiter punctuation characters separating each word.

For example: if str is "BOB loves-coding" then your program should return the string bobLovesCoding.
Examples
Input: "cats AND*Dogs-are Awesome"
Output: catsAndDogsAreAwesome
Input: "a b c d-e-f%g"
Output: aBCDEFG

-----------------------------------------
*/
function StringChallenge(str) { 
  let strg = str.replace(/[\W_]+/g," ");
  let readyString = strg.toLowerCase();
  let arrayOfWords = readyString.split(" ");

  for(let i = 1; i < arrayOfWords.length; i++){
    arrayOfWords[i] = arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].substring(1);     
  }

  return arrayOfWords.join('');
  }
     
  // keep this function call here 
console.log(StringChallenge("BOB loves-coding")); // Output: bobLovesCoding
console.log(StringChallenge("cats AND*Dogs-are Awesome")); // Output: catsAndDogsAreAwesome
console.log(StringChallenge("a b c d-e-f%g")); // Output: aBCDEFG