const express = require("express")
const app = express()

const herois = ['Mulher Maravilha', 'Superman', 'Batman']

app.get('/herois', function (req, res) {
    res.send(herois)
})

app.get('/herois/:id', function (req, res) {
    const id = req.params.id
    res.send(herois[id - 1])
})

app.use(express.json())
app.post('/herois', function (req, res) {
    let novoHeroi = req.body.nome
    herois.push(novoHeroi)
    res.send("ok")
})

app.listen(3000)