const express = require("express")
const app = express()
app.get('/dc', function (req, res) {
    const herois = ['Mulher Maravilha', 'Superman', 'Batman']
    res.send(herois)
})

app.get('/marvel', function (req, res) {
    const herois = ['Homem Aranha','Capitã Marvel', 'Capitão America']
    res.send(herois)
})

app.listen(3000)


