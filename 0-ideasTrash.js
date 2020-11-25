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



    /* Solution in python for matrix challenge (boggle)
grid = "fxie amlo ewbx astu".split()
nrows, ncols = len(grid), len(grid[0])

# A dictionary word that could be a solution must use only the grid's
# letters and have length >= 3. (With a case-insensitive match.)
import re
alphabet = ''.join(set(''.join(grid)))
bogglable = re.compile('[' + alphabet + ']{3,}$', re.I).match

words = set(word.rstrip('\n') for word in open('words') if bogglable(word))
prefixes = set(word[:i] for word in words
               for i in range(2, len(word)+1))

def solve():
    for y, row in enumerate(grid):
        for x, letter in enumerate(row):
            for result in extending(letter, ((x, y),)):
                yield result

def extending(prefix, path):
    if prefix in words:
        yield (prefix, path)
    for (nx, ny) in neighbors(path[-1]):
        if (nx, ny) not in path:
            prefix1 = prefix + grid[ny][nx]
            if prefix1 in prefixes:
                for result in extending(prefix1, path + ((nx, ny),)):
                    yield result

def neighbors((x, y)):
    for nx in range(max(0, x-1), min(x+2, ncols)):
        for ny in range(max(0, y-1), min(y+2, nrows)):
            yield (nx, ny)
*/
