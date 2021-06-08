
//11 April

//index.js


/*
import express  from "express"        
import bodyparser from "body-parser"
import userRouter from "./routes/users.js"
import mongoose from "mongoose"

const dbURL='mongodb+srv://gaurav4:gaurav786@cluster0.b4muw.mongodb.net/library?retryWrites=true&w=majority'
mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
.then                                    
(                               
    (result)=>
    {
        console.log("connected to the Database")
        console.log("server started successfully")
        server.listen(PORT) 
    }
)
.catch  
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
//using aggregate function

//for using this schema we need to import it,for importing it we can simply use import statement
import {User} from '../model/users.js'

//in controllers we define functions

let users=[]

export const getUsers=(req,res)=>
{
    console.log("Hi")
    console.log(req.query) //for getting filtered data query is used
    if(req.query.age) //for passing user age as query,req.query.age is used
    {
        getUsersByAge(req,res)//add getUsersByAge API inside getUser API as aggregate function is used inside getUserByAge API
    }
    else
    {
        console.log("In function call getUser().. I this /users endpoint got hit.")
        User.find() 
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
}    
//output:-//here req.query will give filtered output from given data inside terminal
//use http://localhost:7777/user?name=gaurav&age=22 on webpage and you will get filtered data on terminal
//Hi
//{ name: 'gaurav', age: '22' }
//In function call getUser().. I this /users endpoint got hit.

export const createUser=(req,res)=>        //createUser is used for creating new user
{
    console.log("In function call createUse() .. I this /users endpoint got hit.")
    //res.send("ok")
    //user.push(req.body) //after creating model comment this out

    //we need to create object out of model and storing it for that i need to create it first
    //we must create model out of it 

    const user=new User //this Uaer is from model
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
    //res.send(users)
    User.findById(req.params.id) 
    //User.findById returns promise because (req.param.id) function is executed asnynchronously
    //by behaviour of promise it is fixed that it has two function .then() and .catch()
    //so in future if promise has response or result then .then() function is executed
    //if promise has error then .catch() function is executed
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


export const deleteUserById=(req,res)=>
{
    console.log("In function call deleteUserById.. I this /users endpoint got hit.")
    //res.send(users)
    User.findByIdAndDelete(req.params.id) //for passing user id,req.param.id is used
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


export const updateUserById=(req,res)=> //patch is basically used to update a particular entry and update is use to update the entire entry
{
    console.log("In function call updateUserById.. I this /users endpoint got hit.")
    //res.send(users)
    User.findByIdAndUpdate
    (req.params.id, 
    {name:req.body.name,
    gender:req.body.gender,
    age:req.body.age,
    city:req.body.city

    }) 
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

//aggregate function:-
    //aggregate is used to get particular data of users from the database based on the given key:value
    //for e.g:-to get users of age 50 from database,we use aggregate function using http://localhost:7777/user?age=50 on postman   
    //syntax for aggregate:-functionname.aggregate[{$(opearion:{key:value})}]
//firstly  create getUsersByAge API without using PORT and then add it inside getUser API
const getUsersByAge=(req,res)=>
{
    console.log("In function call getUserByAge().. I this /users endpoint got hit.")
    User.aggregate                
    //aggregate is used to get particular users from the database based on the given value
    //for e.g:-to get users of age 50 from database,we use aggregate function    
    //syntax for aggregate:-functionname.aggregate[{$(opearion:{key:value})}]
    (
        [{$match:{"age":"50"}}] //it will filter out users whose age is 50
    )

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

//model 

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
    },{timestamps:true} //shows date,when schema is created on postman
)
export const User=mongoose.model('User',userSchema) 
*/

//routes


/*
//here we are creating routes for users endpoint

import express from "express"
//while runnung the application node will try to include code of express to your code  
//we need to use express for router

import {getUsers,createUser,getUserById,deleteUserById,updateUserById} from '../controllers/users.js'
//to import multiple functions at same time we use import{}
// and using '../controllers/users.js' we go back to previous folder and import function from the given folder.Here it is controller


const router = express.Router();
//we will need to get router which we will get from express so for that we will use const variable

router.get("/",getUsers)
router.get("/:id",getUserById) //it should be used as variable and hence colon is used
router.post("/",createUser)
router.delete("/:id",deleteUserById)//it should be used as variable and hence colon is used
router.patch("/:id",updateUserById) //patch is basically used to update a particular entry and update is use to update the entire entry



//http://localhost:7777/user?name=gaurav&gender=male&age=22&city=Mumbai
//here name,gender,age,city are query

export default router //router is exported to index.js
*/
//11 April End