import { todolist } from "../models/todo.js"

export const Todo_app=async(req,res)=>{
  try{
    const {title,description}=req.body
    if(!title||!description){
      return res.status(403).json({
        success:false,
        message:'empty todo'
      })
    }
  const todo=await todolist.create({
    title,
    description
  })
  todo.save()
  return res.status(201).json({
    success:true,
    message:"Todo Created",
    todo

  })

  }catch(error){
  console.log(error)
  }
}

export const Todo_get=async(req,res)=>{
  try{
  const user=await todolist.find()
 return res.status(200).json({
    user
  })

  }catch(error){
  console.log(error)
  }
}

