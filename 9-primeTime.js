/*
 Prime Time
Have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16.

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

function PrimeTime(num){
  for(let i = 2; i <= Math.sqrt(num); i++){
    if(num % i == 0){
      return 'false';
    }
  }
  return 'true';
}
for(let i = 0; i <= 23; i++){
  console.log(i, PrimeTime(i));
}