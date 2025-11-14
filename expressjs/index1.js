const express = require("express");
const { request } = require("https");
const path = require("path");
const bodyParser = require("body-parser");


const app = express();
const port = 4000;
app.use(bodyParser.urlencoded({extended: true}));//

// get is a method which use to create in express js
app.get("/",(req,res)=>{
    //res.send("<h1> HELLO WORLD</h1>");
    //res.sendFile("form.html"); ye likhne mai error aatai ha
    console.log(path.join(__dirname ,"form.html"));
    res.sendFile(path.join(__dirname , "form.html"));
});
//in any full stack we have 4 main parts (create),(read),(update),(delete)->CRUD
//which is call as C->Get, R->Post, U->Put, D->Delete
app.get("/about",(req,res)=>{
    res.send("<h1> ABOUT PAGE</h1>");
    

});
app.get("/contact",(req,res)=>{
    res.send("<h1> CONTACT PAGE</h1>");

});

app.post("/api/v1/login",(req,res)=>{// it is basically used when we input the data from form and form give us with a response on the url and we get the response with done
    //const userName =res.body.name;
    //res.end("DONE");
    res.end(`<h1> Done mr.${req.body.name}</h1> <h2> Your email is ${req.body.email}</h2><br><h3> Your password is ${req.body.password}</h3>`);
    console.log(request.body);
})


app.listen(port,() =>{
    console.log(`server is working n port :${port}`);

});