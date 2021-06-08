
//3. using router and controller


//Steps:-

//1. first create new folder and name it as library,go to library using(cd library) and (then type npm init -y) (inside terminal) 
//   and it will create packge.json file and create index.js file(it is used for importing statement and we create server and port here)

//2. now install express            (inside terminal)
//npm i express installs express
//npm i -g express installs express globally
//and it will create package-lock.json file and also create node_modules folder 

//3. Now import express and bodyparser 
//for using express we need to import express by using(import express  "from express" )   //This is import statement
import express  from "express"  
//for handling the JSON part and for sending and retriving data we use bodyparser as it will help us to add,delete and modify the data
import bodyparser from "body-parser"

//4. Now create server and port                                                           //This is declaration part of our server
const server = express() //here 
const PORT=7777
//in previous class we use{"content-Types":"text/plain"}  and JSON everytime and instead of writing JSON everytime,we use JSON one time in bodyparser
server.use(bodyparser.json())

//5.using variable
//this is base url ("/") and then arrow function is used like this:-("/",arrow function)
var homepage=(req,res)=>res.send("Welcome to my library")
server.get("/",homepage) //handle http://localhost:7777

//6.
//server will listen to PORT 
server.listen(PORT)

//7.
//for using import and export we need to mention "type":"module" in package.json

//8.
//for starting application we use node index.js  

//output:-
//after using  http://localhost:7777 on webpage,you will get:- 
//Welcome to my library on webpage


//9. create controller folder inside library(in controller we define functions) 
// also create new file inside controller and name it as user.js and then code below codes inside user.js

//10. create array name user
let users=[]//this will act as a user table(database)..later will replace this with DB call

//11. create getuser function

//we use export const so that it can be used on another files/folder.
export const getUsers=(req,res)=>
{
    console.log("In function call getUser().. I this /users endpoint got hit.")
    res.send(users)
}

//12. create createUser function
export const createUser=(req,res)=>
{
    console.log("In function call createUse() .. I this /users endpoint got hit.")
    res.send("ok")
}

//13. create routes folder inside routes
// also create new file inside routes and name it as user.js and then code below codes inside user.js
 
//14.
import express from 'express';
//while runnung the application node will try to include code of express to your code  
//we need to use express for router

//15.
import {getUsers,createUser} from '../controllers/users.js'
//to import multiple functions at same time we use import{}
// and using '../controllers/users.js' we go back to previous folder and import function from the given folder.Here it is controller

//16.
const router = express.Router();
//we will need to get router which we will get from express so for that we will use const variable

//17. 
router.get("/",getUsers)

//18. 
router.post("/",createUser)
//router.delete("/:id",deleteUserById)//it should be used as variable and hence colon is used
//router.patch("/:id",updateUserById)

//19.
export default router //router is exported to index.js*/

//20. import userRouter from "./routes/users.js" 
//    Above line is typed inside index.js for using routes file

//21. server.use("/user",userRouter) 
//here userRouter is called 
//"/user" base endpoint is added inside server.use,no need to use it on router.get()which is in routes folder
//if we use /user then call will go inside userRouter and then on routes and then users.js

//22.now your index.js will look like this:-

import express  from "express"        //This is import statement
import bodyparser from "body-parser"
import userRouter from "./routes/users.js"

const server = express()
const PORT=7777
server.use(bodyparser.json())

var homepage=(req,res)=>res.send("Welcome to my library") //handle http://localhost:7777

server.use("/user",userRouter) 
//here userRouter is called 
//"/user" base endpoint is added inside server.use,no need to use it on router.get()which is in routes folder
//if we use /user then call will go inside userRouter and then on routes and then users.js

server.get("/",homepage)

server.listen(PORT)
