import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://mssnehithvarma86:Kg7OhsbfeDWRqrcQ@cluster0.uhcasip.mongodb.net/food delivery project').then(()=>console.log("DB Connected"));
}