const express = require('express');
const app=express();
const tasks=require('./routes/tasks');
const connectDB=require('./db/connect');

const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});

app.use(express.json());

const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URL);
        console.log('connected to db');
    }catch(err){
        console.log(err);
    }
    app.use('/api/tasks',tasks);
    app.listen(3000,()=>{
        console.log('server started at port 5000');
    }
    );
}
start();


app.get('/hello',(req,res)=>{
    res.send("Task Manager App");
    res.end();
})
app.use('/api/v1/tasks',tasks);

//app.get('/api/v1/tasks')        -get all tasks
//app.get('/api/v1/tasks/:id')    -get a task
//app.post('/api/v1/tasks')       -create a task
//app.patch('/api/v1/tasks/:id')  -update a task
//app.delete('/api/v1/tasks/:id') -delete a task