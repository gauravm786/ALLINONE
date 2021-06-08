
//15 may
 
//library>index.js

/*
import express  from "express"        
import bodyparser from "body-parser"
import userRouter from "./routes/users.js"
import tutorialRouter from "./routes/tutorials.js"
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
server.use("/tutorial",tutorialRouter)
server.get("/",homepage)
*/

//libray>config>db.postgres.config.js

/*
const pgconfig =
{
    HOST:"localhost",   //host will be localhost
    PORT:'1234',
    USER:"postgres",    //user for my database is postgres
    PASSWORD:"gaurav786",
    DB:"tuts",           //DB means database name
    dialect:"postgres",  //the sequelize with the help of dailect will understand that a user or developer wants to use postgres as a database configuration
    pool:
    {
        max:5, //it means sequelize will have 5 different connection to the database
        min:0, //i there is no operation in the  database we can flush off all the connection and thats why min is used
        acquire:30000,
        idle:10000
    }
}
export default pgconfig
*/

//library>controllers>tutorial.js


/*
import db from '../model/index.js'  //if you write file(instead or in place of model),in that file whatever export you have done that will get assigned to db alias 
const Tutorials = db.tutorials;//if you write folder(istead or in place of model),then it will directly go for index.js file,if ou want to make folder as a module which can be imported later in that case we must have index.js file inside that folder,in index.js file whatever thing you have exportedl,that is exported thing will be be assigned to db.whatever things we have exported in index.jsfile that will be assigned to db.
const Op=db.sequelize.Op;       //op is nothing but sequelize op

export const getAllTutorialsByTitle = (req,res)=>//getAllTutorials is given by Titlt
{
    const title = req.query.title //in request i will get back title,so it is catched here from the request
    var condition = title ? { title: {[op.ilike]:`%${title}`}}:null;  //ternary operaror is used  title ? { title: {[op.ilike]:`%${title}`}}:null; ,ilike is type of operator,ilike will try to match given $title with title of leftsude,if it will be matched then all the rows will be thrown otherwise null will be printed
                                                                      // [op.ilike] is used by sequelize
    Tutorials.findAll({where:condition}) //this is used to retrieve data from sql  //findall is the utility in the sequelize ORM,so for each schema findAll can be used 
    .then
    (data=>
        {
            res.send(data) //sending data out,if something wet wron g then catch is used 
    })
    .catch
    (err=>     //here err is an object
        {
            res.status(500).send //500 means internal error of database 
            ({
                message: err.message || "some error occured while retrieving tutorials" //err.message is an attribute associated with object named err
            })//if err.message is empty then "some error occured while retrieving tutorials" will be printed using OR operator
    })    
};
*/


/*
error on postman:
{
    "message": "password authentication failed for user \"postgres\""//tutorials table does not exist
}
Reason:since we have created the schema but that schema/table does not exist there in database
now go to pgadmin and create table inside pgadmin
*/

//library>model>index.js


/*
import pgconfig from '../config/db.postgres.config.js'
import Sequelize from 'sequelize';
import tutorial from './tutorial.model.js';
console.log(pgconfig) //this new thing added and instead of export const,export default is used and function is defined using const

//first of all we did integration for our database configuration with the sequelize which is done here

const sequelize = new Sequelize  //this is the requirement of aour sequelize to get started
(pgconfig.DB, pgconfig.USER, pgconfig.PASSWORD,//here pgconfig.DB, pgconfig.USER, pgconfig.PASSWORD are different parameter which it should required
{    
    host: pgconfig.host,         //we get host from pgconfig and similarly for dialect and pool
    dialect: pgconfig.dialect,
    port:pgconfig.PORT,
    operatorsAliases : false,
    pool:
    {
        max:pgconfig.pool.max,
        min:pgconfig.pool.min,
        acquire:pgconfig.pool.acquire,
        idle:pgconfig.pool.idle
    }
})


//we are including schema with sequelize which is done here 
const db=
{
sequelize:sequelize,
Sequelize:Sequelize,
//sequelize is used here for to make  schema inside the tutorial function 
//Sequelize is the imported one in which we need to use for defining the standard datatypes from the 'sequelize' module.
tutorials:tutorial(sequelize,Sequelize) //using tutoril function from tutorial.model
//we require (sequelize,Sequelize) with our schema ,so that it will be integrted by our sequelize
}
export default db 
*/

//library>model>tutorial.model.js

/*
const tutorial=(sequelize,Sequelize)=>
{
   const Tutorial = sequelize.define
   ("tutorial",                        //defining tutorial
   {                                   //table name is tutorial
      title:                           //title,description and published are column
      {
         type:Sequelize.STRING
      },
      description:
      {
         type:Sequelize.STRING
      },
      published:
      {
         type:Sequelize.STRING
      }
   },
   { timestamps:false}) //to avoid "message": "column \"createdAt\" does not exist" we use timestamps:false,we get [] on postman 
   return Tutorial;
}                          
export default tutorial
*/

//library>routes>tutorial.js


/*
//creating new router for postgresql

import express from "express"
//while runnung the application node will try to include code of express to your code  
//we need to use express for router

import {getAllTutorialsByTitle} from '../controllers/tutorial.js'
//to import multiple functions at same time we use import{}
// and using '../controllers/users.js' we go back to previous folder and import function from the given folder.Here it is controller


const router = express.Router();
//we will need to get router which we will get from express so for that we will use const variable

router.get("/",getAllTutorialsByTitle)

export default router
*/
//15 May end