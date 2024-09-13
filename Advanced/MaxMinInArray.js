
//Given an array of numbers, write a function to find the largest and smallest numbers in the array. 

const maxMinInArray = (arr) => {
    return [Math.max(...arr), Math.min(...arr)];
}