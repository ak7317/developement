const express = require("express");
const app = express();
const path=require("path");


const port =8080;
app.set("view engine" ,"ejs");
app.set("views" , path.join(__dirname,"/views"));
app.get("/" , (req,res) => {
    res.render("home.ejs");
});
app.get("/hello" , (req,res) => {
    console.log("hello");
});

app.get("/rolldice" , (req,res) => {
    // console.log("rolldice route hit");
    let diceVal = Math.floor(Math.random() *6 )+1;
    res.render("rolldice" , { diceVal});
});
app.get("/ig/:username" , (req,res) => {
    let followers = ["aman","anmol", "pawan"];
   let {username} = req.params;
    // console.log(username);
    res.render("instagram.ejs" , {username ,followers});
});

app.listen(port, () =>{
    console.log(`app is listening on ${port}`);
});