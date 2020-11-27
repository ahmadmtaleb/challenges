/*
WORD SPLIT
Have the function WordSplit(strArr) read the array of strings stored in strArr, which will contain 2 elements: the first element will be a sequence of characters, and the second element will be a long string of comma-seperated words, in alphabetical order, that represents a dictionary of some arbitrary length.
  
For example: strArr can be: ["hellocat", "apple, bat,cat,goodbye,hello,yellow,why"].
  
Your goal is to determine if the first element in the input can be split into two words, where both words in the dictionary that is provided in the second input. In this example, the first element can be split into two words: hello and cat because both of those words are in the dictionary.
  
Your program should return the two words that exist in the dictionary seperated by a comma. So for the example above, your program should return hello,cat. There will only be one correcy way to split the first element of characters into two words. If there is no way to split string into two words that exist in the dictionary, return the string not possible. The first element itself will never exist in the dictionary as a real word.

*/

function WordSplit(strArr){
  let firstElement = strArr[0];
  let secondElement = strArr[1].split(',');
  let combinationOfWords = []
  // console.log(secondElement);
  for(let i = 0; i < secondElement.length; i++){
    for(let j = 0; j < secondElement.length; j++){
      if(firstElement.includes(secondElement[i])){
        let sum = secondElement[i] + secondElement[j];
        if(sum == firstElement){
          combinationOfWords.push(secondElement[i], secondElement[j])
        }
      }
    }
  }
  if(combinationOfWords.length == 0){
    combinationOfWords.push('Not Possible')
  }
  return combinationOfWords.join();
}
console.log(WordSplit(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"])); // Output: base, ball
console.log(WordSplit(["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"])); // Output: hello, cat
console.log(WordSplit(["hellocat", "apple,bat,ca,goodbye,hello,yellow,why"])); // Output: Not Possible