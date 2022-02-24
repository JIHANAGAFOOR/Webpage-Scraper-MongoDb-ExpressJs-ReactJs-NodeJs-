const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
require("dotenv").config();
const app=express();
app.use(express.json());
app.use(cors())
// ----------creating homeRouter in which all routers all written----
const homeRouter=require("./src/router/homeRouter")
//------------using the created router----------
app.use("/",homeRouter)
//-------------connecting to my mongodb cloud-------------
mongoose.connect("mongodb+srv://jihana:Jihaan%40123@webpagescraper.0zlf0.mongodb.net/wordCounter?retryWrites=true&w=majority",()=>{
    console.log("Database Connected")
})
app.listen(process.env.PORT || 1235,()=>{
    console.log("server is listening...http://localhost:1235");
})