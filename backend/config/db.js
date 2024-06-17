import mongoose  from "mongoose";

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://Bitebunny:Adithya26@cluster0.brf73z9.mongodb.net/food-del').then(()=>console.log("DB connected"));
}