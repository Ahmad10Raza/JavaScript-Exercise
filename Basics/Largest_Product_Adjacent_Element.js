// Here program is give largest product of adjacent two Element 
// form array in this program last adjacent element 3,7 that mean 21 is answer


function LPAE(inputArray){
    let largestProduct=inputArray[0]*inputArray[1];
    for(let i=0;i<inputArray.length-1;i++){
        const product =inputArray[i]*inputArray[i+1];
        largestProduct = largestProduct < product ? product : largestProduct;
    }
    return largestProduct
}

console.log(LPAE([3,6,-2,-5,7,3]))