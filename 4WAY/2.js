// Determine if a string can form a palindrome by removing at most one character.


function canFormPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    let skip = false;
  
    while (left < right) {
      if (str[left] === str[right]) {
        left++;
        right--;
      } else if (skip) {
        return false;
      } else {
        if (str[left + 1] === str[right]) {
          left++;
          skip = true;
        } else if (str[left] === str[right - 1]) {
          right--;
          skip = true;
        } else {
          return false;
        }
      }
    }
  
    return true;
  }
  
  console.log(canFormPalindrome("abca")); // true
  console.log(canFormPalindrome("abcde")); // false


function canFormPalindromeByRemovingOneChar(str) {
    function isPalindrome(s, left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return isPalindrome(str, left + 1, right) || isPalindrome(str, left, right - 1);
        }
        left++;
        right--;
    }

    return true;
}

console.log(canFormPalindromeByRemovingOneChar("abca")); // true
console.log(canFormPalindromeByRemovingOneChar("abcde")); // false