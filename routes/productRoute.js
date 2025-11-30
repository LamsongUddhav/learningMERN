import express from 'express'
import { createProduct } from '../controllers/productController.js'

export const productRoute = express.Router()

productRoute.post('/createProduct', createProduct)