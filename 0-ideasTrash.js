// function processData(input) {
//     //Enter your code here
//     let inputCopy = input.split('\n')

//     let numberOfEntries = inputCopy[0];
    
//     let phoneBookEntries = [];
//     let queriesEntries =[];
    
//     for(let i=1; i<=numberOfEntries; i++){
//         phoneBookEntries.push(inputCopy[i])
//     }
//     for(let j=(Number(numberOfEntries)+1);j<inputCopy.length;j++){
//         queriesEntries.push(inputCopy[j])
//     }
//     let phoneBook = {}
//     phoneBookEntries.forEach(entry=>{
//         let oneEntry = entry.split(" ");
//         phoneBook[oneEntry[0]] = oneEntry[1];
//     });
//     queriesEntries.forEach(value =>{
//         if(value in phoneBook){
//             console.log(value+ "=" + phoneBook[value])
//         }
//         else{
//             console.log("Not found")
//         }
//     })
// } 

// function shi(input){ //this function is to return the max sum of sand watch
//     let arr = Array(6);
//     let arrayOfSum =[]
//     for (let i = 0; i < 6; i++) {
//         arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
//     }
//     for(let i = 1; i < 5; i++){ //for iterating over the lines of array
//         for(let j = 1; j < 5; j++){ //for iterating over the same line
//             let count = 0;
//             count = arr[i][j] + arr[i-1][j] + arr[i-1][j-1] + arr[i-1][j+1] + arr[i+1][j] + arr[i+1][j-1] + arr[i+1][j+1];
//             arrayOfSum.push(count);
//         }
//     }
// console.log(arrayOfSum.sort((x,y)=> y - x)[0])
// }

//The follwing is my attempt to solve the string challenge
// let maxLength = Math.max(oepningTags.length, closingTags.length);
  // console.log(maxLength);


  // for(let j = 0; j < closingTags.length;){
    //   if(strObject[openingTags[i]] != closingTags[j]){
    //     j++;
    //   }
    //   else { i++; }
    // }
    // return openingTags[i];

    // if(strObject[oepningTags[i]] != closingTags[i] ){
    //   //&& strObject[oepningTags[i]] != closingTags[[closingTags.length -i -1]] 
    //   return (oepningTags[i] || closingTags[i]) ;
    // }

