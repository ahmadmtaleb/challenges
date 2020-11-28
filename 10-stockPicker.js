/**
  Stock Picker
  Have the function StockPicker(arr) take the array of numbers stored in arr which will contain integers that represent the amount in dollars that a single stock is worth, and return the maximum profit that could have been made by buying stock on day x and selling stock on day y where y > x. For example: if arr is [44, 30, 24, 32, 35, 30, 40, 38, 15] then your program should return 16 because at index 2 the stock was worth $24 and at index 6 the stock was then worth $40, so if you bought the stock at 24 and sold it at 40, you would have made a profit of $16, which is the maximum profit that could have been made with this list of stock prices.

  If there is not profit that could have been made with the stock prices, then your program should return -1. For example: arr is [10, 9, 8, 2] then your program should return -1.

  Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

function StockPicker(arr){
  let lowestPrice = arr[0]
    let profit = -1
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > lowestPrice) {
            profit = Math.max(profit, arr[i] - lowestPrice)
        } else {
            lowestPrice = arr[i]
        }
    }
    return profit
}

console.log(StockPicker([44, 30, 24, 32, 35, 30, 40, 38, 15])); // Output: 16
console.log(StockPicker([10, 9, 8, 2])); // Output: -1
console.log(StockPicker([1 ,99, 100, 10 ,50])); // Output: 99
console.log(StockPicker([100, 98, 88, 75, 50, 51, 55, 60, 75, 95, 110])); // Output: 60