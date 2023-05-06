const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/prueba', (req, res) => {
   res.send('prueba!')
 })

module.exports = {
   app
}