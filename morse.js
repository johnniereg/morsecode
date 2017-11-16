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

  let brokenUpLetters = string.replace(/[^0-9a-z\s]/gi, '').toLowerCase().split("");

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

let userInput = process.argv;

if (userInput.length <= 2) {
  console.log(`Please provide an input to convert: <node morse.js "Convert this">`);
} else if (userInput.length >= 4) {
  console.log(`Put your whole input in a set of quotes: <node morse.js "Convert this">`);
} else {
  convertToMorse(userInput[2]);
}

