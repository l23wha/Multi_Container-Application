const mongoose=require('mongoose');
 
  

function connectedTODB(){
mongoose.connect(process.env.MONGO_URI).then(()=>{
      console.log('Connected to MongoDB');
      
}).catch((err)=>{
      console.error("Database connection error", err);
})

}

module.exports=connectedTODB;