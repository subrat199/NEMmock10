const express=require('express')
const userRouter = express.Router()
const {userModel}=require("../model/userModel")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
userRouter.post("/register",async (req,res)=>{
    const {name,email,pass,age}=req.body
    try {
        bcrypt.hash(pass, 5, async (err, hash) =>{
            // Store hash in your password DB.
            const user=new userModel({name,email,pass:hash,age})
        await user.save()
        res.status(200).send("New user has been registered")
        });
        
    } catch (error) {
        console.log(error)
        res.status(404).send("There is something wrong with your registration")
    }
   
})
userRouter.post("/login",async (req,res)=>{
    const {email,pass}=req.body
    try {
        const user= await userModel.findOne({email})
        if(user){
            bcrypt.compare(pass, user.pass, (err, result)=> {
               if(result){
                const token = jwt.sign({ course: 'backend' }, 'masai')
                res.status(200).send({"mesg":"Login SuccessFull","token":token})
               }else{
                res.status(200).send("Wrong Credentials")
               }
            });
        }else {
            res.status(200).send("Login Failure")
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({"message":error.message})
    }
})
module.exports={
    userRouter
}