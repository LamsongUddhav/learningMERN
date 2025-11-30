import mongoose from "mongoose";

const Product = mongoose.model("Product", new mongoose.SchemaTypeOptions({

    name:{type:String, required:true,},
    price:{type:String, required:true,},
    brand:{type:String, required:true,}
}
));


export default Product   