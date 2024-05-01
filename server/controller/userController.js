import {User}  from "../model/userModel.js";
import mongoose from "mongoose";


 export const createUser = async (req,res)=>{
   
    const user = new User(req.body); 
    
    try{
      if(!user){
        return res.status(404).json({msg : "User data not found"});
     }
     const saveData = await user.save();
     res.status(200).json({msg : "User Added Successfully",saveData});
    }
    catch(err) {
      res.status(500).json({error : err});

    };
}

export const readUser = async (req,res)=>{
 
  try{
    const userData = await User.find();
    if(!userData){
      return res.status(404).json({msg : "User data not found"});
   }
   
   res.status(200).json(userData);
  }
  catch(err) {
    res.status(500).json({error : err});

  };
}


export const readDataId = async (req,res) => {
         const id = req.params.id;
         try{
            const userData = await User.findById(id);
            if(!userData){
              return res.status(404).json({msg : "User data not found"});
           }
           res.status(200).json({msg : "User find successfully ! "  ,userData});

         }
         catch(err){
          res.status(500).json({error : err});
         }

}

export const replaceUser = async (req,res) => {
  const id = req.params.id;
  try{
     const userReplace = await  User.findOneAndReplace( {_id : id } , req.body , {new : true});
     if(!userReplace){
      return res.status(404).json({msg : "User data not found"});
     }
     res.status(200).json(userReplace);
  }
  catch(err){
    res.status(500).json({error : err});
   }
}

export const userUpdate = async (req,res) => {
  const id = req.params.id;
  try{
     const updatUser = await User.findByIdAndUpdate(id , req.body , {new:true});
     if(!updatUser){
      return res.status(404).json({msg : "User data not found"});
     }
     res.status(200).json(updatUser);
  }
  catch(err){
    res.status(500).json({error : err});
   }
}

export const deleteUser = async (req,res)=> {
  const id =req.params.id;
  try{
    const userDlt = await User.findByIdAndDelete(id);
    if(!userDlt){
      return res.status(404).json({msg : "User data not found"});
     }
     res.status(200).json({msg: "User deleted Successfully",userDlt});
  }
  catch(err){
    res.status(500).json({error : err});
   }
}