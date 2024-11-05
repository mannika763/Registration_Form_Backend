// import path from "path";
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config')
const authRoutes = require("./routes/auth.routes")
const cookieParser = require("cookie-parser")



const app = express();
dotenv.config();

connectDB();
const port = process.env.PORT || 8080

//middlewares
app.use(express.json())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' })); 
 app.use(cookieParser());

 app.use("/api/auth", authRoutes); 

app.listen(port, ()=>{
    console.log(`server is running ${process.env.NODE_ENV} on port ${process.env.PORT}`)
})