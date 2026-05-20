exports.validate = (req,res,next)=>{
    const {value,from,to}=req.query;
    if(!value || !from || !to ){
        return res.status(400).json({error:"Value , From , to are required"})
    }
    if(isNaN(Number(value))){
        return res.status(400).json({Error:"Value Must Be a Number"})
    }
    next();
}