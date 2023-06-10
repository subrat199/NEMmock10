const express=require('express')
const userProfileRouter = express.Router()
const {userProfile}=require("../model/userProfile")
userProfileRouter.get("/",async (req,res)=>{
    try {
        const notes=await userProfile.find()
        res.status(200).send(notes)
    } catch (error) {
        res.status(404).send("some error")
    }
})
module.exports ={
    userProfileRouter
}