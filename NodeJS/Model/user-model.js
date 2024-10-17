import mongoose from "mongoose";
import { Schema } from "mongoose";
const userSchema = new Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
});
const userModel = mongoose.model("user",userSchema);
export default userModel;