import mongoose from 'mongoose'
import express from 'express'
const app = express();

mongoose.connect(process.env.URL_DB,{useNewUrlParser:true},(err)=>{
  err ? console.log(`Error connection to the database ${err}`) 
      :  console.log('Connection to the established database');
})
