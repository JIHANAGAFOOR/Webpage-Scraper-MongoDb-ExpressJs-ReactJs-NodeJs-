const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const app=express();
app.use(express.json());
app.use(cors())
// ----------creating homeRouter in which all routers all written----
const homeRouter=require("./src/router/homeRouter")
//------------using the created router----------
app.use("/",homeRouter)
//-------------connecting to my mongodb cloud-------------
mongoose.connect("mongodb+srv://Jihana:Jihaan%40123@cluster0.xi6vh.mongodb.net/websiteCounter?retryWrites=true&w=majority",()=>{
    console.log("Database Connected")
})
app.listen(1235,()=>{
    console.log("server is listening...http://localhost:1235");
})