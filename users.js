const express = require('express');
const Router = express.Router();
const bcrypt=require("bcrypt");

const user=[
    {
        name:"shiva",
        email:"shiva@example.com",
        password:"shiva123"
    },
    {
        name:"john",
        email:"john@example.com",
        password: bcrypt.hashSync("john123", 10) 

    },
    {
        "name":"doe",
        "email":"doe@example.com",
        "password":"doe123"
    },
    {
        "name":"jane",
        "email":"jane@example.com",
        "password":"jane123"
    },{
        "name":"alice",
        "email":"alice@example.com",
        "password":"alice123"
    }
]

module.exports=user;