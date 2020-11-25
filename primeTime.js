/*
 Prime Time
HIDE QUESTION
Have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16.

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
/**
 * Solution in python
 * def MathChallenge(num):

  # code goes here
  flag=0
  for i in range(2,num):
    if num%i == 0:
      flag=1
      break
  if flag == 0:
    return 'true'
  else:
    return 'false'

# keep this function call here 
print(MathChallenge(input()))
 */
