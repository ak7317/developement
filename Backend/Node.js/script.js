// let n=5;
// for(let i=0;i<n;i++) {
//     console.log("hello",i);
// }

// // process.argv
// let arg=process.argv;
// for(let i=2;i<arg.length;i++){
//     console.log("hello to",arg[i]);
// }

// // file exports;
// const math = require("./math");
// console.log(math);

// // folder exports
// const info = require("./Fruits");
// console.log(info);

const figlet=require("figlet");


figlet("AAMAN KHAN!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});