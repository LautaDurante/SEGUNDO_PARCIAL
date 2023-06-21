const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
const mariadbs = require('./db/mariadb')
const mongodbs = require('./db/mongodb')

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.get('/check-mariadb-connection', (_req, res) => {
  mariadbs.authenticate().then(() => {
    res.json({
      msg: 'Base de datos mysql conectada'
    })
  }).catch((err) => {
    res.status(400).json({
      msg: 'Error al conectarse a la base de datos mariaDB'
    })
  })
})

app.get('/check-mongodb-connection', (_req, res) => {
  mongodbs().then(() => {
    res.json({
      msg: 'Base de datos mongoDB conectada'
    })
  }).catch((err) => {
    res.status(400).json({
      msg: 'Error al conectarse a la base de datos mongoDB'
    })
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
})
