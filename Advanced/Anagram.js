
// Write a function that determines if two strings are anagrams of each other

// Example:
// Anagram('hello', 'llohe') => true
// Anagram('hello', 'lloha') => false

function Anagram(str1, str2) {
    const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
}

const str1 = "hello";
const str2 = "llohe";
console.log(Anagram(str1, str2));



