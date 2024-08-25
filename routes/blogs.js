const {Router}=require("express")
const router=Router()
const multer=require("multer")
const path=require("path")
const blog=require("../models/blogs")
const comment = require("../models/comment")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(`./public/uploads/`))
    },
    filename: function (req, file, cb) {
     const filename=`${Date.now()}-${file.originalname}`
     cb(null,filename)
    },
  })
  const upload = multer({ storage: storage })
  
router.get("/add-new",(req,res)=>{
    return res.render("addblog",{
        user:req.user,

    })
})
router.get("/:id", async (req,res)=>{
    const Blog= await blog.findById(req.params.id).populate("createdby")
    const comments=await comment.find({blogid:req.params.id}).populate("createdby")
    return res.render("blog",{
        user:req.user,
        Blog,
        comments,
    })
})
router.post("/comment/:blogid",async (req,res)=>{
    await comment.create({
        content:req.body.content,
        blogid:req.params.blogid,
        createdby:req.user._id,
    })
    return res.redirect(`/blog/${req.params.blogid}`)
})
router.post("/",upload.single("coverimage"),async(req,res)=>{
    const{title,body}=req.body
    
    const bllog=await blog.create({
        body,
        title,
        createdby:req.user._id,
        coverimageurl:`/uploads/${req.file.filename}`,
    })
    return res.redirect(`/blog/${bllog._id}`)
})
module.exports=router