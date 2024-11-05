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
const allowedOrigins = ['http://localhost:3000', 'https://astonishing-kelpie-6399c5.netlify.app'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
 app.use(cookieParser());

 app.use("/api/auth", authRoutes); 

app.listen(port, ()=>{
    console.log(`server is running ${process.env.NODE_ENV} on port ${process.env.PORT}`)
})