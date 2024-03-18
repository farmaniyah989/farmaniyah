// Importing required modules
const axios = require('axios');
const _ = require('lodash');

// Function to generate a random number within a specified range
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to fetch random cat images from an API
async function fetchRandomCatImages(numImages) {
  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${numImages}`);
    return response.data.map(image => image.url);
  } catch (error) {
    console.error('Error fetching cat images:', error);
    return [];
  }
}

// Function to capitalize the first letter of each word in a string
function capitalizeWords(str) {
  return _.startCase(_.toLower(str));
}

// Exporting functions
module.exports = {
  generateRandomNumber,
  fetchRandomCatImages,
  capitalizeWords
};
