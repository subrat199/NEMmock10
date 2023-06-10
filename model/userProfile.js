const mongoose=require('mongoose');
const userProfileSchema=mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true}, 
},{
    versionKey:false
})
const userProfile=mongoose.model('user',userProfileSchema)
module.exports={
    userProfile
}