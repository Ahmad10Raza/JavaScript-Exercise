function factorial(number) { 

  if (number === 0 || number === 1) { 

    return 1; 

  } else { 

    return number * factorial(number - 1); 

  } 
} 
  console.log(findFib(5));
  // 5
  
  console.log(findFib(9));
  // 34