const readline = require('readline');

// Create an interface for reading input from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
rl.question('Please enter your name: ', (name) => {
    // Handle the input
    console.log(`Hello, ${name}!`);

    // Close the interface
    rl.close();
});