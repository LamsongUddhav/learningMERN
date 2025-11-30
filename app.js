import express from 'express'

import connectDb from './config/db.js'
import { productRoute } from './routes/productRoute.js'



const app = express()
app.use(express.json())

connectDb()

app.use('/product', productRoute)


app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})