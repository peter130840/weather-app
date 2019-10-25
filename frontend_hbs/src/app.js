const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();
const port = process.env.PORT || 3000; 

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views lacation
app.set('view engine', 'hbs');
app.set('views', viewsPath)
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Peter Liu'
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
         title: 'About Me',
         name: 'Peter Liu'
    })
});

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help Page',
        name: 'Peter Liu'
    })
})

app.get('/weather' , (req, res) => {
    if(!req.query.address){
         return res.send({error :'PLZ give me your address!'})
    }
    geocode(req.query.address, (error, {longtitute, latitute, location} = {}) => {
        if(error) {
            return res.send(error);
        }
        forecast(longtitute, latitute, (error, forecastData) => {
            if(error) {
                return res.send(error);
            }
            return res.send({location,forecastData});
          })
    });
})



app.get('/products', (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: 'You must provide a search tern.'
        })
    }
    console.log(req.query.search);

    res.send({
        products: []
    })
})  




app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'help not found',
        name: 'Peter Liu',
        errorMessage: 'no help found'
   })
});

app.get('*', (req, res) => {
    res.render('404', {
        title: 'page not found',
        name: 'Peter Liu',
        errorMessage: 'not found'
   })
});


app.listen(port, () => {
    console.log('started! on port ' + port);
})