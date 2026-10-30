   require('dotenv').config();
const express=require('express');
const connectedTODB = require('./config/db.js');

const app=express();

const PORT=process.env.PORT|| 3000;

connectedTODB();

app.listen(PORT,()=>{
     console.log(`Our server is running on port${PORT}`);
});

