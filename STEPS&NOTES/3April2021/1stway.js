
//1. 1st way to print "welcome to my library" on homepage

//Steps:-

//1. first create new folder and name it as library,go to library using(cd library) and (then type npm init -y) (inside terminal) 
//   and it will create packge.json file

//2. now install express            (inside terminal)
//npm i express install express
//npm i -g express install express globally

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

//5.
//this is base url ("/") and then arrow function is used like this:-("/",arrow function)
server.get("/",(req,res)=>res.send("Welcome to my library")) //handle http://localhost:7777

//6.
//server will listen to PORT 
server.listen(PORT)

//7.
//for starting application we use node index.js

//8.
//for using import and export we need to mention "type":"module" in package.json

//output:-
//after using  http://localhost:7777 on webpage,you will get:- 
//Welcome to my library on webpage