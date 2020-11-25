/*Other Products
HIDE QUESTION
Have the function OtherProducts(arr) take the array of numbers stored in arr and return a new list of the products of all the other numbers in the array for each element. For example: if arr is [1, 2, 3, 4, 5] then the new array, where each location in the new array is the product of all other elements, is [120, 60, 40, 30, 24]. The following calculations were performed to get this answer: [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)]. You should generate this new array and then return the numbers as a string joined by a hyphen: 120-60-40-30-24. The array will contain at most 10 elements and at least 1 element of only positive integers.

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

/* Solution 
def ArrayChallenge(arr):
  prod=1
  for i in arr:
    prod *= i
  for i in range(len(arr)):
    arr[i] =int( prod/arr[i] )
  # code goes here
  arr = [str(i) for i in arr]
  return '-'.join(arr)

# keep this function call here 
print(ArrayChallenge(input()))
*/