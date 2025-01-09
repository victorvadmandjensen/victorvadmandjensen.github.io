// script.js

// set array of words and get element
const words = ["Aarhus University", "Regional Hospital Silkeborg", "Interacting Minds Centre", "UCOP", "Aarhus, Denmark"];
const animatedText = document.getElementById("animated-text");
let currentWordIndex = 0;
let currentLetterIndex = 0;

// function to type the word
function typeWord() {
  const currentWord = words[currentWordIndex];
  
  // if the current index of the letter is less than the word's length then add text context equal to the letter index of the current word
  if (currentLetterIndex < currentWord.length) {
    animatedText.textContent += currentWord[currentLetterIndex];
    currentLetterIndex++;
    setTimeout(typeWord, 100); // Adjust speed for each letter
  } else {
    setTimeout(eraseWord, 2000); // Pause before erasing
  }
}

// function to erase the word
function eraseWord() {
  const currentWord = words[currentWordIndex];
  
  // if the current letter is more than 0 then slice starting from 0 to the current letter index - 1 and decrement
  if (currentLetterIndex > 0) {
    animatedText.textContent = currentWord.slice(0, currentLetterIndex - 1);
    currentLetterIndex--;
    setTimeout(eraseWord, 100); // Adjust speed for erasing
    // if not then set the index to be the next word index modulo length which will loop back around when the index+1 equals the length
  } else {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    setTimeout(typeWord, 500); // Pause before typing the next word
  }
}

// Start the animation
typeWord();
