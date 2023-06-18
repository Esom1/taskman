const mongoose = require('mongoose');
const Schema = mongoose.Schema


const taskSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  tags:{
    type:String,
    default:true
  },
  author:{
    type:String,
    default:true
  }
})

const TASK = mongoose.model('singletask', taskSchema)

module.exports = TASK