const express = require('express');
const Router = express.Router();
const bcrypt=require("bcrypt");

const user=[
    {
        username:"shiva",
        email:"shiva@example.com",
        password:"$2b$10$IhmlBcEA4OBTPMNC/obeBexP1QIxoGGOmmZzClbu8.xEKIsy/fBRG"
    },
    {
        username:"john",
        email:"john@example.com",
        password: "john123" 

    },
    {
        username:"doe",
        email:"doe@example.com",
        password:"doe123"
    },
    {
        username:"jane",
        email:"jane@example.com",
        password:"jane123"
    },{
        username:"alice",
        email:"alice@example.com",
        password:"alice123"
    },{
        username:"bob",
        email:"bob@example.com",
        password:"$2b$10$ALRMWJ1aIxGJWxu1cQyoxOYHogXm43WUDAEuvn6dCYccNZqbUEJBK"
    }
]

module.exports=user;

// $2b$10$IDETDjEZdDsbAh.rGNBjh.vJs7GOeudVpx.1PIZjatnjbtmuT3HRK -saurabh

// $2b$10$NePAVnNGJymv8SFDXJyEoO0/cEkSrqhgXuO5uP9OmkyhFBU4fqp/2 -rushabh