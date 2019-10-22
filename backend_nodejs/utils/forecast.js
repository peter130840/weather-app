require('dotenv').config();
const request = require('request');

const forecast = (latitute, longtitute, callback) => {
    const urlDarksky = `https://api.darksky.net/forecast/${process.env.DARKSKYSECRETKEY}/${longtitute},${latitute}?lang=zh-tw&units=si`;
    request({ url: urlDarksky, json: true }, (error, response) => {
        const {error: resError} = response.body;
        const {temperature, precipProbability} = response.body.currently;
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (resError) {
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, 'It is curently ' + temperature +
                ' degrees out. there is a ' + precipProbability + '% chance of rain.')
        }

    });
}

module.exports = forecast