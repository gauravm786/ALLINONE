//comma operators
//x++ post increment,the value of x will be increnmented,but previous value of x(initial value of x) will be assigned to x
//++x pre increment,the value of x will be incremented first and then incremented value is assigned to x

/*
var x=10           //10
x=x++
console.log(x)
*/

/*
var x=10           //11
x=++x
console.log(x)
*/

/*
var x=10           //11 
x=++x //value is incremented i.e11
console.log(x++) //but here previous value is 11,we will get 11 as output
*/

/*
var x=10           //12 
x=++x //value is incremented i.e11
console.log(++x) //value is again incremented(previous value is 11),we will get 12 as output
*/

//now use comma operator //it is executed from left to right

/*
var x=10//11 //first value is assigned and then incremented,value is incremented after comma and it becomes then it is assigned to x
x=x++ ,x
console.log(x)
*/

/*
var x=10//11 //first value is incremented and then it is assigned to x as 11,after comma value of x is 11 as x is directly called(it holds previous value 11)
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
//closure means passing one function as a parameter to other function and other function decides when to execute function which is passed as a parameter

/*
console.log("start")                   
function login(username,password)      //in this case of asynchronous,output is start,random,End,user is authenticated
{                                      //first execution goes to console.log("start") and then vaar isvalidated,then function login,then set timeout
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

//if we send the value to function and timeout and value is channged later in the code


//callback function is used for asynchronous behaviour
var g=10 //1                  //output is 11,12,End,In callback function,13
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


/*
functionname=function() means we are assigning functionname with function()
returnData=function()means we are assigining returnData with  function
clousure means passing a function into a function,to pass function into a function we use parameter
*/

