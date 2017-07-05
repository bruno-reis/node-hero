/**
 * Created by bruno on 05/07/17.
 */
const path = require('path')
const express = require('express')
const rp = require('request-promise-native')
const exphbs = require('express-handlebars')

const app = express()

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/city', (req, res) => {
  rp({
    uri:'http://apidev.accuweather.com/locations/v1/search',
    qs: {q: req.params.city, apiKey: 'api-key'},
    json: true
  })
    .then( data => res.render('index', data))
    .catch( err => {
      console.log(err)
      res.render('error')
    })
})

app.listen(3000)

