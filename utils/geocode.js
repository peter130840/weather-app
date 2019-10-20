require('dotenv').config();
const request = require('request');

const geocode = (address, callback) => {
    const urlMapbox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${process.env.MAPBOXSECRETKEY}&limit=1`
    request({url: urlMapbox, json: true}, (error, response) => {
        if(error) {
            callback('Unable to find location', undefined);
        }else if (response.body.features.length ===0) {
            callback('Unable to find location. Try another search.', undefined);
        }else {
            callback(undefined, {
                latitute: response.body.features[0].center[1],
                longtitute: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
};

module.exports = geocode;