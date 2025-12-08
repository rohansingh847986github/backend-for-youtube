// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import connectDB from './db/index.js'
import { app } from './app.js'
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

dotenv.config({
    path: './env'
})


connectDB()
.then(()=>{
  try {
    app.on("error", (error)=>{
      console.log(`Error`, error);
      throw error
    })
    app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server is running at : ${process.env.PORT}`);
  })
  } catch (error) {
    console.error('Server error', error)
  }
})
.catch((err)=>{
  console.log("MONGO DB Connection Failed !!!", err);
  
})



















/*
import express from 'express'

const app = express()

(async () => {
  try {
        await mongoose.connect(`${process.env.
        MONGODB_URI}/${DB_NAME}`);
        app.on('ERROR', (error)=>{
            console.log("ERROR: ", error)
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
  } catch (error) {
    console.error("ERROR: ", error);
    throw err;
  }
})();
*/
