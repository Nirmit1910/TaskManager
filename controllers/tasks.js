const Task=require('../models/tasks');

const getAllTasks =async (req, res) => {
    try{
        const tasks=await Task.find();
        res.json(tasks);
    }
    catch(err){
        res.json({message:err});
    }
}

const createTasks =async (req, res) => {
    try{
        const task=await Task.create(req.body);
        // Task.save(task);
        res.status(201).json({task});
    }
    catch(err){
        res.status(400).json({err});
    }
}

const getTask =async (req, res)=>{
    try{
        const id=req.params.id;
        const tasks=await Task.findById(id);
        console.log(req.params.id);
        if(tasks==null){
           return res.status(404).json({message:"Task not found"});
        }
        res.json({tasks});
    }
    catch(err){
        res.json({message:err});
    }
}


const deleteTask =async (req, res) => {
    try{
        const id=req.params.id;
        console.log(id);
        const tasks=await Task.findByIdAndDelete(id);
        console.log(tasks);
        if(tasks==false)
        {
            console.log("task not found");
            return res.status(404).json({message:"Task not found"});  
        }
        res.json({message:"Task deleted successfully"});
    }
    catch(err){
        res.json({message:"error"});
    }
}

const updateTask =async (req, res) => {
    try{
        const id=req.params.id;
        console.log(req.body);
        const tasks=await Task.findByIdAndUpdate(id,req.body);
        console.log(tasks);
        if(tasks==false)
        {
            return res.status(404).json({messgae:"message user not found"});
        } 
        res.json({message:"Task updated successfully"});
    }
    catch(err){
        res.json({message:"error"});
    }
}


module.exports = {getAllTasks, createTasks, getTask, updateTask, deleteTask};