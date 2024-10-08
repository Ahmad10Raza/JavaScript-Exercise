
// Write a function that checks if a given string is a palindrome, considering only alphanumeric characters and ignoring case. 

// Example: Hope
// Output: Not a palindrome

// Approach: 
// Create a function isPalindrome that takes a string as an argument.
// Remove all non-alphanumeric characters from the string using the replace method with a regular expression.
// Convert the string to lowercase using the toLowerCase method.
// Compare the original string with its reverse using the split, reverse, and join methods.
// Return true if the strings are equal, indicating that the input string is a palindrome.
// Return false if the strings are not equal, indicating that the input string is not a palindrome.

function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
  }

  function isPalindromeWithoutBuiltIn(str) {
    let cleanStr = '';
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
      if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
        cleanStr += char;
      }
    }

    let left = 0;
    let right = cleanStr.length - 1;
    while (left < right) {
      if (cleanStr[left] !== cleanStr[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  console.log(isPalindromeWithoutBuiltIn(str)); 
  console.log(isPalindromeWithoutBuiltIn(str1));

    const str = "Hope";
    console.log(isPalindrome(str)); 
    const str1 = "aba";
    console.log(isPalindrome(str1));