
//20 March

//Arrowfunction

/*1st way to create a function
cc()                  //calling the function
function cc()         //declare the function
{
    console.log(4)
}
*/

//we call function a first class object,we can use function as datatype

/*2nd way to create a function,here hi is an object because we call function a first class object
var hi=function(message)//This is anonymous function(anonymous which does not have name)
{
 console.log(message)
}
hi("hello")
*/

/*3rd way to create a function(Arrowfunction) 
hi =(message) =>{console.log(message + " world")} //This is the body of arrow function
hi("hello")
*/

/*4th way to create a function(special case it has one statement only)
hi =(message) =>console.log(message + " world") //This is the body of arrow function,
if there is one statement in the body of the function of arrow function then you can remove curly braces
hi("hello")
*/

/*5th way to declare a function(without using parenethesis)
hi = message =>console.log(message+" world")
hi("hello")
*/

/*
function hi(message)//2         //world(you called the function with message),control will flow from 50 to 44 and then 46
{
    console.log(message)//3
    return "hi"                  
}

hi(" world")//1
*/
/*
function hi(message)//2       //world(you called the function with message),control will flow from 50 to 44 and then 46
{
    console.log(message)//3
    return "hi"               // returning a value hi and to catch this variable we need to assign new variable
}

var mess =hi(" world")//1   //whatever value which is returned from this function[hi("world")] will be assigned to mess variable
console.log(mess)
*/

/*
function hi(message)//2         //world 
{
    console.log(message)//3
    
}

var mess=(" world")/1
console.log(mess)
*/

/*
function hi(message)//2         //world 
{                               //udefined because return hi is not used and return is used to get out of the function
    console.log(message)//3
    
    
}

var mess=hi("world")//1
console.log(mess)
*/

/*
function hi(message)//2         //world 
{                               //hi is not used while assisging to mess variable 
    console.log(message)//3
    return  "hi"
    
    
}

var mess=("world")//1
console.log(mess)
*/

/*
function hi(message)            //world
{                               //[Function: hi] bcausse it is not written inside" "
    console.log(message)
    return hi

}

var mess = hi("world")
console.log(mess)
*/

/*
function hi(message)            //world
{                               //hi
    console.log(message)        //because control will go out of function as return is used,anything written return after will not be executed
    return "hi"
    console.log("yes")
    console.log("no")

}

var mess = hi("world")
console.log(mess)
*/

/*
function hi(message)            //world
{                               //yes
    console.log(message)        //no
    console.log("yes")          //hi
    console.log("no")
    return "hi"
}
var mess = hi("world")
console.log(mess)
*/

/*1st way
function hi(message)            //world
{                               //yes
    console.log(message)        //no      
    console.log("yes")          //undefined
    console.log("no")
}

var mess = hi("world")
console.log(mess)
*/

/*2nd way
var hi=function(message) //gaurav
{                        //9
 console.log(message)
 return 9
}
var mess = hi("gaurav")
console.log(mess)
*/

/*3rd way
hi =(message) =>{                             //hello world
    console.log(message + " world")           //9
    return 9
} 
var mess = hi("hello")
console.log(mess)
*/

/*4th way
hi =(message) =>console.log(message+" world") //valid
hi =(message) =>{return message} //valid
hi =(message) =>return message   //invalid
var mess = hi("hello")
console.log(mess)
*/

/*5th way
hi = message =>{return 9}         //9 
var mess = hi("world")
console.log(mess)
*/

/*
hi= ()=>{
   console.log(message +"world") 
    return 9}         //give error as there is nothing as a parameter
*/

/*
hi= ()=>{                          //message is not defined as error
 console.log(message+ "world") 
 return 9}  
hi()     
*/

/*
hi= ()=>{                      //world                     
    console.log("world") 
    return 9}  
   hi()  
*/

//return a function from a function(a function can be assigned to a variable)

/*
function hello(message)
{
    console.log(message)         //2 output hi is printed
    var world = function()       //               function() //here this is a body and this will be assigned to world variable and now we are returning world
    {                            //{console.log("message")}
    console.log("message")
    }
    return world        //world holds function()    //this body is assigned to w function   
}        // {console.log("message")} and then it is assigned to w variable and it becomes function also w function(){console.log("message")} 
 //and now w becomes function w=  function(){console.log("message")} and we call function use w()                           

w=hello("hi")//1 //you called a function hello()
w()           //you called w() function
/*
              function()    //this body is assigned to w function indirectly and directly to hello function
{console.log("message")}
*/
//at last we call w function with parenethesis like w()   
//w is a function because the function is returned from hello function 
//if we call w() then console.log("message") is called and data("message") gets printed
//whenever function is returned it will be assigned to new variable

/*
function hello(message)        //hi
{                              //[function: world]
    console.log(message)       //[function: world] here function is in the form of object
    var world = function()
    {
        console.log("message")
    }
    
    console.log(world)
    return world
}
w=hello("hi")
console.log(w)
*/


//include function inside object

/*
var student=
{
    Name:"Gaurav",
    Address:"Google",
    RollNumber:12,
    isGraduated:true,
    12:123,
    details: function()
    {
       console.log("try to print details")
    }
};
student.details()
*/

//using this keyword you will be able access all the entity of your object
//this operater tells that which entity or attribute you want to use.
//this is a pointer pointing to the object

