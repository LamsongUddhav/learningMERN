import mongoose from "mongoose";



const connectDb = async()=>{

    
    try {
        
     await mongoose.connect("mongodb+srv://raiuddhab69_db_user:POse1DC04bjknnyU@cluster0.w8j7hri.mongodb.net/?appName=Cluster0")

    console.log("Database connected Successfylly...");

    } catch (error) {
        console.log("database connection failed....");
    }

  

}



export default connectDb