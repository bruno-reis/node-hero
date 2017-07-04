const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(port, (err) => {
  if (err) { return console.log('Error happened', err)}

  console.log(`Server is listening on ${port}`)
})