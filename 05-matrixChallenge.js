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

    let boggle = [];
    let matrixWords = strArr[0].split(', ');
    matrixWords.forEach(value => {
        boggle.push(value.split(''))
    });
    let row = boggle.length;
    let col = boggle[0].length;

    let wordToFind = strArr[1].split(',');

    let Node = function() {
        this.keys = new Map();
        this.end = false;
        this.setEnd = function() {
            this.end = true;
        };
        this.isEnd = function() {
            return this.end;
        };
    };
    
    let Trie = function() {
    
        this.root = new Node();
    
        this.add = function(input, node = this.root) {
            if (input.length == 0) {
                node.setEnd();
                return;
            } else if (!node.keys.has(input[0])) {
                node.keys.set(input[0], new Node());
                return this.add(input.substr(1), node.keys.get(input[0]));
            } else {
                return this.add(input.substr(1), node.keys.get(input[0]));
            };
        };
    
        this.isWord = function(word) {
            let node = this.root;
            while (word.length > 1) {
                if (!node.keys.has(word[0])) {
                    return false;
                } else {
                    node = node.keys.get(word[0]);
                    word = word.substr(1);
                };
            };
            return (node.keys.has(word) && node.keys.get(word).isEnd()) ? 
          true : false;
        };
    };
    function isSafe(i, j, visitedArray){
        return (i >= 0 && i < row && j >= 0 && j < col && !visitedArray[i][j]); 
    }

    let wordsFound = [];
    let visitedArray = Array.from({ length: row }, () => Array.from({ length: col }, () => false));

    function searchWord( myTrie, boggle, i, j, visitedArray, str){
        if (myTrie.end == true){
            wordsFound.push(str);
        }
        if (isSafe(i, j, visitedArray)) {
            visitedArray[i][j] = true;
            let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
            for (let k = 0; k < alphabet.length; k++) {
                if(myTrie.keys.get(alphabet[k]) != undefined){
                    let ch = alphabet[k];
                    if (isSafe(i + 1, j + 1, visitedArray) && boggle[i + 1][j + 1] == ch){
                        searchWord(myTrie.keys.get(alphabet[k]), boggle, i + 1, j + 1, visitedArray, str + ch);
                    }
                    if (isSafe(i, j + 1, visitedArray) && boggle[i][j + 1] == ch){
                        searchWord(myTrie.keys.get(alphabet[k]), boggle, i, j + 1, visitedArray, str + ch); 
                    }   
                    if (isSafe(i - 1, j + 1, visitedArray) && boggle[i - 1][j + 1] == ch){
                        searchWord(myTrie.keys.get(alphabet[k]), boggle, i - 1, j + 1, visitedArray, str + ch);
                    }    
                    if (isSafe(i + 1, j, visitedArray) && boggle[i + 1][j] == ch){
                        searchWord(myTrie.keys.get(alphabet[k]), boggle, i + 1, j, visitedArray, str + ch); 
                    } 
                    if (isSafe(i + 1, j - 1, visitedArray) && boggle[i + 1][j - 1] == ch){
                        searchWord(myTrie.keys.get(alphabet[k]), boggle, i + 1, j - 1, visitedArray, str + ch);
                    }    
                    if (isSafe(i, j - 1, visitedArray) && boggle[i][j - 1] == ch){
                        searchWord(myTrie.keys.get(alphabet[k]), boggle, i, j - 1, visitedArray, str + ch); 
                    }
                    if (isSafe(i - 1, j - 1, visitedArray) && boggle[i - 1][j - 1] == ch){
                        searchWord(myTrie.keys.get(alphabet[k]), boggle, i - 1, j - 1, visitedArray, str + ch);
                    }
                    if (isSafe(i - 1, j, visitedArray) && boggle[i - 1][j] == ch){
                        searchWord(myTrie.keys.get(alphabet[k]), boggle, i - 1, j, visitedArray, str + ch);
                    }
                }
            }
            visitedArray[i][j] = false;
        }
    }
    
    let myTrie = new Trie();
    for(let i = 0; i < wordToFind.length; i++){
        myTrie.add(wordToFind[i]);
    }

    let str = '';
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if (myTrie.root.keys.get(boggle[i][j]) != undefined ) { 
                str += boggle[i][j]; 
                searchWord(myTrie.root.keys.get(boggle[i][j]), boggle, i, j, visitedArray, str);
                str = '';
            }
        }
    }
    let result = [];
    wordToFind.forEach((element => {
        if(!wordsFound.includes(element)){
            result.push(element);
        }
    }));
    let returnStr = result.join(',');
    return returnStr?returnStr:'true'; 

}

console.log(MatrixChallenge(['rbfg, ukop, fgub, mnry', 'bog,bop,gup,fur,ruk'])); // Output: true
console.log(MatrixChallenge(['rbfg, ukop, fgub, mnry', 'rbf,rbfg,bfg,fbr,gfb,gfbr,uko,ukop,kop,oku,pok,poku,fgu,fgub,gub,ugf,bug,bugf,mnr,mnry,nry,rnm,yrn,yrnm'])); // Output: true
console.log(MatrixChallenge(['rbfg, ukop, fgub, mnry', 'ruf,rufm,bkg,bkgn,fou,four,gpb,gpby,ufm,kgn,our,pby,fur,gkb,uof,bpg,mfu,mfur,ngk,ngkb,ruo,ruof,ybp,ybpg'])); //Output: true
console.log(MatrixChallenge(['rbfg, ukop, fgub, mnry', 'rku,rkuy,bob,gog,gogm,ugr,kuy,pun,mgo,mgog,nup,yuk,yukr'])); //Output: true
console.log(MatrixChallenge(['rbfg, ukop, fgub, mnry', 'rkuyrnmg,gogmnrybpg'])); //Output: gogmnrybpg because the last character 'g' is already taken as the first character
console.log(MatrixChallenge(['rbfg, ukop, fgub, mnry', 'adbs,rbfk,mgoc,ourd'])); //Output: adbs,mgoc,ourd
console.log(MatrixChallenge(["aaey, rrum, tgmn, ball", "all,ball,mur,raeymnl,tall,true,trum"])); // Output: true
console.log(MatrixChallenge(["aaey, rrum, tgmn, ball", "all,ball,mur,raeymnl,rumk,tall,true,trum,yes"])); // Output: rumk,yes
