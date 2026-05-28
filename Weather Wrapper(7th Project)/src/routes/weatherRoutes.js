const express = require("express")
const Router = express.Router()
const controller = require("../controller/weatherController")

    Router.get("/bycity",controller.getWeatherByCity)
    Router.get("/bycords",controller.getWeatherByCords)
module.exports =    Router;

