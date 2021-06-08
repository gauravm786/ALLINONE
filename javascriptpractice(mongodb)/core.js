
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
{
    "name": "myapp",       //application name
    "version": "1.0.0",    //version of our newly created application
    "main": "index.js",
    "scripts": {           //script is very important it tells machine what to do
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "keywords": [],
    "description": ""
  }
*/

/*
dev means develop
prod means production
eslint will check whether the syntax is correct or not 
*/

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



















































































































































































































