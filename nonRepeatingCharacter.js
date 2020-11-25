/*
Nonrepeating Character
HIDE QUESTION
Have the function NonrepeatingCharacter(str) take the str parameter being passed, which will contain only alphabetic characters and spaces, and return the first non-repeating character. For example: if str is "agettkgaeee" then your program should return k. The string will always contain at least one character and there will always be at least one non-repeating character.

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

/*Solution 
def SearchingChallenge(str1):
  
  for i in range(len(str1)):
    if str1[i] not in str1[i+1:]: 
      if str1[i] not in str1[0:i]:
        if str1[i].isspace() == False:
          var=str1[i]
          break 
  # code goes here
  return var

# keep this function call here 
print(SearchingChallenge(input()))
*/