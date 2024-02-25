import mongoose from "mongoose";
export const Connection=async()=>{
    const URL=`mongodb+srv://dhananjaypuranik8:dhananjay8@ecommerce-web.5ocbw6e.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-web`;
    try {
        await mongoose.connect(URL);
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
    
} 

export default Connection;