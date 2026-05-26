const axios = require("axios");
const cache = require("../cache/cache.js");

const getNumber = async (number) => {
    const cached = cache.get(number);
    if (cached) {
        return {
            source: "cache",
            data: cached
        };
    }

    const response = await axios.get(`https://api.api-ninjas.com/v1/facts?number=${number}`, {
        headers: {
            "X-Api-Key": process.env.API_KEY
        }
    });
    console.log(response.data);

    const fact = response.data[0]?.fact || "No Fact Found";
    cache.set(number, fact);
    return {
        source: "API",
        data: fact
    };
};

module.exports = getNumber;