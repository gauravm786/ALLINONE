//creating model(schema) :-(go to step 43)

//Steps:-

//1. first create new folder and name it as library,go to library using(cd library) and (then type npm init -y) (inside terminal) 
//   and it will create packge.json file and create index.js file(index.js file is used for importing statement and we create server and port here)

//2. now install express            (inside terminal)
//npm i express installs express
//npm i -g express installs express globally
//and it will create package-lock.json file and also create node_modules folder 

//3. Now import express and bodyparser inside index.js
//for using express we need to import express by using(import express  from "express")   //This is import statement
import express  from "express"  
//for handling the JSON part and for sending and retriving data we use bodyparser as it will help us to add,delete and modify the data
import bodyparser from "body-parser"

//4. Now create server and port                                                           //This is declaration part of our server
const server = express() 
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
// also create new file inside controller and name it as users.js and then code below codes inside users.js

//10. create array name user
let users=[]//this will act as a user table(database)..later will replace this with DB call

//11. create getuser API using arrow function and pass (req,res) as a parameter inside() and also pass message "In function call getUser().. I this /users endpoint got hit." inside console.log() 

//we use export const so that it can be used on another files/folder.
export const getUsers=(req,res)=>
{
    console.log("In function call getUser().. I this /users endpoint got hit.")
    res.send(users)
}

//12. create createUser API using arrow function and pass (req,res) as a parameter inside() and also pass message "In function call createUser().. I this /users endpoint got hit." inside console.log() 
export const createUser=(req,res)=>
{
    console.log("In function call createUser() .. I this /users endpoint got hit.")
    res.send("ok")
}

//13. create routes folder inside library
// also create new file inside routes and name it as users.js and then code below codes inside users.js
 
//14.
import express from 'express';
//while runnung the application node will try to include code of express to your code  
//we need to use express for router

//15.
const router = express.Router();
//we will need to get router which we will get from express so for that we will use const variable

//16. create router for getUsers using .get method
router.get("/",getUsers)

//17. create router for createUser using .post method
router.post("/",createUser)

//18.
import {getUsers,createUser} from '../controllers/users.js'
//to import multiple functions at same time we use import{}
// and using '../controllers/users.js' we go back to previous folder and import function from the given folder.Here it is controller

//19.
export default router //router is exported to index.js*/

//20. import userRouter from "./routes/users.js" 
//    Above line is typed inside index.js for using routes folder

//21. server.use("/user",userRouter) 
//here userRouter is called 
//"/user" base endpoint is added inside server.use,no need to use it on router.get()which is in routes folder
//if we use /user then call will go inside userRouter and then on routes and then users.js

//22. now your index.js will look like this:-

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

//23. go to mongodb atlas online and sign in by your gmail id

//24. go to Database access and create new database accordingly

//25. go to Network access and add IP address

//26. go to clusters and then go to Connect and copy the link of your database and paste it in visual Studio code,inside index.js file

//27. go to collection in mongodb atlas and your record will be stored there 

//28. connect API to database(mongodb) 

//29. (copy link from mongodb atlas)mongodb+srv://<username>:<password>@cluster0.b4muw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//30. create variable and assign the link to it (also comment out server.listen(PORT)at the end as it will be used inside .then())

//31. the whole link should be written inside''and write your datbasename and password inside'',like this
//const dbURL='mongodb+srv://gaurav4:gaurav786@cluster0.b4muw.mongodb.net/library?retryWrites=true&w=majority'

//32. to connect API to database(mongodb),we use mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})

//33. after that .then() and .catch() is used to perform operation(.then() and .catch() is a promise()) add steps 34-49 inside index.js

//34. inside,() of .then pass result parameter using arrow function

//35. add message such as "connected to the Database" and "server started successfully" using console.log() and also add server.listen(PORT)

//36. inside,() of .catch pass err parameter using arrow function

//37. add message such as "err" using console.log

