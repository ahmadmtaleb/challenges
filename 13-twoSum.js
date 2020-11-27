/*
Two Sum
Have the function TwoSum(arr) take the array of integers stored in arr, and determine if any two numbers (excluding the first element) in the array can sum up to the first element in the array. 

For example: if arr is [7, 3, 5, 2, -4, 8, 11], then there are actually two pairs that sum to the number 7: [5, 2] and [-4, 11]. Your program should return all pairs, with the numbers separated by a comma, in the order the first number appears in the array. Pairs should be separated by a space. So for the example above, your program would return: 5,2 -4,11

If there are no two numbers that sum to the first element in the array, return -1

Use the Parameter Testing feature in the box below to test your code with different arguments.*/

/*Test Case
1. For input [6, 2] the output was incorrect. The correct output is -1

2. For input [100, 90, 90, 90, 90, 11] the output was incorrect. The correct output is -1

3. For input [8, 1, 2, 3, 4, 5, 7] the output was incorrect. The correct output is 1,7 3,5

4. For input [4, 5, 2, 1] the output was incorrect. The correct output is -1
*/
/*
 i=1 => j=2 => j=3 => j=4 => j=5
 i=2 => j=3 => j=4 => j=5
 i=3 => j=4 => j=5
 i=4 => j=5
*/
function TwoSum(arr){
    let firtsElement = arr[0];
    let sum = 0;
    let resultArray = []
    for(let i = 1; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            sum = arr[i] + arr[j]
            if(sum == firtsElement){
                resultArray.push(arr[i], arr[j])
            }
        }
    }
    return resultArray.length?resultArray.join(','):'-1';
}
console.log(TwoSum([6, 2])); // Output: -1
console.log(TwoSum([100, 90, 90, 90, 90, 11])); // Output: -1
console.log(TwoSum([8, 1, 2, 3, 4, 5, 7])); // Output: 1,7 3,5
console.log(TwoSum([4, 5, 2, 1])); // Output: -1
// console.log(TwoSum()); // Output: 