const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
const TaskmanRouter = require ('./router/taskmanRouter.js')
const port = process.env.PORT || 9090
const cors = require ('cors')


require('dotenv').config()
app.use(cors())

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

app.get('/',(req,res)=>{
  res.send('welcome')

})

app.use('/tasks',TaskmanRouter)

app.listen (port,()=>{
  connect()
  console.log(`app running on port ${port}`);
})