const mongoose=require('mongoose');


const TaskSchema=new mongoose.Schema({//TaskSchema  is a model in mongoose which is a collection in mongodb and it has a schema which is a collection in mongodb 
    name:{
        type:String,
        required:[true,"Please enter a name"],
        trim:true,
        maxLength:[20,"name cant be greater than 20"]
    },
    completed:{ 
        type:Boolean,
        default:false
    }
});

module.exports=mongoose.model('Task',TaskSchema);  