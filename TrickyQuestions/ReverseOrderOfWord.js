
//  Write a function that reverses the order of words in a sentence without using the built-in reverse() method.

// Example:
// reverseOrderOfWord('hello world') => 'world hello'

function reverseOrderOfWord(str) {
    const words = str.split(' '); 

    const reversedWords = words.reverse(); 
  
    return reversedWords.join(' '); 

}

console.log(reverseOrderOfWord('hello world')); // 'world hello'

let str = " Tajdar E Haram, ho Nigaah-e-Karam. Wo Nigaah-e-Karam, ho Tajdar E Haram. ";
console.log(reverseOrderOfWord(str)); // ' Haram, E Tajdar ho Karam. Nigaah-e-Karam, ho Nigaah-e-Karam, E Tajdar Haram. '