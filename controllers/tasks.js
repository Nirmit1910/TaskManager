const Task=require('../models/tasks');
const asyncWrapper=require('../middleware/async');
const { createCustomError } = require('../errors/custom-error')
const getAllTasks =asyncWrapper (async (req, res) => {
    const tasks=await Task.find();
    res.status(200).json({tasks,amount:tasks.length});
})

const createTasks =asyncWrapper( async (req, res) => {
    const task=await Task.create(req.body);
    res.status(201).json({task});
})

const getTask =asyncWrapper (async (req, res,next)=>{
    const id=req.params.id;
    const tasks=await Task.findById(id);
    console.log(req.params.id);
    if(!tasks){
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.json({tasks});
})


const deleteTask =asyncWrapper (async (req, res,next) => {
    const id=req.params.id;
    console.log(id);
    const tasks=await Task.findByIdAndDelete(id);
    console.log(tasks);
    if(!tasks){
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.json({message:"Task deleted successfully"});
})

const updateTask =asyncWrapper (async (req, res,next) => {
    const id=req.params.id;
    console.log(req.body);
    const tasks=await Task.findOneAndUpdate(id,req.body,{
        new:true,
        runValidators:true
    });
    console.log(tasks);
    if(!tasks){
        return next(createCustomError(`No task with id : ${id}`, 404))
    }
    res.json({tasks});
})


module.exports = {getAllTasks, createTasks, getTask, updateTask, deleteTask};
