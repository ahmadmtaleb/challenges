/*
WORD SPLIT
Have the function WordSplit(strArr) read the array of strings stored in strArr, which will contain 2 elements: the first element will be a sequence of characters, and the second element will be a long string of comma-seperated words, in alphabetical order, that represents a dictionary of some arbitrary length.
  
For example: strArr can be: ["hellocat", "apple, bat,cat,goodbye,hello,yellow,why"].
  
Your goal is to determine if the first element in the input can be split into two words, where both words in the dictionary that is provided in the second input. In this example, the first element can be split into two words: hello and cat because both of those words are in the dictionary.
  
Your program should return the two words that exist in the dictionary seperated by a comma. So for the example above, your program should return hello,cat. There will only be one correcy way to split the first element of characters into two words. If there is no way to split string into two words that exist in the dictionary, return the string not possible. The first element itself will never exist in the dictionary as a real word.

*/

let strArr = ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]
// let strArr = ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]
function WordSplit(){
  // First Element, with single string   
  let wordToCompare = strArr[0]
  // Second Element, with single string   
  let stringDictionary = strArr[1]
  // Array of split strings   
  let singleStrings = stringDictionary.split(',')
  // Hold Answers   
  let answerWords = ""
  
  singleStrings.map((firstWord) => {
    // firstWord: a,all,b,ball,bas,base,cat,code,d,e,quit,z
    let splitMainWordArray = wordToCompare.split(firstWord)
    console.log(splitMainWordArray, 'splitMainWordArray')
    
    if(splitMainWordArray.length > 0){

      splitMainWordArray.map((word)=>{
        // console.log(firstWord, word, 'test')
        let joinedWord = firstWord + word
        let reversedWord = [joinedWord].reverse().toString()
        
        if(joinedWord === wordToCompare || reversedWord === wordToCompare){
          // console.log(firstWord, word, 'winner')
          answerWords = "" + firstWord + ", " + word + ""
        } else {
          return 'Not Possible'
        }
        
      })
    }
 
  })

  return answerWords
}

// let check = wordToCompare.includes(dictionary) //-> only returns boolean  


/* another solution
let strArr = ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]
// let strArr = ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]
function WordSplit(){
  // First Element, with single string   
  let wordToCompare = strArr[0]
  // Second Element, with single string   
  let stringDictionary = strArr[1]

  // Array of split strings   
  let singleStrings = stringDictionary.split(',')
  // Hold Answers   
  let answerWords = ""

  singleStrings.map((firstWord) => {

    let splitMainWordArray = wordToCompare.split(firstWord)

    if(splitMainWordArray.length > 0){

      splitMainWordArray.map((word)=>{

        let joinedWord = firstWord + word
        let reversedWord = [joinedWord].reverse().toString()

        if(joinedWord === wordToCompare || reversedWord === wordToCompare){
          // console.log(firstWord, word, 'winner')
          answerWords = "" + firstWord + ", " + word + ""
        } else {
          return 'Not Possible'
        }

      })
    }

  })

  return answerWords
}

The Process
1) First I start by grabbing the 2 elements which the problem refers to. The variable wordToCompare refers to the word that I'll be comparing. And the variable stringDictionary represents the dictionary of words string that I was provided.

2) In order to iterate over my dictionary string, I have to break it down with stringDictionary.split(',') and assign that to a variable as well to late manipulate, named singleStrings. It would look something like, ['a', 'all', 'b', ... ]'

3) I also add a variable called, singleStrings, which will be an empty string for now. Later on we can set our answer to equal this variable to return our answer out of the loops.

4) I then run a map() function on the singleStrings variable. This allows me to try and see if I can split() my wordToCompare in order to see if I can split it into two words. The problem is that I then get an array of string elements. I now have to iterate over that array to check each string and see if it can be found in the original string in any way, like baseball for example.

5) Some of the loops result in single element arrays, but I only want to look at the ones with more than one, as we're trying to split my word into two elements. For this reason I add the if(splitMainWordArray.length > 0) line.

6) I add a second map function, splitMainWordArray.map, to loop over the first arrays I got when I wrote let splitMainWordArray = wordToCompare.split(firstWord). I'm comparing the dictionary words saved in the singleStrings array and with my new arrays I'm creating each time I split a word.

7) There was a case where I was getting base from baseball, but I needed to place it inside an array to then run a .join() and .toString() in order for ballbase to equal baseball. Which is why I then write if(joinedWord === wordToCompare || reversedWord === wordToCompare).

8) If these 2 conjoined words are equal to our first string, baseball, or if reversed they're equal, we then have our answer that we concatenate and return outside of all the loops by assigning it to the emprty answerWords variable we created at the start.


*/