require('dotenv').config();
const request = require('request');
//to fetch the latitude and longitude from mapbox
// let longtitute,latitute;
// const urlMapbox = `https://api.mapbox.com/geocoding/v5/mapbox.places/Taipei%20City.json?access_token=${process.env.MAPBOXSECRETKEY}&limit=1`
// request({url: urlMapbox, json: true},(error, response) =>{
//     latitute = response.body.features[0].center[1];
//     longtitute = response.body.features[0].center[0];
//     console.log('latitute: ' + latitute + ' longtitute: ' + longtitute);

// })


const urlDarksky = `https://api.darksky.net/forecast/${process.env.DARKSKYSECRETKEY}/25.08,121.44?lang=zh-tw&units=si`;


request({ url: urlDarksky, json: true}, (error, response) => {
    if(error){
        console.log('Unable to connect to weather service!');
    } else if(response.body.error){
        console.log('Unable to find location')
    }
    else{
        console.log('It is curently ' + response.body.currently.temperature + ' degrees out.')
        console.log('there is a ' + response.body.currently.precipProbability + '% chance of rain.')
    }

});
