import Product from "../model/product.js"




export const createProduct = async(req, res) => {
    try {
        const{ name, price, brand} = req.body
        const data = await Product.create({
             name:name,
              price: price,
              brand: brand})
              
        res.status(200).json({message: "Product created successfully",data})
} catch (error) {
        return res.status(500).json({message: "product failed to create"})
    }
}