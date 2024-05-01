import  express  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./router/userRoute.js";

const app =express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

//const PORT = process.env.PORT || 4050;
const PORT = 3000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(()=>{
    console.log("Database Connected Successfully");

    

}).catch(err =>{
    console.log(err);
});


app.use("/api" , route)


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


