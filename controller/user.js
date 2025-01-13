import { user } from "../models/user.js"
import bcrypt from 'bcrypt'
export const Register=async(req,res)=>{
  try{
    const {fullname,email,password}=req.body
    if(!fullname||!email||!password){
      return res.status(403).json({
        success:false,
        message:'All Field Are empty'
      })
    }
    const users=await user.findOne({email})
    if(users){
      return res.status(403).json({
        success:false,
        message:'Email all ready register'
      })
    }
    const hashpassword=await bcrypt.hash(password,10)
    await user.create({
      fullname,
      email,
      password:hashpassword
    })
    return res.status(200).json({
      success:true,
      message:"Account Created successfully"
    })

  }catch(error){
  console.log(error)
  }
}
export const loginuser=async(req,res)=>{
  try{
    const {email,password}=req.body
    if(!email||!password){
      return res.status(403).json({
        success:false,
        message:'invalide Email and password'
      })
    }
    const users=await user.findOne({email})
    if(!users){
      return res.status(403).json({
        success:false,
        message:'Invalid email and password'
      })}
      const comparepassWord=await bcrypt.compare(password,users.password)
      if(!comparepassWord){
        return res.status(403).json({
          success:false,
          message:'Invalid email and password'
        })
      }
      return res.status(200).json({
        success:true,
        message:"login successful"
      })
    
     
    
  }catch(error){
    console.log(error)

  }
}

