/*
Longest Consecutive
Have the function LongestConsecutive(arr) take the array of positive integers stored in arr and return the length of the longest consecutive subsequence (LCS). An LCS is a subset of the original list where the numbers are in sorted order, from lowest to highest, and are in a consecutive, increasing order. The sequence does not need to be contiguous and there can be several different subsequences. 

For example: if arr is [4, 3, 8, 1, 2, 6, 100, 9] then a few consecutive sequences are [1, 2, 3, 4], and [8, 9]. For this input, your program should return 4 because that is the length of the longest consecutive subsequence.

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

function LongestConsecutive(arr){
  arr.sort((a,b)=> a-b);
  // console.log(arr);
  let returnStr = '';
  let arrayOfSequences = [];
  let stringOfOneSequence = '';
  for (let i = 0; i < arr.length; i++){
    if(arr[i] == arr[i+1]-1){
      stringOfOneSequence += arr[i] + ',';
    }
    else {
      stringOfOneSequence += arr[i];
      arrayOfSequences.push(stringOfOneSequence.split(','));
      stringOfOneSequence = '';
    }
  }
  // console.log(arrayOfSequences);
  returnStr = Math.max(...arrayOfSequences.map(element => element.length));
  return returnStr;

}
console.log(LongestConsecutive([4, 3, 8, 1, 2, 6, 100, 9])) //Output: 4
console.log(LongestConsecutive([1, 9, 3, 10, 4, 20, 2])) //Output: 4
console.log(LongestConsecutive([36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42])) //Output: 5
console.log(LongestConsecutive([100,4,200,1,3,2])) //Output: 4
console.log(LongestConsecutive([0,3,7,2,5,8,4,6,0,1])) //Output: 9
// console.log(LongestConsecutive([])) //Output: 
// console.log(LongestConsecutive([])) //Output: 



/*
 POSSIBLE SOLUTION in python
 def ArrayChallenge(arr):
  l=[]
  l2=[]
  j=1
  # code goes here
  for i in range(len(arr)):
    l=[i]
    while arr[i]+j in arr:
      l.append(arr[i]+j)
      j=j+1
    l2.append(len(l))
  return max(l2)

# keep this function call here 
print(ArrayChallenge(input()))

 */

