const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/prueba', (req, res) => {
   res.send('prueba!')
 })

app.get('/prueba2', (req, res) => {
   res.send('prueba2!')
 })

module.exports = {
   app
}