/*
Nonrepeating Character
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
console.log(NonrepeatingCharacter('a gettkgaeee'));
console.log(NonrepeatingCharacter('agettkgaeee'));
console.log(NonrepeatingCharacter('as;j;afdk.awefjslkijk.skwefmgettkgaeee'));
console.log(NonrepeatingCharacter('jkdsfhluiuaehjbdhjkasgdfjhLADSJK.SG'));



/*Solution 
def SearchingChallenge(str1):
  
  for i in range(len(str1)):
    if str1[i] not in str1[i+1:]: 
      if str1[i] not in str1[0:i]:
        if str1[i].isspace() == False:
          var=str1[i]
          break 
  # code goes here
  return var

# keep this function call here 
print(SearchingChallenge(input()))
*/