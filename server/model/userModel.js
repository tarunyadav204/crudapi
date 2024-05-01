import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   fname : {
    type: String,
    required:true,
    unique:true
   },
   lname : {
    type: String,
    required:true
   },
   email : {
    type: String,
    required:true
   },
   password : {
    type: String,
    required:true
   }
}) ;

 export const User = mongoose.model('User' , userSchema) ;