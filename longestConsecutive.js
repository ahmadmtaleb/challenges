/*
Longest Consecutive
HIDE QUESTION
Have the function LongestConsecutive(arr) take the array of positive integers stored in arr and return the length of the longest consecutive subsequence (LCS). An LCS is a subset of the original list where the numbers are in sorted order, from lowest to highest, and are in a consecutive, increasing order. The sequence does not need to be contiguous and there can be several different subsequences. 

For example: if arr is [4, 3, 8, 1, 2, 6, 100, 9] then a few consecutive sequences are [1, 2, 3, 4], and [8, 9]. For this input, your program should return 4 because that is the length of the longest consecutive subsequence.

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/


/*
 SOLUTION in python
 def ArrayChallenge(arr):
  l=[]
  l2=[]
  j=1
  # code goes here
  for i in range(len(arr)):
    l=[i]
    while arr[i]+j in arr:
      l.append(arr[i]+j)
      j=j+1
    l2.append(len(l))
  return max(l2)

# keep this function call here 
print(ArrayChallenge(input()))

 */

