//further code:-(go to step 115)

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

//11. create getuser function  using arrow function and pass (req,res) as a parameter inside() and also pass message "In function call getUser().. I this /users endpoint got hit." inside console.log() 

//we use export const so that it can be used on another files/folder.
export const getUsers=(req,res)=>
{
    console.log("In function call getUser().. I this /users endpoint got hit.")
    res.send(users)
}

//12. create createUser function  using arrow function and pass (req,res) as a parameter inside() and also pass message "In function call createUser().. I this /users endpoint got hit." inside console.log() 
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

//30. create variable and assign the link to it

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

//43. create model folder inside library folder and then create users.js file(use step 53 and 54 to code) 
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

//53.follow below codes:-
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

//55. go to controllers folder and then go to users.js and then go to createUser API and comment out res.send(ok) and then add user.push(req.body) after that.
//56. now your createUser function will look like this:-

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

//57. for using the model or schema we need to import it,for importing it we can simply use import statement
//here we import User from model in controller
import {User} from '../model/users.js'

//58. and now go to getUsers API and comment out res.send(users) and add User.find() in it and then use promise(.then and .catch)

//59. after that .then() and .catch() is used to perform operation(.then() and .catch() is a promise())

//60. inside,() of .then pass result parameter using arrow function

//61. add message such as "connected to the Database" and "server started successfully" using console.log() and also add server.listen(PORT)

//62. inside,() of .catch pass err parameter using arrow function

//63. add message such as "err" using console.log

//64. now your getUsers Api will look like this:-

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

//65. now go to createUser and now comment out user.push(req.body)

//66. create user object for User model //const user = new User()

// inside () of new User add key and value like this, for name,gender,age and city
/*{
        name:req.body.name,
        gender:req.body.gender,
        age:req.body.age,
        city:req.body.city,
    }
*/

//67. User.save() //save() makes sure that data is stored inside the database

//68. now use promise(.then() and .catch())


//69. after that .then() and .catch() is used to perform operation(.then() and .catch() is a promise())

//70. inside,() of .then pass result parameter using arrow function

//71. add message such as "connected to the Database" and "server started successfully" using console.log() and also add server.listen(PORT)

//72. inside,() of .catch pass err parameter using arrow function

//73. add message such as "err" using console.log

//74. now your createUser API will look like this:-

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

//75. create getUserById API using arrow function and pass (req,res) as a parameter inside() and also pass message "In function call getUserById().. I this /users endpoint got hit." inside console.log() 

//76. User.findById(req.params.id)  //for passing user id,req.param.id is used and use findById function 


//77. now use promise(.then() and .catch())


//78. after that .then() and .catch() is used to perform operation(.then() and .catch() is a promise())

//79. inside,() of .then pass result parameter using arrow function

//80. add message such as "connected to the Database" and "server started successfully" using console.log() and also add server.listen(PORT)

//81. inside,() of .catch pass err parameter using arrow function

//82. add message such as "err" using console.log

//83. now your getUserById API will look like this:-

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


//84. controller>users.js will look like this:-

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

//85. go to routes>users.js and create router for getUserById using .get method
router.get("/:id",getUserById) //it should be used as variable and hence colon is used

//86. Add getUserBYId inside import {getUsers,createUser} from '../controllers/users.js',like this
import {getUsers,createUser,getUserById} from '../controllers/users.js'

//now routes>users.js will look like this:-

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

export default router //router is exported to index.js*/

//use postman to use all the above method

//87. go to postman and then copy paste the given link below and you will get desired output:-

//http://localhost:7777
//http://localhost:7777/user
//http://localhost:7777/user/60bfa2a0309b234c0cfff90f(id created for each person)

/*
firstly go to body>raw>JSON and create schema like this(as per schema created inside the model ):-
{
    "name":"Aniket",
    "gender":"Male",
    "age":"22",
    "city":"Mumbai"
}
*/

//88. go to controllers>users.js 

//89. go to getUsers and type req.query using console.log and pass hi message using console.log 
//here req.query will give filtered output from given data inside terminal

//NOTE:-

