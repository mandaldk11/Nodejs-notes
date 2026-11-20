import express from 'express'
import { login, logOut, register } from '../controller/register.controller.js'
const userRouter = express.Router()
userRouter.get('/register', register)
userRouter.get('/login', login)
userRouter.get('/logout', logOut)

export default userRouter