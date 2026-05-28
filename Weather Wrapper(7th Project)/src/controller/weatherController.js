const express = require("express");
const service = require("../services/weatherService")

const getWeatherByCity = async(req,res)=>{
    try {
        const {city,units}= req.query;
        const data = await service.getByCity(city,units);
        res.status(201).json(data)
    } catch (error) {
        const status = error.status || 500;
        res.status(status).json(
        {
            error: error.message || "Internal Server Error"
        }
        )
    }
    
}
const getWeatherByCords = async(req,res)=>{
    try {
        const {lat,lon,units}= req.query;
        const data = await service.getByCords(lat,lon,units)
        res.status(201).json(data)
    } catch (error) {
        const status = error.status || 500;
        res.status(status).json(
        {
            error: error.message || "Internal Server Error"
        }
        )
    }
    
}
module.exports={getWeatherByCity,getWeatherByCords}