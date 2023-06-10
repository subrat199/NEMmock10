const jwt = require("jsonwebtoken");
const auth = (req,res,next)=>{
    const  token  = req.headers.authorization;
   
    if(token){
        try {
            const decoded= jwt.verify(token.split(" ")[1], "masai"); 
            const userid=decoded.userid
            req.body.userid = userid
            if(decoded){
                next();
            }else{
                res.send({"msg":"Plase login"})
            }
        } catch (error) {
            res.send({"error":error.message});
        }
       
    }else{
        res.send({"msg":"YOu dont have a token"})
    }
}
module.exports={
    auth
}