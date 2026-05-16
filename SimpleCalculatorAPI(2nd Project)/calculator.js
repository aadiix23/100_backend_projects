const express = require("express");
const app = express();

const ops ={
    add:(a,b)=>a+b,
    multiply:(a,b)=>a*b,
    divide:(a,b)=>a/b,
    subtract:(a,b)=>a-b,
}
app.get('/calculate',(req,res)=>{
    const{a,b,op}=req.query;
    //presence
    if(!a||!b||!ops){
       return res.status(400).json({error:'a,b And c Are Required'})
    }
    //numeric
    numA=Number(a),numB=Number(b);
    if(isNaN(numA)||isNaN(numB)){
       return res.status(422).json({error:'A and B Must be a Number'})
    }

    if(!ops[op]){
        return res.status(422).json({error:'Operations must be from add,multiply,divide,subtract'})
    }
    if(op==='divide' && numB===0){
       return res.status(422).json({error:"Divide By 0 Requires Quantum Computers"})
    }
    const result = ops[op](numA,numB);
    res.json({a:numA,b:numB,op,result})
})
app.listen(3000);