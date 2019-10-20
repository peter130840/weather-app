require('dotenv').config();
const request = require('request');

const forecast = (latitute, longtitute, callback) => {
    const urlDarksky = `https://api.darksky.net/forecast/${process.env.DARKSKYSECRETKEY}/${longtitute},${latitute}?lang=zh-tw&units=si`;
    request({ url: urlDarksky, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, 'It is curently ' + response.body.currently.temperature +
                ' degrees out. there is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }

    });
}

module.exports = forecast