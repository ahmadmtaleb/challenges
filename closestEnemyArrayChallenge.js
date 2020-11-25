/*
Array Challenge
Have the function ArrayChallenge(strArr) read the matrix of numbers stored in strArr which will be a 2D matrix that contains only the integers 1, 0, or 2. Then from the position in the matrix where a 1 is, return the number of spaces either left, right, down, or up you must move to reach an enemy which is represented by a 2. You are able to wrap around one side of the matrix to the other as well. For example: if strArr is ["0000", "1000", "0002", "0002"] then this looks like the following:

0 0 0 0
1 0 0 0
0 0 0 2
0 0 0 2

For this input your program should return 2 because the closest enemy (2) is 2 spaces away from the 1 by moving left to wrap to the other side and then moving down once. The array will contain any number of 0's and 2's, but only a single 1. It may not contain any 2's at all as well, where in that case your program should return a 0.
# Examples
Input: ["000", "100", "200"]
Output: 1

Input: ["0000", "2010", "0000", "2002"]
Output: 2

Input: ["0000", "1000", "0002", "0002"]
Output: 2

Input: ["0000", "1000", "0000", "0000"]
Output: 0
----------------------------------------
*/
function ArrayChallenge(strArr) {
    let player = {};
    let enemy = [];
    let distanceArr = [];
    let distance = 0;
    let matrixLength = strArr.length;
    
    for (let i = 0; i < matrixLength; i++) {
      let row = strArr[i].split("");      
      for (let j = 0; j < matrixLength; j++) {
        if (row[j] == 1) {
          player['rowPosition'] = i;
          player['columnPosition'] = j
        } 
        else if (row[j] == 2) {
          enemy.push({'rowPosition': i, 'columnPosition': j});
        }
      }
    }
    // console.log('Player', player);
    // console.log('Enemy', enemy);
   
    for(let l = 0; l < enemy.length; l++){
      let vertical = 0;
      let horizontal = 0;
      let totalDistance = 0;

      vertical = Math.abs(enemy[l]['rowPosition'] - player['rowPosition']);
      if(vertical < matrixLength/2){
        totalDistance += vertical
      }
      else{
        totalDistance += matrixLength - vertical;
      }

      horizontal = Math.abs(enemy[l]['columnPosition'] - player['columnPosition'])
      if(horizontal < matrixLength/2){
        totalDistance += horizontal;
      }
      else{
        totalDistance += matrixLength - horizontal;
      }
      distanceArr.push(totalDistance);
    }
    distanceArr.sort((x,y) => x-y);
    distance = distanceArr[0];
    return distance ? distance : 0; 
    
  
  }
     
  // keep this function call here 
// console.log(ArrayChallenge(["0000", "2010", "0000", "2002"])); //Output: 2
// console.log(ArrayChallenge(["000", "100", "200"])); //Output: 1
// console.log(ArrayChallenge(["0000", "1000", "0002", "0002"])); //Output: 2
console.log(ArrayChallenge(["0000", "1000", "0000", "0000"])); //Output: 0
