import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./router/userRoute.js";
import path from 'path';

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

//const PORT = process.env.PORT || 4050;
const PORT = 3000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(() => {
    console.log("Database Connected Successfully");



}).catch(err => {
    console.log(err);
});

app.use("/api", route)

const __dirname1 = path.resolve();
app.use(express.static(path.join(__dirname1, "/frontend/build")));
app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
);




app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


