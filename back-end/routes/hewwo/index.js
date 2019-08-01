var express = require('express')
var routes = express.Router()
var UWU = require('./sayhewwo.js')


routes.get('/sayhewwo', UWU)








module.exports = routes;