import { Router } from 'express'
import { getData } from '../controllers/products'

const router = Router()

// /api/products
router.get('/', getData)

export default router
