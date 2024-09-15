const readline = require('readline');
 
// Write a function that takes three arrays of integers and returns a new array containing the unique elements that appear in exactly one of the input arrays. The input arrays are not necessarily sorted, but the output array should be sorted in ascending order.

function getUniqueSortedElements(arr1, arr2, arr3) {
    var combined = arr1.concat(arr2).concat(arr3);
    var uniqueElements = [];
    var elementCount = {};

    // Count occurrences of each element
    for (var i = 0; i < combined.length; i++) {
        var element = combined[i];
        if (elementCount[element] === undefined) {
            elementCount[element] = 1;
        } else {
            elementCount[element]++;
        }
    }

    // Collect elements that appear exactly once
    for (var key in elementCount) {
        if (elementCount[key] === 1) {
            uniqueElements.push(parseInt(key));
        }
    }

    // Sort the unique elements
    for (var i = 0; i < uniqueElements.length - 1; i++) {
        for (var j = 0; j < uniqueElements.length - i - 1; j++) {
            if (uniqueElements[j] > uniqueElements[j + 1]) {
                var temp = uniqueElements[j];
                uniqueElements[j] = uniqueElements[j + 1];
                uniqueElements[j + 1] = temp;
            }
        }
    }

    return uniqueElements;
}

// Example usage:
var arr1 = [14, 63, 14, 1];
var arr2 = [1, 1, 6, 8];
var arr3 = [3, 3, 3, 63];
var result = getUniqueSortedElements(arr1, arr2, arr3);
console.log(result); // Output: [6, 8]



// const readline = require('readline');

// Create an interface for reading input from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to prompt the user for input and process it into an array
const promptForArray = (question, callback) => {
    rl.question(question, (input) => {
        const arr = input.split(' ').map(Number);
        callback(arr);
    });
};

// Prompt the user for three arrays
promptForArray('Please enter numbers for the first array separated by spaces: ', (arr1) => {
    promptForArray('Please enter numbers for the second array separated by spaces: ', (arr2) => {
        promptForArray('Please enter numbers for the third array separated by spaces: ', (arr3) => {
            // Handle the arrays
            console.log('First array:', arr1);
            console.log('Second array:', arr2);
            console.log('Third array:', arr3);

            // Call the function with the input arrays
            const result = getUniqueSortedElements(arr1, arr2, arr3);
            console.log('Unique elements:', result);

            // Close the interface
            rl.close();
        });
    });
});