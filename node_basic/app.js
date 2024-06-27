

//Functional approch:

const fs= require('fs');
const filename = "target.txt";

const errhandler= err => console.log(err);
const datahandler= data => console.log(data.toString());

fs.readFile(filename,(err,data) =>{
    if(err) errhandler(err)
    datahandler(data);
})

console.log("Nodejs is a Async programming langauage !!")
