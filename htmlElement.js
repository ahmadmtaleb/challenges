/*
    HTML ElEMENTS
        Have the function StringChallenge(str) read the str parameter being passed which will be a string of HTML DOM elements and plain text. 
        The elements that will be used are: b, i, em, div, p. 

        For example: if str is "<div><b><p>hello world</p></b></div>" then this string of DOM elements is nested correctly so your program should return the string true.

        If a string is not nested correctly, return the first element encountered where, if changed into a different element, would result in a properly formatted string. 
        If the string is not formatted properly, then it will only be one element that needs to be changed. 

        For example: if str is "<div><i>hello</i>world</b>" then your program should return the string div because if the first <div> element were changed into a <b>, the string would be properly formatted.

*/

function StringChallenge(str) { 
    // code goes here  
    let strReturn = ''
    let openingTags = str.match(/<\w+>/g);
    // console.log(openingTags)
    let closingTags = str.match(/(<\/\w+>)/g).reverse();
    // console.log(closingTags)
    let strObject = {
        '<div>':'</div>',
        '<p>':'</p>',
        '<b>':'</b>',
        '<i>':'</i>',
        '<em>':'</em>'
    }
    
    for(let i = 0; i < openingTags.length;i++){
        let  searchedTag = strObject[openingTags[i]];
        if(closingTags.includes(searchedTag)){
        closingTags.splice(closingTags.indexOf(searchedTag), 1)
        }
        else {
            strReturn = openingTags[i].replace(/<|>/g, '');
            return strReturn
        }
        
    }
    strReturn = 'true'
    return strReturn; 
    
}
let str1 = "<div><b><p>hello world</p></b></div>" // output = true
let str2 = "<div><i>hello</i>world</b>" // output = div 
let str3 = "<div>abc</div><p><em><i>test test test</b></em></p>" //output = i
let str4 = "<div><div><b><b/></div></p>" //output = div
let str5 = "<p><div><b><b/></div></p>"   // "b"
let str6 = "<p><div></p></div>" // "p" (wrong order) // didn't take the order into consideration 
let str7 = "<p><div><b></b>" // "p" (not closed at all)
let str8 = "<p><div></b></div></p>" // "/b" (not opened) //didn't take the closing tag into consideration
let str9 = "<p><div><b></b></div></p>" //true

console.log(StringChallenge(str9))
