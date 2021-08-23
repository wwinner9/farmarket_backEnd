const express = require('express')
const mongoose = require('mongoose')
const Routes = require('./routes')

const server = express()
mongoose.connect('mongodb+srv://wwinner:wwinner@cluster0.qkvoz.mongodb.net/farmarket?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

server.use(express.json())
server.use(Routes)

server.listen(3030)