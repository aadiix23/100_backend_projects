require("dotenv").config();
const BASE = process.env.OPENWEATHER_BASE
const KEY = process.env.OPENWEATHER_KEY;
const axios = require("axios")
const getByCity = async(city,units = "metric")=>{
    return fetchAndShape({q:city,units})
}
const getByCords = async(lat,lon,units = "metric")=>{
    return fetchAndShape({lat,lon,units})
};
async function fetchAndShape(params) {
    try {
        const {data} = await axios.get(`${BASE}/weather`,{
            params:{...params,appid:KEY},
            timeout:5000,
        })
    const unit = params.units === "imperial" ? "°F" : "°C";
    return {
      city:        data.name,
      country:     data.sys.country,
      description: data.weather[0].description,
      temp:        `${Math.round(data.main.temp)}${unit}`,
      feels_like:  `${Math.round(data.main.feels_like)}${unit}`,
      humidity:    `${data.main.humidity}%`,
      wind_speed:  `${data.wind.speed} m/s`,
      fetched_at:  new Date().toISOString(),
    };
    } catch (error) {
        if(error.response){
            const s = error.response.status;
            if(s===404) throw {status:404,message:"City Not Found"}
            if(s===401) throw {status:401, message :"Invalid api key "}
            throw { status: 502, message: "Weather API unavailable" };
        }
        throw { status: 500, message: error.message || "Internal Server Error" };
    }
    
}
module.exports = {getByCords,getByCity}