//earlier we fetch or get record by id but now we will fetch record by name and age(using two attributes only and for that query is used) 
//params is the parameter which you passed to the url //http://localhost:7777/user and query works on the same url
////http://localhost:7777/user it contains bunch of JSON data and query is simply trying to work on bunch of JSON data
//so if query work on it,we will get filtered data,here ? and & are fixed keyword
//if we use query for the url then function is not changed and same function will be used 
//http://localhost:7777/user?name=gaurav&age=22 getUser function is used(no different function should be used)


//fetch record by name,gender,age and city
//http://localhost:7777/user?name=gaurav&gender=male&age=22&city=Mumbai
//you will get desire output on webpage or postman

//90. now your getUsers will look like this:-

export const getUsers=(req,res)=>
{
    console.log("Hi")
    console.log(req.query)
    console.log("In function call getUser().. I this /users endpoint got hit.")
    //res.send(users) //after creating model comment this out

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


//91.go to webpage and type url http://localhost:7777/user?name=gaurav&age=22

// here http://localhost:7777 is a server and port
// user is a endpoint
// name and age are query, gaurav & 22 are values of the query
// here ? and & are fixed keyword

//92. //output:-//here req.query will give filtered output from given data inside terminal
//use http://localhost:7777/user?name=gaurav&age=22 on webpage and you will get filtered data on terminal
//Hi
//{ name: 'gaurav', age: '22' }
//In function call getUser().. I this /users endpoint got hit.

//92.  create deleteUserById API using arrow function and pass (req,res) as a parameter inside() and also pass message "In function call deleteUserById().. I this /users endpoint got hit." inside console.log() 

//93. type User.findByIdAndDelete(req.params.id) inside deleteUserBYId API
// here User is from model , findByIdAndDelete is a function , (req.params.id) //for passing user id,req.param.id is used

//94. now use promise(.then() and .catch())

//95. after that .then() and .catch() is used to perform operation(.then() and .catch() is a promise())

//96. inside,() of .then pass result parameter using arrow function

//97. add message such as "connected to the Database" and "server started successfully" using console.log() and also add server.listen(PORT)

//98. inside,() of .catch pass err parameter using arrow function

//99. add message such as "err" using console.log

//100. now your deleteUserById will look like this:-

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

//101. create updateUserById API using arrow function and pass (req,res) as a parameter inside() and also pass message "In function call updateUserById().. I this /users endpoint got hit." inside console.log() 

//102. go to updateUserById and  type this User.findByIdAndUpdate() and inside () of User.findByIdAndUpdate type req.params.id and then use attributes inside {} seperated by comma like this:-
    User.findByIdAndUpdate
    (req.params.id, 
    {
    name:req.body.name,      //The req. body object allows you to access data in a string or JSON object from the client side for name
    gender:req.body.gender,  //similarly for gender,age,city
    age:req.body.age,        
    city:req.body.city
    }
    ) 


//103. now use promise(.then() and .catch())

//104. after that .then() and .catch() is used to perform operation(.then() and .catch() is a promise())

//105. inside,() of .then pass result parameter using arrow function

//106. add message such as "connected to the Database" and "server started successfully" using console.log() and also add server.listen(PORT)

//107. inside,() of .catch pass err parameter using arrow function

//108. add message such as "err" using console.log

//109. now your updateUserById API will look like this:-

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

//110. now your controllers>users.js will look like this:-

//controllers

//for using this schema we need to import it,for importing it we can simply use import statement
import {User} from '../model/users.js'

//in controllers we define functions

let users=[]//this will act as a user table(database)..later will replace this with DB call

//we use export const so that it can be used on another files/folder.

//query
//earlier we fetch or get record by id but now we will fetch record by name and age(using two attributes only and for that query is used) 
//params is the parameter which you passed to the url //http://localhost:7777/user and query works on the same url
////http://localhost:7777/user it contains bunch of JSON data and query is simply trying to work on bunch of JSON data
//so if query work on it,we will get filtered data,here ? and & are fixed keyword
//if we use query for the url then function is not changed and same function will be used 
////http://localhost:7777/user?name=gaurav&age=22 getUser function is used(no different function are used)
//if we use param you will require different function to solve the url 
//http://localhost:7777/user/id getUserById function is used(also many different function are used)

//fetch record by name,gender,age and city
//http://localhost:7777/user?name=gaurav&gender=male&age=22&city=Mumbai
//you will get desire output on webpage or postman
export const getUsers=(req,res)=>
{
    console.log("Hi")
    console.log(req.query)
    console.log("In function call getUsers().. I this /users endpoint got hit.")
    //res.send(users) //after creating model comment this out

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
    //res.send(users)
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


//111. go to routes>users.js and create router for deleteUserById using .delete method and updateUserById using .patch method
router.delete("/:id",deleteUserById) //it should be used as variable and hence colon is used
router.patch("/:id",updateUserById)

//112. Add getUserBYId inside import {getUsers,createUser} from '../controllers/users.js',like this
import {getUsers,createUser,getUserById,deleteUserById,updateUserById} from '../controllers/users.js'

//113. now your routes>users.js will look like this:-

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
router.patch("/:id",updateUserById)

//http://localhost:7777/user?name=gaurav&gender=male&age=22&city=Mumbai
//here name,gender,age,city are query

export default router //router is exported to index.js*/

//114.

//use postman to use all the above method
// go to postman and then copy paste the given link below and you will get desired output:-

//http://localhost:7777
//http://localhost:7777/user
//http://localhost:7777/user/60bfa2a0309b234c0cfff90f(id created for each person) make some changes in the values and use patch method to update it and use delete method to delete the id
 
//115.go to controllers>users.js 

//116. create getUsersByAge API using arrow function and pass (req,res) as a parameter inside() and also pass message "In function call getUsersByAge().. I this /users endpoint got hit." inside console.log() 

//117. create getUsersByAge API without using export(we will not export it to another files/folder)

//118. type User.aggregate() and inside () of aggregate type  [{$match:{"age":"50"}}] //it will filter out users whose age is 50

//119. now use promise(.then() and .catch())

//120. after that .then() and .catch() is used to perform operation(.then() and .catch() is a promise())

//121. inside,() of .then pass result parameter using arrow function

//122. add message such as "connected to the Database" and "server started successfully" using console.log() and also add server.listen(PORT)

//123. inside,() of .catch pass err parameter using arrow function

//124. add message such as "err" using console.log

//125. now your getUsersByAge API will look like this:-


//aggregate function:-
    //aggregate is used to get particular data of users from the database based on the given key:value
    //for e.g:-to get users of age 50 from database,we use aggregate function using http://localhost:7777/user?age=50 on postman   
    //syntax for aggregate:-functionname.aggregate[{$(opearion:{key:value})}]
//firstly  create getUsersByAge API without using PORT and then add it inside getUsers API
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

//126.now add getUsersByAge API inside getUsers API,now go to getUsers API,use if-else statement like this inside getUsers API:-
//127. type if(req.query.age) inside getUsers API 
//128. then inside {}, type getUsersByAge(req,res) , while getting request(req) from client ,server will give response(res) and hence(req,res) both are used with  getUsersByAge 
//129. type else {console.log("In function call getUser().. I this /users endpoint got hit.")}

if(req.query.age) //for passing user age as query, req.query.age is used
    {
        getUsersByAge(req,res)//add getUsersByAge API inside getUsers API as aggregate function is used inside getUsersByAge API
    }
    else
    {
        console.log("In function call getUser().. I this /users endpoint got hit.")
    }

//130. now your getUsers API will look like this :-

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

//131. now your whole controllers>users.js will look like this:-

//controllers

//using aggregate function

//for using this schema we need to import it,for importing it we can simply use import statement
import {User} from '../model/users.js'

//in controllers we define functions

let users=[]


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


//132. now your model>users.js will look like this:-

//after making router and controllers we create model
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


//133.  now your routes>users.js will look like this:-

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
router.patch("/:id",updateUserById)

//http://localhost:7777/user?name=gaurav&gender=male&age=22&city=Mumbai
//here name,gender,age,city are query

export default router //router is exported to index.js*/

//134.

//use postman to use all the above method
// go to postman and then copy paste the given link below and you will get desired output:-

//http://localhost:7777
//http://localhost:7777/user
//http://localhost:7777/user/60bfa2a0309b234c0cfff90f(id created for each person) make some changes in the values and use patch method to update it and use delete method to delete the id
//http://localhost:7777/user?age=50 (for using aggregation) 

//135. Inside libray folder we have three folders(controller,model,router) and now push library folder to github




