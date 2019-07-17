// const base64 = require('base-64');

// const message = `aHROcDovL3JIY3J1aXQtaWZILnRIcnJhZ29uZ3JvdXAuY29tLw==`;

// const decodeMesage = msg => {
//   return base64.decode(message);
// };

// console.log(decodeMesage(message));

const ceaserCipher = (str, num = 7) => { //Num is set to 7
  //If num is greater than 25, we reduce it to a corresponding num between 0 and 25
  num = num % 26;
  let lowerCase = str.toLowerCase(); //Turn all letters in str to lowerCase
  let alpha = 'abcdefghijklmnopqrstuvwxyz'.split(''); //Create an array of letters
  let newStr = ''; //New string to be formed

  for (let i = 0; i < lowerCase.length; i++) {
    let currentLetter = lowerCase[i];
    if (currentLetter === ' ') {//If character is a space, add to newStr
      newStr += currentLetter;
      continue;
    }

    let currentIndex = alpha.indexOf(currentLetter);
    let newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newStr += alpha[newIndex].toUpperCase();
    }
    else newStr += alpha[newIndex];
  }

  return newStr;
}

console.log(ceaserCipher('Israel Adetunji'));
