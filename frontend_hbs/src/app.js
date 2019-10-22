const path = require('path');
const express = require('express');
const hbs = require('hbs');

//console.log(__dirname);
//console.log(path.join(__dirname, '../public'));

const app = express();

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


app.get('/weather', (req, res) => {
    res.send({
        location: 'Taipei',
        forecast: 'earthquake coming!'
    });
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

app.listen(3000, () => {
    console.log('started! on port 3000');
});