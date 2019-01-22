const express = require('express')
const app = express()
const colors = require('colors');
const morgan = require('morgan')
const port = 3000


app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(colors.rainbow("runninf on the port 3000"))
})