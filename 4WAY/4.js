// checks if Str1 is a substring of Str2 and if Str1 is a palindrome:


let Str1 = 'aba';
let Str2 = 'aabacca';

let isSubstring = true;
let j = 0; //j is a counter variable that keeps track of the current position in Str1 while iterating through Str2.
            // It's initialized to 0 at the beginning.

for (let i = 0; i < Str2.length; i++) {
  if (Str2[i] === Str1[j]) {
    j++;
    if (j === Str1.length) {
      isSubstring = true;
      break;
    }
  } else {
    j = 0;
  }
}

let isPalindrome = true;
let reversedStr1 = '';

for (let i = Str1.length - 1; i >= 0; i--) {
  reversedStr1 += Str1[i];
}

for (let i = 0; i < Str1.length; i++) {
  if (Str1[i] !== reversedStr1[i]) {
    isPalindrome = false;
    break;
  }
}

console.log(Is Str1 a substring of Str2? ${isSubstring});
console.log(Is Str1 a palindrome? ${isPalindrome});


// Function to check if a string is a substring of another string
function isSubstring(str1, str2) {
    for (let i = 0; i <= str2.length - str1.length; i++) {
        let match = true;
        for (let j = 0; j < str1.length; j++) {
            if (str2[i + j] !== str1[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return true;
        }
    }
    return false;
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;
    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

let Str1 = 'aba';
let Str2 = 'aabacca';

console.log(`Is Str1 a substring of Str2? ${isSubstring(Str1, Str2)}`);
console.log(`Is Str1 a palindrome? ${isPalindrome(Str1)}`);