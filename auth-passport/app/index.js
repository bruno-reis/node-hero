const express = require('express')
const passport = require('passport')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)

const app = express()

app.use(session({
  store: new RedisStore({url: config.redisStore.url}),
  secret: config.redisStore.secret,
  resave: false,
  svaUninitialized: false
}))
app.use(passport.initialze())
app.use(passport.session())

