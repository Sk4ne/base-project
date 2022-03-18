import express from 'express'
import aboutRouter from './about'

const router = express.Router()

router.use(aboutRouter)


export default router