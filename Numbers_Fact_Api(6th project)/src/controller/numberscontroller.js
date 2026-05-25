const express = require("express");
const service = require("../service/service");

async function getfact(req,res) {
    try {
        const number =req.params.number;
        const result = await service.getNumber(number);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).error({message:error})
    }
    
}
module.exports=getfact