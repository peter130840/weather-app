require('dotenv').config();
const request = require('request');
const url = `https://api.darksky.net/forecast/${process.env.SECRETKEY}/37.8267,-122.4233`;

request({ url: url, json: true}, (error, response) => {
    console.log(response.body.currently);
})