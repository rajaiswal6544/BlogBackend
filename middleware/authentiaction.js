const { validateToken } = require("../services/authentication")

function checkforauthCookie(cookieName){
    return(req,res,next)=>{
        const tokencookievalue=req.cookies[cookieName]
        if(!tokencookievalue){
        return next()
    }
    try {
        const userpayload=validateToken(tokencookievalue) 
        req.user=userpayload
    } catch (error) {}
       return next()
    
    }
}
module.exports={
    checkforauthCookie,
}