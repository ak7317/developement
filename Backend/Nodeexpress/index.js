const express = require("express");
const app = express();

let port =3000;
app.listen((port), ()=> {
    console.log(`app is listening on port ${port}`);

});

app.use((req,res) => {
    console.log("requset received");
    // console.log(req);
    res.send("This is a basic responese")
});
 app.get("/apple",(req,res) => {
    console.log("requset received");
    // console.log(req);
    res.send("apple patj")
});
app.post("/",(req,res) => {
    res.send("you send a post req to root path ");
})
