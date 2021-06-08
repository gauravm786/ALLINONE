
//4 April

//index.js

/*
//To connect API to database(mongodb) 
//mongodb+srv://<username>:<password>@cluster0.b4muw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority(copy link from mongodb atlas)
//create variable and assign the link to it 
//to connect API to database(mongod),we use mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
//after that .then and .catch is used to perform operation(.then and .catch is a promise)

//for hadling mongodb operation,we use mongoose
//npm install -save mongoose(to intall mongoose)
//after successfull connectong to the database,then only start your application

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
*/

//controller


/*
//in controllers we define functions

let users=[]//this will act as a user table(database)..later will replace this with DB call

//we use export const so that it can be used on another files/folder.
export const getUsers=(req,res)=>
{
    console.log("In function call getUser().. I this /users endpoint got hit.")
    res.send(users)
}

export const createUser=(req,res)=>        //createUser is used for creating new user
{
    console.log("In function call createUse() .. I this /users endpoint got hit.")
    //res.send("ok")
    user.push(req.body) //it will send [] as output on postman if we use http://localhost:7777/user

    // when the request is sent from frontend to backend
    //data(body) will be wrapped in JSON format and sent as a request from frontend to backend
    //now backend will capture this data(body) either in database or user Array(thatt we are using in our case)
    //so that data(body) is available as req.body
    //whatever data(body) is sent from frontend to backend that body will be captured or available inside req.body
    //now i need to store data of req.body inside my array,so we simply need to push it
    //for that we use user.push(req.body)
}
*/

/*
//for using this schema we need to import it,for importing it we can simply use import statement
import {User} from '../model/users.js'

//in controllers we define functions

let users=[]//this will act as a user table(database)..later will replace this with DB call

//we use export const so that it can be used on another files/folder.
export const getUsers=(req,res)=>
{
    console.log("In function call getUser().. I this /users endpoint got hit.")
    //res.send(users) //after creating model comment this out

    User.find() //to get detail from database there is one function,it will try to find all the record for user,whatever record you got can you simply send it to the response
    .then //until now we were simply getting response from user array,but instead of this we must get respone from database
    (
        (result)=>
        {
            res.send(result)
        }
    )
    .catch
    (
        (err)=>
        {
            console.log(err)

        }
    )
}    

export const createUser=(req,res)=>        //createUser is used for creating new user
{
    console.log("In function call createUse() .. I this /users endpoint got hit.")
    //res.send("ok")
    //user.push(req.body) //after creating model comment this out

    //we need to create object out of model and storing it for that i need to create it first
    //we must create model out of it 

    const user=new User //this User is from model
    (
        {
            name:req.body.name,
            gender:req.body.gender,
            age:req.body.age,
            city:req.body.city,
        }
    )

user.save()//save() makes sure that data is stored inside the database
    .then                            //if code is successful or no error then .then method is used             
    (
        (result)=>                   
        {
            res.send(result)
        }
    )
    .catch          //if code is not successful or there is error then .catch method is used
    (
        (err)=>
        {
            console.log(err)

        }
    )
    
}

export const getUserById=(req,res)=>
{
    console.log("In function call getUserById.. I this /users endpoint got hit.")
    User.findById(req.params.id) 
    .then
    (
        (result)=>
        {
            res.send(result)
        }
    )
    .catch
    (
        (err)=>
        {
            console.log(err)

        }
    )
}
*/

// model 

/*
//after making router and controller we create model
//every record which will be stored inside the document that will be in the form of schema,schema is nothing but definition how it should look like
//for creating schema need to import mongoose
import mongoose from 'mongoose'
//after this we must get get schema out of it
const Schema = mongoose.Schema

//create schema for user
const userSchema = new Schema //new operator schema function(new Schema())     //this is defining part
(
    {
        name:
        {
            type:String,//name attribute should be in String form
            required:true//tue,whether string is required or not
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
export const User=mongoose.model('User',userSchema)                     //this is create in  collectin or database
//model is like a class and how model shoiuld look like,we defined it using schema
//model is nothing but,out of schema you need to tell your mongodb,that i need to create user model,so for that we use .model operator
//so whenever .model will connect to your database,it will check whether you have User model there are not 
//basically it will see documnent object,if there is no document object then it will create one,if it is there it will leave as it is 
//and that model must have some schema,it must have some rule defined to it that how it should look like 
//so for creating model into a database,we basically require to pass the schema mongoose.model
//here User variable is used to create differen user model object in later coding and thats why it is exported out
*/

//routes

/*
//here we are creating routes for users endpoint

import express from 'express';
//we need to use express for router

import {getUsers,createUser,getUserById} from '../controllers/users.js'
//to import multiple functions at same time we use import{}
// and using '../controllers/users.js' we go back to previous folder and import function from the given folder.Here it is controller


const router = express.Router();
//we will need to get router which we will get from express so for that we will use const variable

router.get("/",getUsers)
router.get("/:id",getUserById) //it should be used as variable and hence colon is used
router.post("/",createUser)
//router.delete("/:id",deleteUserById)//it should be used as variable and hence colon is used
//router.patch("/:id",updateUserById)

export default router //router is exported to index.js*/
//4 April end