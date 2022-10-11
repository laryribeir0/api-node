const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const { response } = require("express")
const http = require ("http")

const app = express()

app.use('dev')
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


let db = [
    {'1': {Nome:'Laura', Idade: '40'}},
    {'2': {Nome: 'Maria', Idade: '25'}},
    {'3': {Nome: 'Caroline', Idade: '30'}}
]

app.listen(21262, () => {

    console.log('Express start at http://localhost:21262')

})
