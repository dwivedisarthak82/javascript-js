const express = require("express");
const { request} = require("https");
const path = require("path");
const bodyparser = require("body-parser");

const app =express();
const port =8000;

app.use(bodyparser.urlencoded({extended: false }));
app.use(express.json());

app.get("/api/v1/userdata", (req,res)=>{
    res.json({
        name: "john",
        email: "srkdwivedi",
        password: "1234dfgh",
    });
    
});

app.post("/api/v2/register", (req,res)=>{
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userpassword = req.body.password;
    res.json({
        success: true,
        name: userName,
        email: userEmail,
        password: userpassword,
        });
});
  app.listen(port, ()=>{
    console.log(`server is working on port :${port}`);


  });




