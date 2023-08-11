/**
 * This function iterstes through the input string in reverse order and constructs a reversed string by appending each character
 * 
 * @param {*} str The input string to be reversed
 * @returns reversed string
 */
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  // Test the function
  const originalString = 'Hello, world!';
  const reversedString = reverseString(originalString);
  
  console.log(`Original String: ${originalString}`);
  console.log(`Reversed String: ${reversedString}`);
  