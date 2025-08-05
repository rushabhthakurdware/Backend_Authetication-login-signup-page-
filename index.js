const express=require("express");
const app=express();
app.use(express.json());

const port = process.env.port ||8080;


const auth=require("./auth/auth");


app.use("/auth", auth);


app.listen(port,(err)=>{
    if(err){
        console.log("Error occurred while starting the server", err);
    }   
    else{
        console.log("Server is running on port", port);
    }
})