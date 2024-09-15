// Sort an array such that even numbers precede odd numbers.


let arr = [1,2,3,4,5,6,7,8,9,10];
let even = [];
let odd  = [];

for (let i=0;i<arr.length;i++){
    if(arr[i] % 2 == 0){
        even.push(arr[i]);
    } else{
        odd.push(arr[i]);
    }

}
let sortedArr = even.concat(odd);
console.log(sortedArr);

function sortEvenOdd(arr) {
    let even = [];
    let odd = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    
    return even.concat(odd);
}

// Example usage:
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sortedArr = sortEvenOdd(arr);
console.log(sortedArr);