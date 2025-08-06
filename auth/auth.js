const express=require("express");

const Router=express.Router();

const users=require("../users");

const bcrypt=require("bcrypt");

const jwt=require("jsonwebtoken")

// signup api
Router.post("/signup",async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;

    users.map((elem)=>{
        if(username===elem.username ){
            return res.status(400).json( "User already exists please login in");
        }
           

    });
    const hashcode= await bcrypt.hash(password,10)
    console.log(hashcode);
    users.push({username:username, password:hashcode, email:email});
    return res.status(200).send( "User registered successfully");

})

// login api


// Router.post("/login",  (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     users.map((elem)=>{
//         if (elem.username === username) {
//             const isMatch =  bcrypt.compare(password, elem.password);
//             if (isMatch) {
//                  res.status(200).send("login successful");
                   
//             } else {
//                  res.status(400).send("Invalid username or password");
//             }
//         }
//     })

//     return res.status(400).send("User not found, please sign up");
// });

Router.post("/login",async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    const user=users.filter((elem)=>{
        return elem.username===username;
    });
    console.log(user);
    if(user.length!==0){
        const validated=await bcrypt.compare(password , user[0].password);
        
        if(validated){

            const token=jwt.sign(user[0].email,"mykey")
             res.status(200).send({msg:"Login successful" ,token:token }); 

        }else{
             res.status(400).send({msg:"Invalid username or password"});
        }
    }else{
         res.status(400).send("User not found, please sign up");
    }
})




module.exports=Router;
