const express = require("express");
const app= express();
const port =8080;
const path= require("path");

const { v4: uuidv4 } = require("uuid");

app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
   {
      id: uuidv4(),
      username:  "apnacollege",
      content:"I loce coding"
   }, 
   {
       id: uuidv4(),
      username: "aamankhan",
        content:"hard work is important"
   },
    {  
        id: uuidv4(),
        username: "anmol",
        content:"i got select"
    },
];

 
// create & new route
app.get("/posts", (req,res) => {
    res.render("index.ejs",{posts});
});
app.get("/posts/new", (req,res) => {
    res.render("new.ejs");
});
app.post("/posts", (req,res) => {
    let {username , content} = req.body;
    let id = uuidv4();
    posts.push({ id,username,content});
    // console.log(req.body);
    res.redirect("/posts");
    res.send("post request working");
});

app.get("/posts/:id", (req,res) => {
    let {id} =req.params;
    let post= posts.find((p) =>id === p.id );
    console.log(post);
    // res.send(" request working");
    res.render("show.ejs", {post});
});
app.listen(port, () => {
    console.log(`app is listening on: ${port}`);
});