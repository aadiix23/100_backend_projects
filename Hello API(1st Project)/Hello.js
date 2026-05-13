const express = require("express");
const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
    res.json({message:"Hello TO 1 OUT of 100 Backend Project"})
})
app.get('/greet/:name',(req,res)=>{
    const {name} = req.params;
    res.json({ message: `Hello, ${name}!` });
})

app.use((req,res)=>{
    res.status(404).json({error:"Not FOUND"})
})

app.listen(3001,()=>{
    console.log("Server Started")
})