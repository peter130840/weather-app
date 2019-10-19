require('dotenv').config();
const request = require('request');
const url = `https://api.darksky.net/forecast/${process.env.SECRETKEY}/25.08,121.44?lang=zh-tw&units=si`;

request({ url: url, json: true}, (error, response) => {
    console.log('It is curently ' + response.body.currently.temperature + ' degrees out.')
    console.log('there is a ' + response.body.currently.precipProbability + '% chance of rain.')
})