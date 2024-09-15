// Take  3 arrays as input and find unique elements from all arrays and print them in sorted order.

// Function to find unique elements and sort them
function processArrays(arr1, arr2, arr3) {
    // Step 1: Combine all arrays
    let combinedArray = arr1.concat(arr2).concat(arr3);

    // Step 2: Find unique elements
    let uniqueArray = [];
    for (let i = 0; i < combinedArray.length; i++) {
        let isUnique = true;
        for (let j = 0; j < uniqueArray.length; j++) {
            if (combinedArray[i] === uniqueArray[j]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            uniqueArray.push(combinedArray[i]);
        }
    }

    // Step 3: Sort the unique elements (using a simple Bubble Sort)
    for (let i = 0; i < uniqueArray.length - 1; i++) {
        for (let j = 0; j < uniqueArray.length - 1 - i; j++) {
            if (uniqueArray[j] > uniqueArray[j + 1]) {
                // Swap
                let temp = uniqueArray[j];
                uniqueArray[j] = uniqueArray[j + 1];
                uniqueArray[j + 1] = temp;
            }
        }
    }

    // Step 4: Print the result
    console.log("Sorted unique elements:", uniqueArray);
}

// // Example usage:
// const array1 = [3, 1, 4, 1, 5];
// const array2 = [2, 6, 5, 3];
// const array3 = [5, 7, 8, 2];

processArrays(array1, array2, array3); // Output: Sorted unique elements: [ 1, 2, 3, 4, 5, 6, 7, 8 ]



function findUniqueAndSort(arr1, arr2, arr3) {
    // Combine all arrays and create a Set to find unique elements
    let uniqueSet = new Set([...arr1, ...arr2, ...arr3]);

    // Convert the Set back to an array and sort it
    let sortedUniqueArray = Array.from(uniqueSet).sort((a, b) => a - b);

    // Print the result
    console.log("Sorted unique elements:", sortedUniqueArray);
}

// Example usage:
const array1 = [3, 1, 4, 1, 5];
const array2 = [2, 6, 5, 3];
const array3 = [5, 7, 8, 2];

findUniqueAndSort(array1, array2, array3); // Output: Sorted unique elements: [ 1, 2, 3, 4, 5, 6, 7, 8 ]