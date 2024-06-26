const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000
//HTTP logger
app.use(morgan('combined'))
//Template engine
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')

app.get('/trang-chu', (req, res) => {
  res.render('home')
})
//127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})