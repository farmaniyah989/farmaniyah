# Farmaniyah

Farmaniyah is a Node.js module that provides a collection of magical helper functions to simplify common tasks in your applications.

## Installation

You can install farmaniyah via npm: `npm install farmaniyah`

## Usage
```javascript
const { generateRandomNumber, fetchRandomCatImages, capitalizeWords } = require('magic-helpers');

// Generate a random number between 1 and 100
const randomNumber = generateRandomNumber(1, 100);
console.log('Random Number:', randomNumber);

// Fetch 3 random cat images
fetchRandomCatImages(3)
  .then(images => console.log('Random Cat Images:', images))
  .catch(error => console.error('Error fetching cat images:', error));

// Capitalize the first letter of each word in a string
const capitalizedString = capitalizeWords('hello world');
console.log('Capitalized String:', capitalizedString);
```