const express=require('express')
const userProfileRouter = express.Router()
const {userProfile}=require("../model/userProfile")
const { userModel } = require('../model/userModel')
userProfileRouter.get("/",async (req,res)=>{
    try {
        const userId=req.body.userId
        console.log(userId)
        const notes=await userModel.find({_id:userId})
        console.log(notes)
        res.status(200).send(notes)
    } catch (error) {
        res.status(404).send("some error")
    }
})
module.exports ={
    userProfileRouter
}