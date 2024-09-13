function findElementIndex(arr, element) { 

    const index = arr.indexOf(element); 
  
    return index !== -1 ? index : -1; 
  
  } 

console.log(findElementIndex([1, 2, 3, 4, 5], 3)); // 2