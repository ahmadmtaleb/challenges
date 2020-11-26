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






// Challenge 1 - Letter Capitalize

//     Take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.

// Challenge 2 - Time Convert

//     Take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.

// Challenge 3 - Longest Word

//     Take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

// Challenge 4 - Letter Changes

//     Link: https://www.coderbyte.com/information/Letter%20Changes
//     Take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

// Challenge 5 - Closest Enemy

//     Read the matrix of numbers stored in strArr which will be a 2D matrix that contains only the integers 1, 0, or 2. Then from the position in the matrix where a 1 is, return the number of spaces either left, right, down, or up you must move to reach an enemy which is represented by a 2. You are able to wrap around one side of the matrix to the other as well. For example: if strArr is ["0000", "1000", "0002", "0002"] then this looks like

// Challenge 6 - Eight Queens

//     Read strArr which will be an array consisting of the locations of eight Queens on a standard 8x8 chess board with no other pieces on the board. The structure of strArr will be the following: ["(x,y)", "(x,y)", ...] where (x,y) represents the position of the current queen on the chessboard (x and y will both range from 1 to 8 where 1,1 is the bottom-left of the chessboard and 8,8 is the top-right). Your program should determine if all of the queens are placed in such a way where none of them are attacking each other. If this is true for the given input, return the string true otherwise return the first queen in the list that is attacking another piece in the same format it was provided.


// -------------------------------------------------------------------------------------
// Object Manipulation 
// Like Object.assign() but doesn't override existing properties
// (and also doesn't handle Symbol properties)

function merge(target, ...sources) {
    for(let source of sources) {
        for(let key of Object.keys(source)) {
            if (!(key in target)) { // This is different than Object.assign()
        target[key] = source[key];
    }
    }
    }
    return target;
}

// Object.assign({x: 1}, {x: 2, y: 2}, {y: 3, z: 4}) // => {x:2, y: 3, z: 4}
// merge({x: 1}, {x: 2, y: 2}, {y: 3, z: 4})
// => {x:1, y: 2, z: 4}

/*It is straightforward to write other property manipulation utilities like this merge() function. A restrict() function could delete
properties of an object if they do not appear in another template object,
for example. Or a subtract() function could remove all of the
properties of one object from another object.*/

// -------------------------------------------------------------------------------------

// Boggle JAVA
/**
 Boggle (Find all possible words in a board of characters) | Set 1
Last Updated: 18-09-2019
Given a dictionary, a method to do lookup in dictionary and a M x N board where every cell has one character. Find all possible words that can be formed by a sequence of adjacent characters. Note that we can move to any of 8 adjacent characters, but a word should not have multiple instances of same cell.

Example:
Input: dictionary[] = {"GEEKS", "FOR", "QUIZ", "GO"};
       boggle[][]   = {{'G', 'I', 'Z'},
                       {'U', 'E', 'K'},
                       {'Q', 'S', 'E'}};
      isWord(str): returns true if str is present in dictionary
                   else false.

Output:  Following words of dictionary are present
         GEEKS
         QUIZ



The idea is to consider every character as a starting character and find all words starting with it. All words starting from a character can be found using Depth First Traversal. We do depth first traversal starting from every cell. We keep track of visited cells to make sure that a cell is considered only once in a word.

 */

 /*
 // Java program for Boggle game 
class GFG { 
	// Let the given dictionary be following 
	static final String dictionary[] = { "GEEKS", "FOR", "QUIZ", "GUQ", "EE" }; 
	static final int n = dictionary.length; 
	static final int M = 3, N = 3; 

	// A given function to check if a given string is present in 
	// dictionary. The implementation is naive for simplicity. As 
	// per the question dictionary is given to us. 
	static boolean isWord(String str) 
	{ 
		// Linearly search all words 
		for (int i = 0; i < n; i++) 
			if (str.equals(dictionary[i])) 
				return true; 
		return false; 
	} 

	// A recursive function to print all words present on boggle 
	static void findWordsUtil(char boggle[][], boolean visited[][], int i, 
							int j, String str) 
	{ 
		// Mark current cell as visited and append current character 
		// to str 
		visited[i][j] = true; 
		str = str + boggle[i][j]; 

		// If str is present in dictionary, then print it 
		if (isWord(str)) 
			System.out.println(str); 

		// Traverse 8 adjacent cells of boggle[i][j] 
		for (int row = i - 1; row <= i + 1 && row < M; row++) 
			for (int col = j - 1; col <= j + 1 && col < N; col++) 
				if (row >= 0 && col >= 0 && !visited[row][col]) 
					findWordsUtil(boggle, visited, row, col, str); 

		// Erase current character from string and mark visited 
		// of current cell as false 
		str = "" + str.charAt(str.length() - 1); 
		visited[i][j] = false; 
	} 

	// Prints all words present in dictionary. 
	static void findWords(char boggle[][]) 
	{ 
		// Mark all characters as not visited 
		boolean visited[][] = new boolean[M][N]; 

		// Initialize current string 
		String str = ""; 

		// Consider every character and look for all words 
		// starting with this character 
		for (int i = 0; i < M; i++) 
			for (int j = 0; j < N; j++) 
				findWordsUtil(boggle, visited, i, j, str); 
	} 

	// Driver program to test above function 
	public static void main(String args[]) 
	{ 
		char boggle[][] = { { 'G', 'I', 'Z' }, 
							{ 'U', 'E', 'K' }, 
							{ 'Q', 'S', 'E' } }; 

		System.out.println("Following words of dictionary are present"); 
		findWords(boggle); 
	} 
} 
*/
// -------------------------------------------------------------------------------------
