const express = require('express');

const app = express();


app.get('/',(req,res)=>{
    res.send("Our API V3");
})



// Listen on the port 
app.listen(8000,()=>{
    console.log("App running");
})
