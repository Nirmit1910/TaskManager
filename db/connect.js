const mongoose = require('mongoose');

// const connectionString='mongodb+srv://Nirmit:1234@cluster0.v9yu3z5.mongodb.net/TaskManager?retryWrites=true&w=majority'



const connectDB=(url)=>{
    return mongoose
    .connect(url,{
        useNewUrlParser:true, 
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:false
    })
}

module.exports = connectDB;


