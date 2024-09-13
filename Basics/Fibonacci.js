function fibonacci(n) {
    var n1=0;
    var n2=1;
    var count=2;    
    var n3;
    console.log(n1,n2);
    while(count<n){
     n3=n1+n2;
     console.log(n3); //print current element
     n1=n2;
     n2=n3;
     count++;
    }
  }


  function fibonacciSequence(numTerms) { 

    if (numTerms <= 0) return []; 
  
    if (numTerms === 1) return [0]; 
  
     
  
    let sequence = [0, 1]; 
  
    while (sequence.length < numTerms) { 
  
      let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2]; 
  
      sequence.push(nextNumber); 
  
    } 
  
    return sequence; 
  
  } 
  
  fibonacci(8) //0 1 1 2 3 5 8 13
  console.log(fibonacciSequence(8)); // [0, 1, 1, 2, 3, 5, 8, 13]