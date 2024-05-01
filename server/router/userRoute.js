import express from "express";
import { createUser, deleteUser, readDataId, replaceUser, userUpdate } from "../controller/userController.js";
import { readUser } from "../controller/userController.js";
const route = express.Router();


route
.post("/create" , createUser)
.get("/read" , readUser)
.get("/:id" , readDataId)
.put("/:id" , replaceUser)
.patch("/:id" , userUpdate)
.delete("/:id" , deleteUser);




export default route ;