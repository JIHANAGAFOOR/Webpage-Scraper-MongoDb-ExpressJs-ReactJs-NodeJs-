const mongoose=require("mongoose")
//-----------------creating schema to hold items -----------
const schema=new mongoose.Schema({
websiteName:String,
wordCount:Number,
favourite:Boolean,
back_links:String,
imageLink:String,
})
//---------------creating a model---------------------
const websiteDb=mongoose.model("website",schema)
module.exports=websiteDb;