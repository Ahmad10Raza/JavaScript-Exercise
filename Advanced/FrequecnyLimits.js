// Implement a debounce function in JavaScript that limits the frequency of a function’s execution when it’s called repeatedly within a specified time frame. 

// The debounce function should take two arguments: a function and a delay in milliseconds. The function should return a new function that limits the frequency of the original function’s execution.

// The debounce function should work as follows:

function debounce(func, delay) {
    let timer;
    return function() {
        clearTimeout(timer); // Clear the previous timer
        timer = setTimeout(() => { // Set a new timer
            func.apply(this, arguments); // Call the function
        }, delay);
    };
}