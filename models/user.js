const{createHmac,randomBytes}=require("crypto")
const { Schema, model } = require("mongoose");
const { createTokenforUser } = require("../services/authentication");
const userschema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
     
    },

    password: {
      type: String,
      required: true,
     
    },
    profileimage: {
      type: String,
      default:"/images/download.png",
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);
userschema.pre("save",function(next){
    const user=this;
    if(!user.isModified("password") )
    return;
const salt=randomBytes(16).toString()
const hashedpassword=createHmac("sha256",salt)
.update(user.password)
.digest("hex")
this.salt=salt
this.password=hashedpassword
next();
})
userschema.static("matchpasswordandgeneratetoken",async function(email,password){
  const user=await this.findOne({email})
  if(!user)throw new Error("user not found")
  const salt=user.salt
const hashedpassword=user.password
  const userprovidedhash=createHmac("sha256",salt)
  .update(password)
.digest("hex")
if(hashedpassword!==userprovidedhash)throw new Error("incorret password")
const token=createTokenforUser(user)
return token
})
const User = model("user", userschema);
module.exports = User;
