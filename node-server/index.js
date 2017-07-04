/**
 * Created by bruno on 04/07/17.
 */
const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000

const app = express()

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('home', {name: 'Bruno'})
})

app.listen(port, (err) => {
  if (err) { return console.log('Error happened', err)}

  console.log(`Server is listening on ${port}`)
})
