import express from 'express'
import { loginuser, Register } from '../controller/user.js'
const userRouter=express.Router()
userRouter.post('/create',Register)
userRouter.post('/login',loginuser)
export default userRouter