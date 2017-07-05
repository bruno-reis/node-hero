/**
 * Created by bruno on 05/07/17.
 */
const express = require('express')
const app = express()
const pg = require('pg')
const connString = 'postgres://bruno:admin@localhost/node_hero'

pg.connect(connString, (err, client, done) => {
  if (err) { return console.error('Error fetching client from pool', err) }

  client.query('select $1::varchar AS my_first_query', ['node_hero'], (err, result) => {
    done()
    if (err) { return console.error('Error happened during query', err) }
    console.log(result.rows[0])
    process.exit(0)
  })

})

app.post('/users', (req, res, next) => {
  const user = req.body

  pg.connect(connString, (err, client, done) => {
    if (err) { return next(err) }

    client.query('insert into users (name, age) values ($1, $2);', [user.name, user.age], (err, result) => {
        done()
        if (err) { return next(err) }
        res.send(200)
    })
  })

})

app.get('/users', (req, res, next) => {

  pg.connect(connString, (err, client, done) => {
    if (err) {return next(err)}

    client.query('select name, age from users;', [], (err, result) => {
      done()
      if (err) {return next(err)}
      res.json(result.rows)
    })
  })
  
})

