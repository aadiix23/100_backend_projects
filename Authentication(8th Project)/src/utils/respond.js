const ok = (res,data)=>{
res.status(200).json({
    success:true,data
})
}
const fail = (res,message)=>{
res.status(400).json({
    success:false,message
})
}

module.exports = {ok,fail};