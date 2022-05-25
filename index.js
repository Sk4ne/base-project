// require('dotenv').config()
import dotevn from 'dotenv'
dotenv.config();
import './db/config'
import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes'
const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//MIDDLEWARES ROUTES
app.use(router);
app.use(express.static('public'));
const history = require('connect-history-api-fallback');
app.use(history());


// connection database

  app.listen(process.env.PORT,()=>{
    console.log(`Listen on port ${process.env.PORT}`)  
  })
