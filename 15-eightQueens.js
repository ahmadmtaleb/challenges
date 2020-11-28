// Have the function EightQueens(strArr) read strArr which will be an array
// consisting of the locations of eight Queens on a standard 8x8 chess board
// with no other pieces on the board. The structure of strArr will be the
// following: ["(x,y)", "(x,y)", ...] where (x,y) represents the position of the
// current queen on the chessboard (x and y will both range from 1 to 8 where
// 1,1 is the bottom-left of the chessboard and 8,8 is the top-right). Your
// program should determine if all of the queens are placed in such a way where
// none of them are attacking each other. If this is true for the given input,
// return the string "true" otherwise return the first queen in the list that is
// attacking another piece in the same format it was provided.
// 
// For example: if strArr is ["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)",
// "(1,6)", "(7,7)", "(5,8)"] then your program should return the string true.
 

function eightQueens(strArr) { 
    let x =[], y =[];
    strArr.forEach((pos) => {
      x.push(Number(pos.replace('(','').replace(')','').split(',')[0]));
      y.push(Number(pos.replace('(','').replace(')','').split(',')[1]));
    });
    const setX = new Set(x);
    const setY = new Set(y);
    let flag = true;
    let resp = '';
    for(let i=0; i < strArr.length; i++) {
      for(let j=1; j < strArr.length; j++) {
        if(flag && (x[j]-x[i] === y[j]-y[i] || x[i]===x[j] || y[i]===y[j])) {
          resp = `(${x[i]},${y[i]})`;
          flag = false;
        }
      }
    }
    return (x.length === setX && x.length === setY && !resp.length)?'true':resp;
  }
  
  console.log(eightQueens(["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)","(1,6)", "(7,7)", "(5,8)"])); //Output: (4,2) should be true
  console.log(eightQueens(["(2,1)", "(4,3)", "(6,3)", "(8,4)", "(3,4)", "(1,6)", "(7,7)", "(5,8)"])); //Output: (2,1)
  console.log(eightQueens(["(2,1)", "(5,3)", "(6,3)", "(8,4)", "(3,4)", "(1,8)", "(7,7)", "(5,8)"])); // Output: (5,3)
//   console.log(eightQueens());