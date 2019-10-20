require('dotenv').config();
const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// let longtitute,latitute;
// const urlMapbox = `https://api.mapbox.com/geocoding/v5/mapbox.places/Taipei%20Ci444ty.json?access_token=${process.env.MAPBOXSECRETKEY}&limit=1`
// request({url: urlMapbox, json: true},(error, response) =>{
//     if(error){
//         console.log('Unable to connect to mapbox service!');
//     } else if(response.body.features.length === 0){
//         console.log('Unable to find location')
//     } else {
//         latitute = response.body.features[0].center[1];
//         longtitute = response.body.features[0].center[0];
//         console.log('latitute: ' + latitute + ' longtitute: ' + longtitute);
//     }
// })


// const urlDarksky = `https://api.darksky.net/forecast/${process.env.DARKSKYSECRETKEY}/25.08,121.44?lang=zh-tw&units=si`;


// request({ url: urlDarksky, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect to weather service!');
//     } else if(response.body.error){
//         console.log('Unable to find location')
//     }
//     else{
//         console.log('It is curently ' + response.body.currently.temperature + ' degrees out.')
//         console.log('there is a ' + response.body.currently.precipProbability + '% chance of rain.')
//     }

// });



geocode('Taipei', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
    forecast(data.longtitute, data.latitute, (error, data) => {
        console.log('Error', error)
        console.log('Data', data)
      })
});