//38. Promise (follow below codes)
.then                                    //if code is successful or no error then .then() method is used
(                               
    (result)=>             //here result is parameter
{
        console.log("connected to the Database")
        console.log("server started successfully")
        server.listen(PORT) 

        //if im successfully connected to my database then only start my application 
        //if im not successfully connected to my database then don't start my application 
        //thats why server.listen(PORT)is shifted from end of the code,inside mongodb .then() function 
        //after starting application,"connected to the database" and "server started successfully" will be printed on terminal which assures that we are connected to mongodb and server has started successfully
}
)
  .catch  //if code is not successful or there is error then .catch method is used
(
  (err)=>                  //here err is parameter
    {

        console.log(err)

    }    
)

//39.for hadling mongodb operation,we use mongoose

//40. npm install -save mongoose(to intall mongoose)
//after successfull connecting to the database,then only start your application

//41. for using mongoose we need to import mongoose by using(import mongoose  from "mongoose")

//42. now your index.js file will look like this

import express  from "express"        //This is import statement
import bodyparser from "body-parser"
import userRouter from "./routes/users.js"
import mongoose from "mongoose"

const dbURL='mongodb+srv://gaurav4:gaurav786@cluster0.b4muw.mongodb.net/library?retryWrites=true&w=majority'
mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
.then                                    //if code is successful or no error then .then method is used
(                               
    (result)=>
    {
        console.log("connected to the Database")
        console.log("server started successfully")
        server.listen(PORT) 
        //if im successfully connected to my database then only start my application 
        //if im not successfully connected to my database then don't start my application 
        //thats why server.listen(PORT)is shifted from end of the code,inside mongodb .then() function
    }
)
.catch  //if code is not successful or there is error then .catch method is used
(
    (err)=>
    {
        console.log(err)
    }
)

const server = express()
const PORT=7777
server.use(bodyparser.json())

var homepage=(req,res)=>res.send("Welcome to my library") //handle http://localhost:7777

server.use("/user",userRouter) 

server.get("/",homepage)

//43. create model folder inside library folder and then create users.js file(use step 44,45,53 and 54 to code) 
//after making router and controller we create model
//every record which will be stored inside the document that will be in the form of schema,schema is nothing but definition how it should look like

//44. for creating schema we need to import mongoose
import mongoose from 'mongoose'
//45. after this we must get schema out of it
const Schema = mongoose.Schema  // use this for defining Schema

//46. create schema for user //datatype(const) datatypename(userSchema) = new Schema() //use this for defining schema for endpoint

//47. and inside () of new schema 

//48. create every attribute inside {} and use {} inside ()

//49. create name,gender,age,city and add ":" after them

//50. type and required should be mentioned inside each attribute like this:- 
/*
age:
{
    type:String,
    required:true
},
*/

//51.and after completing each attribute seperate them by "," except last  //this is defining part

//52. use timestamps inside {} and use timestamps at the end

//53.follow below codes:-  //here name,gender,age,city are body which will be created on postman
//postman is used for get,put,patch,delete,etc and for using this method copy your port link to postman 
const userSchema = new Schema 
(
    {
        name:
        {
            type:String,//name attribute should be in String form
            required:true//true,whether string is required or not
        },
        gender:
        {
            type:String,
            required:true
        },
        age:
        {
            type:String,
            required:true
        },
        city:
        {
            type:String,
            required:true
        }
    },{timestamps:true} //shows date and time,when schema is created on postman
)

//54. export const User=mongoose.model('User',userSchema)                     //this (54.) is create in  collectin or database

//model is like a class and how model should look like,we defined it using schema
//model is nothing but,out of schema you need to tell your mongodb,that i need to create user model,so for that we use .model operator
//so whenever .model will connect to your database,it will check whether you have User model there are not 
//basically it will see documnent object,if there is no document object then it will create one,if it is there it will leave as it is 
//and that model must have some schema,it must have some rule defined to it that how it should look like 
//so for creating model into a database,we basically require to pass the schema mongoose.model
//here User variable is used to create different user model object in later coding and thats why it is exported out
