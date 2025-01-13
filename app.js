import express from 'express'
import dotenv from 'dotenv'
import dataconnection from './db/mongoconnection.js'
import userRouter from './router/user.js'
import todoRouter from './router/todo.js'
const app=express()
dotenv.config()
dataconnection()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const PORT=process.env.PORTSERVER||4000
app.use('/api/test/login',userRouter)
app.use('/api/todo',todoRouter)

app.get('/',(req,res)=>{
  res.send("i am here")
})
app.listen(PORT,()=>{
console.log(`the server has been started at:${PORT}`)
})