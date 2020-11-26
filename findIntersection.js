/*
Find Intersection
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.

Examples
Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Output: 1,4,13
Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Output: 1,9,10

//

For example: if the input array is ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"] the output string should be "1, 4, 13" because those numbers appear in both strings. The array given will not be empty, and each string inside the array will be of numbers sorted in ascending order and may contain negative numbers.
*/

function FindIntersection(strArr) { 
  let firstList = strArr[0].split(', ');
  let secondList = strArr[1].split(', ');
  // console.log('first list:', firstList);
  // secondList.sort((a,b)=> a-b);
  // console.log('second list:', secondList);
  let intersectionList = [];
  let returnStr = '';
  secondList.forEach(number => {
    if(firstList.includes(number)){
      intersectionList.push(number);
    }
  });
  returnStr = intersectionList.join();

  return returnStr?returnStr:'false'; 
  
  }
     
  // keep this function call here 
  // console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])) //Output: 1,4,13
  // console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"])) //Output: 1,9,10
  // console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "2, 5, 8, 11"])) //Output: false
  console.log(FindIntersection(["1, 3, -9, 10, 17, 18", "1, -4, -9, 10, 0"])) //Output: 1, -9, 10 beacause the array is not sorted, if the input was not sorted we can sort it by using the sort method 



/* possible solutions 
got to the comment section also  
https://dev.to/coderbyte/a-common-coding-interview-question-461f

https://dev.to/krtb/codetoday-find-intersection-algorithm-coderbyte-1mg5


*/