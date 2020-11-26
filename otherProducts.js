/*Other Products

Have the function OtherProducts(arr) take the array of numbers stored in arr and return a new list of the products of all the other numbers in the array for each element. 
For example: if arr is [1, 2, 3, 4, 5] then the new array, where each location in the new array is the product of all other elements, is [120, 60, 40, 30, 24]. The following calculations were performed to get this answer: [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)]. 
You should generate this new array and then return the numbers as a string joined by a hyphen: 120-60-40-30-24. The array will contain at most 10 elements and at least 1 element of only positive integers.

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
function OtherProducts(arr){
  let product;
  let productArray = [];
  let returnStr = '';
  for(let i = 0; i < arr.length; i++){
    product = 1;
    for (let j = 0; j < arr.length; j++){
      if (i != j){
        product *= arr[j]
      }
      else continue;
    }
    productArray.push(product);
  }
  returnStr = productArray.join('-');
  return returnStr;
}

console.log(OtherProducts([1, 2, 3, 4, 5])); // Output: 120-60-40-30-24
console.log(OtherProducts([10, 3, 5, 6, 2])); // Output: 180-600-360-300-900
console.log(OtherProducts([3, 9, 7, -2])); // Output: -126--42--54-189
console.log(OtherProducts([1,2,3,4])); // Output: 24, 12, 8, 6
console.log(OtherProducts([10, 4, 1, 6, 2])); // Output: 48-120-480-80-240
// console.log(OtherProducts([])); // Output: 
// console.log(OtherProducts([])); // Output: 
