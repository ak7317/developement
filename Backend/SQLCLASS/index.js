const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

// for home route
const express = require("express");
const app = express();
// add template
const path = require("path");
app.set("view engine ", "ejs");
app.set("views",path.join(__dirname,"/views"));

// for route update
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:'khan@0422',
});

// Inserting new data 
// let q = "INSERT INTO user (id,username,email,password) VALUES (?,?,?,?)";
// let user = ["123","123_newuser","abc@gmail.com", "abc"];

// try
// {
// connection.query(q,user,(err,result) => {
//     if(err) throw err;
//     console.log(result);
// });
// }
// catch {
//     console.log(err);
// }
// connection.end();
// let createRandomUser = () => {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// }
// console.log(createRandomUser());
//  let randomgetUser = () => {
//   return {
//     Id: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
    
//   };
// }
// console.log(randomgetUser());



// Inserting into bulk


let getrandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
     faker.internet.email(),
   faker.internet.password(),
    
  ];
}
// let q = "INSERT INTO user (id,username,email,password) VALUES ?";
// let data=[];
// for(let i=1;i<=100;i++) {
//    data.push(getrandomUser());
// }

// try
// {
// connection.query(q,[data],(err,result) => {
//     if(err) throw err;
//     console.log(result);
// });
// }
// catch {
//     console.log(err);
// }
// connection.end();


// HOME ROUTE
// app.get("/" ,(req,res) => {
//   let q = `SELECT count(*) FROM user`;
//   try
// {
// connection.query(q,(err,result) => {
//     if(err) throw err;
//     // console.log(result[0]["count(*)"]);
//     let count = result[0]["count(*)"];
//     // res.send(result[0]["count(*)"]);
//     res.render("home.ejs" ,{count});
// });
// }
// catch {
//     console.log(err);
//     res.send("some error in db");
// }
//   // res.send("welcome to home page");
// });

// Show route
app.get("/user",(req,res) => {
  let q= `SELECT * FROM user`;
  // res.send("succes");
  try
  {
connection.query(q,(err,users) => {
    if(err) throw err;
    // console.log(result);
    
    // res.send(result);
    res.render("showuser.ejs" ,{ users }); // to show 
});
}
catch {
    console.log(err);
    res.send("some error in db");
}
});

// Edit Route
app.get("/user/:id/edit", (req,res) => {
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id ='${id}'`;

  // res.render("edit.ejs");
 
 
   try
  {
connection.query(q,(err,result) => {
    if(err) throw err;
    // console.log(result);
    let user = result[0];
    
    // res.send(result);
    res.render("edit.ejs" ,{user}); // to show 
});
}
catch {
    console.log(err);
    res.send("some error in db");
}
});
// update (db) route
app.patch("/user/:id", (req,res) => {
  res.send("updated");
});
app.listen("8080",() => {
  console.log("server is listening to port :8080");
});


