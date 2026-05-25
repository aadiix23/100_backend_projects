const axios = require("axios");
const cache = require("../cache/cache,js")

const getNumber = async(Number)=>{
    const cached = cache.get(Number);
    if(cached){
        return{
            source:"cache",
        data :cached
        }
        
    } 
    const response = await axios.get(`https://api.api-ninjas.com/v1/facts?number=${number}`,{
        
            headers:{
                 "X-Api-Key": n5oi9BTM6w6heNoxkxAEGV2qMXzcBnxC4stmrNt5,
            }
        
    })

    const fact = response.data[0]?.fact||"No Fact Found"
    cache.set(number,fact);
    return {
        source:"API",
        data:fact
    }
}

module.exports=getNumber