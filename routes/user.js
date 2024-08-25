const {Router}=require("express")
const User=require("../models/user")
const router=Router()
router.get("/signin",(req,res)=>{
    return res.render("signin")
})
router.get("/signup",(req,res)=>{
    return res.render("signup")
})
router.post("/signin",async(req,res)=>{
    const{email,password}=req.body
    try {
        console.log(req.body)
    
   const token=await User.matchpasswordandgeneratetoken(email,password)
   console.log(User.matchpasswordandgeneratetoken)
  
   return res.cookie("token",token).redirect("/")
        
    } catch (error) {
        return res.render("signin",{
            error:"incorrect email or password",
        })
    }
})
router.get("/logout",(req,res)=>{
    res.clearCookie("token").redirect("/")
})
router.post("/signup",async(req,res)=>{
    const{fullname,email,password}=req.body
    await User.create({
        fullname,
        email,
        password,
    })
   
    return res.redirect ("/")
})
module.exports=router