/*
var student=                //Gaurav,Google,12,true,123
{
    Name:"Gaurav",
    Address:"Google",
    RollNumber:12,
    isGraduated:true,
    12:123,
    details: function()
    {
       console.log(this.Name)
       console.log(this.Address)
       console.log(this.RollNumber)
       console.log(this.isGraduated)
       console.log(this[12])
    }
};
student.details()
*/

 /*                                       //Gaurav Mishra
var student=
{
    Name:"Gaurav",
    Address:"Google",
    RollNumber:12,
    isGraduated:true,
    12:123,
    details: function()
    {
       console.log(this.Name)
       console.log(this.Address)
       console.log(this.RollNumber)
       console.log(this.isGraduated)
       console.log(this[12])
    },
    getName: function(LastName)
    {
        return this.Name+" "+LastName
    }
};
var fullname=student.getName("Mishra")
console.log(fullname)
*/

//varletconst

/*3 ways for defining variable
1.var:-
you can create variable into global scope
2.let:-
it is local to the scope or block
3.const:-
here the reference variable value will be constant,you need to initialize the data while declaring it

*/

/*
for(var i=0;i<3;i++)       //0
{                          //1
    console.log(i)         //2
}
*/

/*
for(var i=0;i<3;i++)       //0 //var will execute outside the function and we get 3 as a output at end
{                          //1
    console.log(i)         //2
}                          //3
console.log(i)
*/

/*
for(let i=0;i<3;i++)       //0 //let is local to the block and it cannot be accessed out of the function
{                          //1
    console.log(i)         //2
}                          
console.log(i)             //and then error
*/

/*
for(let i=0;i<3;i++)       //0 //let is local to the block and it cannot be accessed out of the function
{                          //1
    console.log(i)         //2
}                          
*/

/*
{
    var ii = 0             //0
    console.log(ii)        //0
}
console.log(ii)
*/
//the reference of this variable is global in this case,it won't be fixed inside this block({})
//whenever you try to access value of var variable outside the block it will not give error
/*
{
    let ii = 0             //0
    console.log(ii)        //and then error
}
console.log(ii)
*/
//whenever you try to access value of let variable outside the block it will give error

/*
var i=10                //0 //initially we define i=10 but i=0 is defined inside for loop and we get output 0,1,2
for(var i=0;i<3;i++)    //1
{                       //2
    console.log(i)
}
*/

/*
var i=10                //0 //initially we define i=10 but i=0 is defined inside for loop and we get output 0,1,2,3
for(var i=0;i<3;i++)    //1
{                       //2
    console.log(i)      //3 
}
console.log(i)
*/

/*
var i=10            //0 //the value will get overwritten because the scope is global not local
{                   //0 //the scope of this variable is global not locl
    var i=0
    console.log(i)
}
console.log(i)
*/

/*
let i=10            //0  
{                   //10 
    let i=0
    console.log(i)
}
console.log(i)
*/                                

/*
const age;               //will show error
age=10                   //you need to initialize the data while declaring it
console.log(age)          //type error:- assignment to constant variable
*/

/*
const age =10        //10
console.log(age)
*/

/*
var i;               //10
i=10;
console.log(i)
*/

/*
let i                //10
i=10
console.log(i)
*/

/*
const age ;               //will show error
age=age+1                 //you need to initialize the data while declaring it
console.log(age)          //syntax error:-missing intializer in const declaration
*/

/*
const student=                //Rohan
{
    Name:"Gaurav",
    Address:"Google",
    RollNumber:12,
    isGraduated:true,
}
student.Name="Rohan"
console.log(student.Name)
*/

/*
const student=                       //Gaurav              
{
    Name:"Gaurav",
    Address:"Google",
    RollNumber:12,
    isGraduated:true,
}
student.Name="Rohan"
student1=                
{
    Name:"Gaurav",
    Add:"Google",
    rrr:12,
    aa:true,
}
console.log(student1.Name)
*/

/*
const student=                //Mishra Gaurav
{
    Name:"Gaurav",
    Address:"Google",
    RollNumber:12,
    isGraduated:true,
}
student.LastName="Mishra"      //adding new atrribute to student object
console.log(student.LastName+" "+student.Name)
*/

//Array

/*
Array is collection of data,different data are allowed here
2 ways of declaring arrays

1.using []
example:-
var name=["Murali","Rohan","Rohit","Gaurav"]
0      1        2       3      
Murali,Rohan,Rohit,Gaurav are element of the array
Array is assigned as index(like 0,1,2,3)
Index will start from 0,negative index give undefined as output
Array is special type or refined type of an object
if array is created and some metod is already defined,then it is called as predefined method
Array and object store collection of data,array is special case and in array we have more feature of accessing data 
but object holds the classical way.array is just implementation of object
*/

/*
var named=["Murali",90,"Rohan","Rohit","Gaurav"] 
console.log(named[0])//Murali
console.log(named[1])//90
named.push("Rahul") //will add new element in array //["Murali",90,"Rohan","Rohit","Gaurav","Rahul"]
console.log(named)
console.log(named[-1])//undefined because index cannot be assigned in negative
console.log(named[named.length]) //undefined because im trying to assign data which is at index named.length 
console.log(named.length)//it will give length of array //5
console.log(named[named.length-1]) //Gaurav(it will show last element in the array)
*/

/*
var named=["Murali",90,"Rohan","Rohit","Gaurav"] //5,Gaurav,Rahul
console.log(named.length)
console.log(named[named.length-1])
named.push("Rahul")
console.log(named[named.length-1])
*/

/*
2.use new Array() //not recommended to use
ex:
var named=new Array ("Murali",90,"Rohan","Rohit","Gaurav") 
*/

/*
var named=new Array ("Murali",90,"Rohan","Rohit","Gaurav")   //5,Gaurav,Rahul
console.log(named.length)
console.log(named[named.length-1])
named.push("Rahul")
console.log(named[named.length-1])
*/
//20 March end
