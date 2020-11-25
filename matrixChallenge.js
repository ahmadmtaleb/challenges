/*
    MATRIX CHALLENGE
    have the function MatrixChallenge(strArr) read the array of strings stored in strArr, which wil contain 2 elements:
    - The first element will represent a 4x4 matrix of letters, and 
    - The second element will be a long string of comma-separated words each at least 3 letters long, in alphabetical order, that represents a dictionary of some arbitrary length.

    For example: strArr can be ['rbfg, ukop, fgub, mnry', 'bog,bop,gup,fur,ruk'].

    Your goal is to determine if all the comma separated words as the second parameter exist in the 4x4 matrix of letters.

    For this example, the matrix looks like the following:
    r b f g 
    u k o p
    f g u b 
    m n r y

    The rules to make a word are as follows:
    1- A word can be constructed from sequentially adjacent spots in the matrix, where adjacent means moving horizontally, vertically, or diagonally in any direction 
    2- A word cannot use the same location twice to construct itself 

    The rules are similar to the game Boggle. So for the example above, all the words exist in that matrix so your program should return the string true.
    if all the words cannot be found, then return a comma separated string of the words that cannot be found, in the order they appear in the dictionary.

*/
function MatrixChallenge(strArr){
    let returnStr = '';

    let matrixArr = [];
    let verticalCombination = [];
    let horizontalCombination = [];
    let diagonalCombination = []; 
    let possibleWordsCombination = [];


    //matrixWords is the array that holds all the strings not letters that form the matrixArr
    let matrixWords = strArr[0].split(', ');
    
    matrixWords.forEach(value => {
        matrixArr.push(value.split(''))
    })
    // the length of the matrix 
    let lenMatrixArr = matrixArr.length;

    for(let i = 0; i < lenMatrixArr; i++){ //for iterating over the lines 
        for(let j = 0; j < lenMatrixArr; j++){ //for iterating over columns
            let oneVerticalWord = '';
            let oneHorizontalWord = '';
            let oneDiagonalWord = '';
            // for the whole horizontal words combination 
            if(j < lenMatrixArr/2){
                // horizontal words from left to right
                for(let h = 0; h < lenMatrixArr; h++){ // for going back and forth on the same line 
                    if(matrixArr[i][j+h]){
                        oneHorizontalWord += matrixArr[i][j+h];
                        if(oneHorizontalWord.length >= 3){
                            horizontalCombination.push(oneHorizontalWord)
                        }
                        else continue;
                    }
                }
            }
            else {
                // horizontal words from right to left 
                for(let h = 0; h < lenMatrixArr; h++){ // for going back and forth on the same line 
                    if(matrixArr[i][j-h]){
                        oneHorizontalWord += matrixArr[i][j-h];
                        if(oneHorizontalWord.length >= 3){
                            horizontalCombination.push(oneHorizontalWord)
                        }
                        else continue;
                    }
                }
            }
            // for the whole vertical words combination 
            if(i < lenMatrixArr/2){
                for(let v = 0; v < lenMatrixArr; v++){ // for going back and forth on the same column 
                    if(i+v >= 0 && i+v < lenMatrixArr){
                        oneVerticalWord += matrixArr[i+v][j];
                        if(oneVerticalWord.length >= 3){
                            verticalCombination.push(oneVerticalWord)
                        }
                        else continue;
                    }
                }
            }
            else {
                // horizontal words from right to left 
                for(let v = 0; v < lenMatrixArr; v++){ // for going back and forth on the same line 
                    if(i-v >= 0 && i-v < lenMatrixArr){
                        oneVerticalWord += matrixArr[i-v][j];
                        if(oneVerticalWord.length >= 3){
                            verticalCombination.push(oneVerticalWord)
                        }
                        else continue;
                    }
                }
            }
            if(i < lenMatrixArr/2 && j < lenMatrixArr/2){
                for(let v = 0; v < lenMatrixArr; v++){ // for going back and forth on the same column 
                    if(i+v >= 0 && i+v < lenMatrixArr && j+v >= 0 && j+v < lenMatrixArr){
                        oneDiagonalWord += matrixArr[i+v][j+v];
                        if(oneDiagonalWord.length >= 3){
                            diagonalCombination.push(oneDiagonalWord)
                        }
                        else continue;
                    }
                }
            }
            else {
                // horizontal words from right to left 
                for(let v = 0; v < lenMatrixArr; v++){ // for going back and forth on the same line 
                    if(i-v >= 0 && i-v < lenMatrixArr && j-v >= 0 && j-v < lenMatrixArr){
                        oneDiagonalWord += matrixArr[i-v][j-v];
                        if(oneDiagonalWord.length >= 3){
                            diagonalCombination.push(oneDiagonalWord)
                        }
                        else continue;
                    }
                }
            }
            
        }
    }
    possibleWordsCombination = [...verticalCombination, ...horizontalCombination, ...diagonalCombination];
    // console.log(matrixWords)
    // console.log('Horizontal Combination', horizontalCombination)
    // console.log('Vertical Combination',  verticalCombination)
    // console.log('Diagonal Combination', diagonalCombination)
    // console.log('Possible combination', possibleWordsCombination)
    // console.log(matrixArr)
    // console.log(matrixArr[2].indexOf('b'))

    let wordsArr = strArr[1].split(',')
    let wordsNotMatched = [];
    wordsArr.forEach(value => {
        if(!possibleWordsCombination.includes(value)){
            wordsNotMatched.push(value)
        }
        else {
            returnStr = 'true'
        }
    })
    console.log(wordsArr);
    returnStr = 'true';
    return returnStr;
}
MatrixChallenge(['rbfg, ukop, fgub, mnry', 'bog,bop,gup,fur,ruk']);




















/* Solution in python 
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
