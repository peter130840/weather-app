require('dotenv').config();
const request = require('request');
const geocode = require('./utils/geocode');

geocode('Taipei', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});