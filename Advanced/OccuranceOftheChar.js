
// Write a function to count the number of occurrences of a character in a string.

// Example:
// OccuranceOftheChar('hello', 'l') => 2

function OccuranceOftheChar(str, char) {

    const charCount = {};
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]]) {
            charCount[str[i]]++;
        } else {
            charCount[str[i]] = 1;
        }
    }
    return charCount[char] || 0;
}

function countCharacterOccurrences(str) { 

    const charCount = {}; 
  
    for (let char of str) { 
  
      charCount[char] = (charCount[char] || 0) + 1; 
  
    } 
  
    return charCount; 
  
  } 


const str = "hello";
const char = "l";
console.log(OccuranceOftheChar(str, char)); // Output: 2
console.log(countCharacterOccurrences(str)); // Output: { h: 1, e: 1, l: 2, o: 1 }