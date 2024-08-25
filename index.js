const express=require("express")
const path=require("path")
const mongoose=require("mongoose")
const Userroute=require("./routes/user")
const blogroute=require("./routes/blogs")
const blog=require("./models/blogs")
const cookieparser=require("cookie-parser")
const { checkforauthCookie } = require("./middleware/authentiaction")
const app=express()
const PORT=8000
mongoose.connect("mongodb://localhost:27017/bloggoo").then((e)=>console.log("mongo connected"))
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.resolve("./public")))
app.use(cookieparser())
app.use(checkforauthCookie("token"))
app.get("/",async(req,res)=>{
    const allblogs=await blog.find({})
    res.render("home",{
        user:req.user,
        blogs:allblogs,
    })
})
app.use("/user",Userroute)
app.use("/blog",blogroute)
app.listen(PORT,()=>console.log("Server started"))