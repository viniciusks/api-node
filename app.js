// Adiciona as bibliotecas à aplicação
var express = require('express')
var bodyParser = require('body-parser')

// Configura o express à app
var app = express()

// Variáveis
var port = 3000

// Configura a forma que irá tratar as requisições JSON
app.use(bodyParser.json())

// Rotas da API
app.get("/", function(req, res) {
    var info = {
        status: 1,
        msg: "Hello World",
        error: "",
        data: []
    }

    res.send(JSON.stringify(info))
})

app.get("/maps", function(req, res) {
    var info = {
        status: 1,
        msg: "Latitude e longitude",
        error: "",
        data: [
            {
                lat: -25.470991, 
                lon: -49.271036
            },
            {
                lat: -0.935586,
                lon: -49.635540
            },
            {
                lat: -2.485874, 
                lon: -43.128493
            }
        ]
    }

    res.send(JSON.stringify(info));
})

app.listen(port, function() {
    console.log("Server is running in port " + port + "!")
})