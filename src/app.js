const express = require('express')
const router = require('./router')
const handlebars = require('express-handlebars')

const app = express()

app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

router(app)

module.exports = app
