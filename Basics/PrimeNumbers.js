
// To check if a number is prime or not

function isPrime(num) { 

    if (num <= 1) return false; 
  
    for (let i = 2; i <= Math.sqrt(num); i++) { 
  
      if (num % i === 0) return false; 
  
    } 
  
    return true; 
  
  } 


// Test cases
console.log(isPrime(5)); // true