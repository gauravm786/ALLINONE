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
hi =(message) =>console.log(message + " world") //This is the body of arrow function,if there is one statement in the body of the function of arrow function then you can remove curly braces
hi("hello")
*/

/*5th way to declare a function(without using parenethesis)
hi = message =>console.log(message+" world")
hi("hello")
*/

/*
function hi(message)         //world
{
    console.log(message)
    return "hi"
}

hi(" world")
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

/*whenever you create a variable and dont assign value to it then output is undefined*/

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
    return 9}         //give error as there is nothing in parameter
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
w()
/*
              function()    //this body is assigned to w function   
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
    }
};
student.details()
*/
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
student.getName("Mishra")
*/

/*                                        //Gaurav Mishra
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




/*
var student=                              //undefined Mishra
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
    getName: (LastName)=>
    {
      return  this.getName+" "+LastName
    }
};
var fullname=student.getName("Mishra")
console.log(fullname)
var hi=this.name()
console.log(hi)
*/

function prodofallnumber(a,b)
{
  return a*b
}
var arr=[1,2,3,4,5,6,7,8,9] 
console.log(arr.reduce(prodofallnumber))