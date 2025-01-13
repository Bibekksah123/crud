import express from 'express'
import { Todo_app, Todo_get } from '../controller/todos.js'
const todoRouter=express.Router()
todoRouter.post('/todoitem',Todo_app)
todoRouter.get('/gettodo',Todo_get)
export default todoRouter