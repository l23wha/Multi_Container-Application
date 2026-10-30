const mongoose=require('mongoose');

const todoSchema= new mongoose.Schema({
       title:{
         type:String,
          required:true
       },
        description:{
             type:String,
             required:true
        }
},{timestamps});

const TODO=mongoose.model('TODO',todoSchema);

module.exports=TODO;

