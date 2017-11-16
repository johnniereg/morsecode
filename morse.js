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
  // Takes the input, removes non-alphanumeric or spaces.
  // Converts to lower case and puts each character into an array.
  let brokenUpLetters = string.replace(/[^0-9a-z\s]/gi, '').toLowerCase().split("");

  // Takes the input and makes it filename friendly.
  let fileName = string.replace(/[^0-9a-z]/gi, '').toLowerCase();
  console.log(fileName);

  // Variable to hold converted characters.
  let morseArray = [];

  // Loop over the array of input characters and put their converted
  // versions into the morseArray.
  brokenUpLetters.forEach(function(character) {
    morseArray.push(morseCode[character]);
  });

  // Turn the morse array into a string, with spaces between words
  // as per standard morse code convention.
  let morseCodeTranslation = morseArray.join(" ");

  // Write a file usig the input as the file name and save
  // in the results folder that contains the translated string.
  fs.writeFile(`results/${fileName}.txt`, morseCodeTranslation, function (err) {
    if (err) throw err;
    console.log("Your code has been saved.");
  } );
}

// Holds user input.
let userInput = process.argv;

// Makes sure user input isn't empty.
if (userInput.length <= 2) {
  console.log(`Please provide an input to convert: <node morse.js "Convert this">`);

// Makes sure there is only one argument being passed in.
} else if (userInput.length >= 4) {
  console.log(`Put your whole input in a set of quotes: <node morse.js "Convert this">`);

} else {
  convertToMorse(userInput[2]);
}

