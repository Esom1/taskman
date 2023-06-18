const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
const TaskmanRouter = require ('./router/TaskmanRouter.js')
const port = process.env.PORT || 9090


require('dotenv').config()

app.use(express.json())

const mongoDB_url  = process.env.DBURL

const connect = ()=>{
  mongoose.connect(mongoDB_url)
  try{
    console.log('DB connected successfully');
  }catch(err){
    console.log(err);
  }
}

app.use('/tasks',TaskmanRouter)

app.listen (port,()=>{
  connect()
  console.log(`app running on port ${port}`);
})