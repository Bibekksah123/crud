import express from 'express'
import { deletetodo, Todo_app, Todo_get, updatetodo } from '../controller/todos.js'
const todoRouter=express.Router()
todoRouter.post('/todoitem',Todo_app)
todoRouter.get('/gettodo',Todo_get)
todoRouter.put('/gettodo/:todoid',updatetodo)
todoRouter.delete('/gettodo/:todoid',deletetodo)


export default todoRouter