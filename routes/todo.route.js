
const express=require("express");
 const router=express.Router();
  const TODO=require("../models/todo.model");

   
  //Create a new TODO
   
  router.post('/todos',async (req,res)=>{
       try{
           const {title,description}=req.body;

            if(!title || !description){
                 return res.status(400).json({message:"Please provide both fields to create your todo list"});
            }
            const newTodo= await new TODO({
                 title:title,
                  description:description
            });
             await newTodo.save();
             return res.status(201).json({message:"Your todo is here broh.!",newTodo});
       }catch(err){
          return res.status(500).json({message:"Internal server error"});
       }
  });

  //Get a single 
  router.get('/todos/:id',async(req,res)=>{
       try{
           const {id}=req.params;

           const todo=await TODO.findById(id);
           if(!todo){
             return res.status(404).json({message:"There is no todo with this id"});
           }
           return res.status(200).json({message:"We fetch todo",todo});
       }catch(error){
           return res.status(500).josn({message:"Invalid id format or Internal server error"});
       }
  });

  //Get all todos

   router.get('/todos',async(req,res)=>{
        try{
             const todos=await TODO.find({});//fetch all todo

             if(!todos || todos.length==0){
                  return res.status(404).json({message:"There is no todo right now"});
             }

              return res.status(200).json(todos);


        }catch(err){
              return res.status(500).json({message:"Internal server error"});
        }
   });

   router.put('/todos/:id',async (req,res)=>{
        try{
              const {id}=req.params;
              const {title,description}=req.body;
               if(!id || !title || !description){
                 return res.status(400).json({message:"Id is required or title and description"});
               }
               const updatedTodo=await TODO.findByIdAndUpdate(
                 id,
                 {title,description},
                 {new:true}
               );

               return res.status(200).json({message:"todo successfully updated"});
                 
        }catch(error){
              return res.status(500).json({message:"Internal server error"});
        }
   });








   //DELTE todo 
   router.delete('/todo/:id', async (req,res)=>{
       try{

           const {id}=req.params;
           
            if(!id){
                 return res.status(404).json({message:"Id is required to delete"});

            }
            const deleted=await TODO.findByIdAndDelete({id});
            return res.status(200).json({message:"todo deleted successfully"});
       }catch(error){
          return res.status(500).json({message:"Internal server error"});
       }
   })



  
 