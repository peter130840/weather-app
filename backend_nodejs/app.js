require('dotenv').config();
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];
if(!address){
    console.log('plz provide location!');
} else{
    geocode(address, (error, {longtitute, latitute, location} = data) => {
        if(error) {
            return console.log(error);
        }
        forecast(longtitute, latitute, (error, forecastData) => {
            if(error) {
                return console.log(error);
            }
            console.log(location);
            console.log(forecastData);
          })
    });
}






