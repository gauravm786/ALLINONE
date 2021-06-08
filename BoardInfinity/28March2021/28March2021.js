
//28 march 

//core.js  execute core.js and core2.js parallely
/*
function printval()   //[Arguments] { '0': 'Aniket', '1': 12, '2': 122 }
{
    console.log(arguments)   //arguments is a keyword in javascript or nodejs,it is basically used to capture arguments which you will be passing through particular function(here it is printval)
   
 //,but here argument is in the form of object, if console.log(arguments) is not empty then it must executed inside the function
    //but if console.log(arguments) is empty then it is not executed inside the function and it will be nil
    //if we use console.log(arguments) then output will be in vast module form,directory means folder or repository

}
printval("Aniket",12,122)
//the data which is printed from this particular argument is in the form of object
*/    

//npm is used to manage or mantain node modules
//to enabling the npm to use inside our project,we need to use first command npm init
//in package.json name and version is important,it is similar to object(key:value) which include keys and value
//the keys and values can be in the form of string,boolean,integer,float,array,sub part of json
//you can also use one json inside another json
//if you are sending data from front end to back end,so in that request data will be send in form of json
//and whatever response you will be getting from backend to frontend that response will also be in form of json
//json is just a file format,so its the way we store data inside it




/*
console.log(arguments)
*/  

/*
//it should be used 
//wrapped inside a function IIFE(immediately invoked function expression)
//(function(exports,require,module,__filepath,__dirname)){
  exports.name="Gaurav"
  console.log(arguments)
  //reurn exports //return exports is catched by var name on another file
  //})()
*/  

/*
//1.
//wrapped inside a function IIFE(immediately invoked function expression)
//(function(exports,require,module,__filepath,__dirname)){
  exports.name="Gaurav"
  //console.log(arguments)
  //reurn exports //return exports is catched by var name on another file
  //})()
*/

/*
//1.1
exports.name="Gaurav"
*/

/*
//1.2
exports.name="Gaurav"
*/

/*
//1.3
console.log("Hey,i got executed only one time")
*/

/*
//2.if used without wrapped inside function
exports.name="Gaurav"
console.log("Hey,i got executed only one time") //from previous class
*/

 /*
 //3.if used inside this wrapped inside function
//wrapped inside a function IIFE(immediately invoked function expression)
//(function(exports,require,module,__filepath,__dirname)){
  exports.name="Gaurav"
  //console.log(arguments)
  console.log("hey,i got executed only one time")
  //reurn exports
  //})()
 */
 
  /* 
  //4.export in module form
   module.exports=(x)=>
  {
      if (x%2==0) 
      {
          console.log("its even")
      }
      else
      {
          console.log("its odd")
      }
  }
 */     

  //if you want to use multiple exports

/*  
//5. 6. code are export in module form
module.exports=
{
  isEven:(x)=>
  {
      if (x%2==0) 
      {
          console.log("its even")
      }
      else
      {
          console.log("its odd")
      }
  },
    en:(x)=>
    {
        if (x%2==0) 
        {
            console.log("its even")
        }
        else
        {
            console.log("its odd")
        }
    },
    notodd:(x)=>
    {
        if (x%2==0) 
        {
            console.log("its even")
        }
        else
        {
            console.log("its odd")
        }
    },
    Even:(x)=>
    {
        if (x%2==0) 
        {
            console.log("its even")
        }
        else
        {
            console.log("its odd")
        }
    }
}
*/


//create myapp folder in javascriptpractice and install package.json file using npm init -y
//copy myapp.js file inside myapp folder
//make some changes in package.json

/*
{
    "name": "myapp",                //application name              
    "version": "1.0.0",             //version of our newly created application
    "description": "a simple app to demo for BI students",
    "main": "index.js",
    "scripts": {                     //script is very important it tells machine what to do
      "test": "echo \"Error: no test specified\" && exit 1",
      "prod":"npm start",
      "start": "node myapp.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "type":"module"
    }
*/    

/*
dev means develop
prod means production
eslint will check whether the syntax is correct or not 
*/

//core2.js

/*    
//1.         //output:-vast output {name:'Gaurav'}
require('./core')
*/

/*
//1.1                 //output:- no output
require('./core.js')
*/

/*
//1.2                   //output:-{name:'Gaurav'}
var named =require('./core')   
console.log(named)
*/

/*
//1.3
require('./core')
*/

/*
const { from } = require("core-js/core/array")
*/

//if you use require inside js multiple times,it will show output one time only not multiple times

/*
require('./core')
require('./core')
require('./core')
require('./core')
require('./core')
*/

/*
//2.
var catchreturnedvalue=require('./core.js') 
console.log(catchreturnedvalue)
//output:-Hey,i got executed only one time
//{ name: 'Gaurav' }
//without using exports.name="Gaurav" output will be Hey,i got executed only one time,{} 
*/

/*
//3.
var catchreturnedvalue=require('./core')
console.log(catchreturnedvalue.name)
//output:-hey,i got executed only one time
//        Gaurav
//without using exports.name="Gaurav" output will be Hey,i got executed only one time,undefined 
*/

/*
//4. output:-its even
require('./core.js')(10)
*/

/*5.
//to use multiple method of core.js use dot(.) operator
//1st way:-
//require('./core.js').notodd(11) //its odd
//2nd way:-
//var lib=require("./core.js") //its odd
//lib.isEven(19)
*/

//require dynamically attach/execute core.js file code to core2.js file
//import statisticaaly include codes while require dynamically includes code

//create newcore.js file inside myapp folder
//newcore.js

/*
//6.import                              output:-its even
//import is latest and widely used in react
import importcore from '../core.js' //.. it will go behind the scene(one folder back) and try to get the data   //in import file is imported without using brackets
importcore.isEven(10)
*/

/*
//"type": "module" using this("type": "module" ) module can be loaded in any file
//commonjs is used for require
//module is used for import
*/


//this is the standard way of coding
/*
import http from "http"

//created a server

const server=http.createServer()

//events //for executing events events(on server on a particular request, you can include a function)

server.on('request',myfunc)

function myfunc(request,response)
{
console.log("My app got started")
response.writeHead(300,{"content-Types":"text/plain"}) //response.writeHead opens stream and send data continuously,it basically opens a pipe from your application to the front end part,so that you can continuously send data from string 
response.write("Hello New World")
response.end()//it is basically used to stop the stream
}
server.listen(7777)
*/

/* it is executed two times because whole function is executed two times,the whole function is execued twice by browser
My app got started
My app got started
*/

/*
//to check request(for which request url is called)

//this is the standard way of coding
import http from "http"

//created a server

const server=http.createServer()

//events //for executing events

server.on('request',myfunc)

function myfunc(request, response)
{
console.log("Request:    ", request.url)
response.writeHead(300,{"content-Types":"text/plain"}) //response.writeHead opens stream and send data continuously,it basically opens a pipe from your application to the front end part,so that you can continuously send data from string 
response.write("Hello New World")
response.end()//it is basically used to stop the stream
}
server.listen(9999)
*/

/*
Request:     /     (initially it is local host only)
Request:     /favicon.ico (sending one more request to te node application)
so two request is hit by the browser to our node application
*/

/*
//output:-
Request:     /
Request:     /favicon.ico
Request:     /getname
Request:     /favicon.ico
Request:     /getage
Request:     /favicon.ico
*/
//28 March end
