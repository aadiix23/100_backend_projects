const service = require("../service/authService")
const respond = require("../utils/respond")

const register = async(req,res)=>{
    try {
        const {name,email,password } =req.body;
        const user = await service.register({
            name,email,password
        })
       respond.ok(res,{user},201);
    } catch (error) {
       respond.fail(
        res,error.message,error.statusCode || 500
       )
    }
}
const login = async(req,res)=>{
    try {
        const {email,password}= req.body;
        const loogedInUser = await service.login(
            {
                email,password
            }
        )
        respond.ok(res,{loogedInUser},201)
    } catch (error) {
      respond.fail(
        res,error.message,error.statusCode || 500
       )  
    }
}
const forgotPassword = async(req,res)=>{
    try {
            const {email} = req.body;
    const forgotPasword = await service.forgotPassword({
        email
    })
    respond.ok(res,{forgotPasword},201)
    } catch (error) {
       respond.fail(
        res,error.message,error.statusCode || 500
       )   
    }

}

module.exports ={login,register,forgotPassword};