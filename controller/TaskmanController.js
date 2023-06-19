const TASK = require ('../model/TaskmanModel');

// creating posts
const create_route = async (req,res)=>{
  const task = new TASK({
    title:req.body.title,
    description:req.body.description,
    tags:req.body.tags,
    author:req.body.author
    
   })
   try{
    const savedtask = await task.save()
    res.status(200).json(savedtask)
   }catch(err){
      res.status(404).json({message:err})
   }
}

// getting all posts
const all_route = async (req,res)=>{
  try{
  const allRoute = await TASK.find()
  res.json(allRoute)
}catch(err){
  res.status(404).json({message:err})
}

}

// getting specific post
const specific_route = async (req,res)=>{
  try{
    const specificRoute = await TASK.findById(req.params.postId)
    res.json(specificRoute)
  }catch(err){
    res.status(404).json({message:err})
  }
}

// delete post
const delete_route = async (req,res)=>{
  try{
    const deleteRoute = await TASK.findByIdAndDelete({_id:req.params.postId})
    res.json(deleteRoute)
  }catch(err){
    res.status(404).json({message:err})
  }
}

// update or edit post
const update_route = async (req,res)=>{
  try{
    const updateRoute = await TASK.updateOne({_id:req.params.postId},{$set:req.body})
    res.json(updateRoute)
  }catch(err){
    res.status(404).json({message:err})
  }
}
module.exports = {
  create_route,
  all_route,
  specific_route,
  delete_route,
  update_route,
}