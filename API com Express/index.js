const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/userRoutes')

const app = express()
const port = 3000

app.use(bodyParser.json())

userRoute(app)

app.get('/', (req, res) => {
    res.send('Olá mundo')
} )

app.listen(port, () => {
   console.log('Api rodando na porta 3000!');
})