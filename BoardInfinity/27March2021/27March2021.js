
//27 march

//callback.js

//comma operators
//x++ post increment,the value of x will be increnmented,but previous value of x(initial value of x) will be assigned to x
//++x pre increment,the value of x will be incremented first and then incremented value is assigned to x

/*
var x=10           //10
x=x++
console.log(x)

var x=10           //11
x=++x
console.log(x)

var x=10           //11 
x=++x //value is incremented i.e11
console.log(x++) //but here previous value is 11,we will get 11 as output

var x=10           //12 
x=++x //value is incremented i.e11
console.log(++x) //value is again incremented(previous value is 11),we will get 12 as output
*/

//now use comma operator //it is executed from left to right

/*
var x=10//11 //first value is assigned and then incremented,value is incremented after comma and then it is assigned to x
x=x++ ,x
console.log(x)
*/

/*
var x=10//11 //first value is incremented and then it is assigned to x as 11,after comma  value of x is 11 as x is directly called(it holds previous value 11)
x=++x ,x
console.log(x)
*/

/*
function returnNum(x)  //3 //initially x=1,then using x++ it is assigned and updated as 2,then using  ++x from 2 it is upated to 3
{                      //using x it will hold previous value 3,so output is 3(1,2,3,3)
    return x,x++,++x,x
}
result=returnNum(1)
console.log(result)
*/
/*
function returnNum()       //50 
{
    return 10,20,30,40,50
}
result=returnNum()
console.log(result)
*/

/*
function returnNum()       //[ 10, 20, 30, 40, 50 ]
{
    return [10,20,30,40,50]
}
result=returnNum()
console.log(result)
*/

//web app
// login 

//synchronous behaviour:-each request is executed one by one
//asynchronous behaviour:-each request is not executed one by one
//closure means passing one function as a parameter to other function and other function decides when to execute function whic is passed as a parameter

//callback function is used for asynchronous behaviour
/*
console.log("start")                   //first var is executed,then function in general
function login(username,password)      //in this case of asynchronous,output is start,random,End,user is authenticated
{                                      //first var is read,then console.log("start"),then function login,then set timeout
    returnData=function()              //then return random,then return end and after 5 sec "user is authenticated"
    {                                  //because using setTimeout returnData is executed
        console.log("user is authenticated")
        return "validated"
    }
    setTimeout(returnData,5000)
    return "random"
}
var isvalidated=login("gaurav","gaurav")
console.log(isvalidated)
console.log("End")
*/

//what if we send the value to function and timeout and value is channged later in the code

/*
//callback function is used for asynchronous behaviour
var g=10 //1                  //output is 11,12,EndIn callback function,13
console.log("start")    //2               
function login()   //then we get inside the login   
{                                      
    returnData=function() //4 //it is initialised but not executed,returnData is initialised with login function           
     { //9 //after 5sec this whole function will come into picture,//9.2then it will try to get the latest global value(++g)
        console.log("In callback function")//9.1 //9.2 //the latest global value is 12,so it will try to increment 12 to 13
        console.log(++g) //9.2 //latest value is 13
    }
    setTimeout(returnData,5000) //5 //it will execute after 5 sec,it is halted for 5s
    return ++g //6 //it is initialised with var result
}
var result=login()//3 //then login is called,then we get inside the login //6 //the value which result will get is ++g i.e11
++g                //7 // it becomes 12,second time incremented
console.log(result) //6 //value is 11 //after calling
console.log(g)//7 //value is 12,after calling
console.log("End")//8
*/
/*
functionname=function() means we are assigning functionname with function()
returnData=function()means we are assigining returnData with  function()

*/

//mylib.js  //note mylib.js and app.js should be worked parallely

//module:-
/*To create our own module we use module.exports.function_name=function_name
console,module and require are global object.
This whole function is used as a module
built-in library is also used as module
*/

/*
function iseven(x)
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
function printarr(arr)
{
    console.log(arr)
}

//whatever function is there it is exported in form of modules,so that this function can be accessed from the different file as well
module.exports.iseven=iseven  //can get output if coded till here(its even)
module.exports.printarr=printarr
//module and exports is a global object
//the above whole function is assigned with 
//here iseven,printarr is just a variable 
//using export will export =iseven part of function to whole context of your code
//so whenever you will try to import this part of thing(mylib) to some other part(app),then export is initialised with all this variable and value will be functions 
//module.exports.iseven=iseven
//module.exports.variable=function
//variable is assigned to function like this:-variablename=function()
//so whenever you are trying to import the module,the module object is initialised by these exported variables
//so if you want to use exported variable,you can use and basically you are accessing the functions in a directory 
*/

//http module is provided by node itself,so you dont need to pass the path,you can directly write the module name,so it will be imported and assigned to http variable

/*
var http=require("http")
http.createServer(myfunc).listen(8888)
*/

//app.js

/*
var features=require("./mylib")//this is basically user defined module
features.iseven(10)    //it is used to give value in suggested file for output
//code of mylib is imported to app.js
//to use module syntax is var varname=require(./path),where ./ gives suggestion of files you want to use
//so if you are usingyour own library then you have to give the path
//to use the module require keyword is used,require is a global object
*/

//myapp.js  //example of  make simple helloworld app

/*
var http=require("http")//here http module is provided by node itself,so you did not need to pass the path,you can directly write module name,
//so it will be imported here and will be assigned to http variable
function myfunc(request,response)//myfunc is defiined
{
console.log("My app got started")
response.writeHead(300,{"content-Types":"text/plain"}) //response.writeHead opens stream and send data continuously,it basically opens a pipe from your application to the front end part,so that you can continuously send data from string 
response.write("THE NEXT BIG THING IS BROCK LESNAR")
response.end()//it is basically used to stop the stream
}
http.createServer(myfunc).listen(8888)//here myfunc will executed and registered

//THe above function is a very basic way to create hello world app but in my case THE NEXT BIG THING IS BROCK LESNAR
*/
//27 march end