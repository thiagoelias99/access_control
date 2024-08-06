import express from 'express'
import WelcomeRouter from './welcome.router'

const router = express.Router()

router.use(WelcomeRouter)

export default router