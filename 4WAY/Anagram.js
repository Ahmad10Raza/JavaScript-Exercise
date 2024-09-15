function areAnagrams(str1, str2) {
    // Remove any non-alphabetic characters and convert to lowercase
    const normalize = str => str.replace(/[^a-z]/gi, '').toLowerCase();
    
    // Sort the characters in the string
    const sorted = str => normalize(str).split('').sort().join('');
    
    return sorted(str1) === sorted(str2);
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false