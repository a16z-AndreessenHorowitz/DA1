const express = require('express')
const app = express()

//dotenv
require('dotenv').config()

//database
const database=require('./config/database')
database.connect()

//body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.set('views', `${__dirname}/views`)
app.set('view engine', 'pug')

const port = process.env.PORT


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
