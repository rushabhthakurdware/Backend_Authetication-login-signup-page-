const express = require('express');
const Router = express.Router();
const bcrypt=require("bcrypt");

const user=[
    {
        username:"shiva",
        email:"shiva@example.com",
        password:"$2b$10$nKAgwKuNdlyZ3kY7fk.5k.LnABmgx/e0nfzPWfC.JgOwo4Ey9aPz6"
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
        password:"$2b$10$/L1nEA02see7fkWzmRHtCOkqNv8GjyCVRV4ycP6bTKuufE7W/jbCu"
    }
]

module.exports=user;

// $2b$10$IDETDjEZdDsbAh.rGNBjh.vJs7GOeudVpx.1PIZjatnjbtmuT3HRK -saurabh

// $2b$10$NePAVnNGJymv8SFDXJyEoO0/cEkSrqhgXuO5uP9OmkyhFBU4fqp/2 -rushabh