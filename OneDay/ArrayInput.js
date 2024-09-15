const readline = require('readline');

// Create an interface for reading input from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
rl.question('Please enter numbers separated by spaces: ', (input) => {
    // Process the input into an array
    const arr = input.split(' ').map(Number);

    // Handle the array
    console.log('You entered the array:', arr);

    // Close the interface
    rl.close();
});