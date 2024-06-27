// Day 2: Learning Nodejs (on server/terminal/commandprompt)
console.log("Hello world from Nodejs.");

// Process, require, export:
// const { Console } = require("console");
// console.log("process:", process); //See modules.exports are empty !

// const { sum } = require("./helpers.js");
// console.log(`The sum is :`, sum(100, 200));
/*
 * Nodejs import export
 * when you start building and application
 * you will end up writting a lot more code
 * it is always a good idea to modulerize your code from the very beginning
 * lets seperate this sum method to the file called helpers
 * in node each file you create is treated as module
 */

/*
// Core nodejs module: http [Creating Server,using nodemon module]
const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("Hello from nodejs.");
});
server.listen(8000);
*/
// Nodejs event loop(theory):

// Code execution : fs module(filesystem) :
// Synchronous and Non-Asynchronous:
// ASYNCHRONOUS PROGRAMMING AS IN NODEJS :
// const fs = require("fs");
// const filename = "target.txt";
// fs.watch(filename, () => console.log("File changed"));
// console.log("Nodejs is watching.");
// fs.readFile(filename, (err, data) => {
//   if (err) console.log(err);
//   else console.log(data.toString());
// });
// console.log("Nodejs is a Async programming language !!");
/** ans:
 * fs take time, So nodejs do the events that take less time.
 * Which is why this request took place at the end @!!
 */

// SYNCHRONOUS PROGRAMMING IN NODEJS:
// const data = fs.readFileSync(filename);
// console.log(data.toString(), "Oh, I am not last this time.");
// console.log("Nodejs is a Async programming language !!");

// using expressjs: get/post/put/delete [Creating Server,Using express module]
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const authRouter = require("./Routers/auth");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection Error : ${err.message}`);
});

//midware: to connect client and server we need this midware !
app.use(cors());
app.use(morgan("dev"));

app.use("/api", authRouter);
app.listen(8000, () => console.log("Server is running on port 8000."));

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`A nodejs api is listening on port : ${port}`);
});
