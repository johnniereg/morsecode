const fs = require('fs');

const morseCode = {
  'a': '.-',
  'b': '-...',
  'c': '-.-.',
  'd': '-..',
  'e': '.',
  'f': '..-.',
  'g': '--.',
  'h': '....',
  'i': '..',
  'j': '.---',
  'k': '-.-',
  'l': '.-..',
  'm': '--',
  'n': '-.',
  'o': '---',
  'p': '.--.',
  'q': '--.-',
  'r': '.-.',
  's': '...',
  't': '-',
  'u': '..-',
  'v': '...-',
  'w': '.--',
  'x': '-..-',
  'y': '-.--',
  'z': '--..',
  ' ': '/',
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
  '0': '-----'
};


function convertToMorse(string) {

  let noBadChars = string.replace(/[^0-9a-z\s]/gi, '');
  let brokenUpLetters = noBadChars.toLowerCase().split("");

  let morseArray = [];

  brokenUpLetters.forEach(function(character) {
    morseArray.push(morseCode[character]);
  });

  let morseCodeTranslation = morseArray.join(" ");

  fs.writeFile("results/morsecode.txt", morseCodeTranslation, function (err) {
    if (err) throw err;
    console.log("Your code has been saved.");
  } );
}



convertToMorse("Hello $```__World");
