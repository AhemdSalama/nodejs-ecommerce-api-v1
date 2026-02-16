const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path:"config.env"}); // dotenv.config path the values in the file to the global process variable
const morgan = require('morgan');

const app = express();

if(process.env.NODE_ENV === "development")
{
    app.use(morgan("dev"));
    console.log(`Mode: ${process.env.NODE_ENV}`);
}

app.get('/',(req,res)=>{
    res.send("Our API V4");
})


const PORT = process.env.PORT || 8000;
// Listen on the port 
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
})
