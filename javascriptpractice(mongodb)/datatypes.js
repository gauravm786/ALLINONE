/*13th March
datatypes
 2 types of datatypes - 1.primitive data type (Numbers-1,2,3,1,1, String- "Rajan", boolean- true and false)
                        2.Non primitive data types(object, array, etc)
//mostly data are stored into variable.for ex: Numbers, String, boolean, undefined
//Type coercion (auto-conversion)
//conditions
//loops
//object {data of different primitive data typess}

/*
1.boolean
    //var isvalid = "Gaurav";
    //console.log(isvalid)   //Gaurav

    //var isvalid = "Gaurav";
    //isvalid=true;
    //console.log(isvalid)   //true

     //var isvalid = "Gaurav";
     //isvalid=true;
     //isvalid=12
     //console.log(isvalid)   //12

    //var isvalid = "Gaurav";
    //isvalid=true;
    //isvalid=12
    //isvalid=13
    //console.log(isvalid)   //13
   
   //var name;
   //console.log(name)       //undefined
*/


//object
//var variable_name = {key: value,key2: value2,....,key10:value10}
//var student={Name:"Gaurav",Address:"Google",RollNumber:12,isGraduated:false};
//console.log(student)      //{Name:'Gaurav',Address:'Google',RollNumber:'12',isGraduated:false}

//var student={Name:"Gaurav",Address:"Google",RollNumber:12,isGraduated:true,12:123};
//console.log(student)
//console.log(student.Name)
//console.log(student.Address) 
//console.log(student.RollNumber)
//console.log(student.isGraduated)
//console.log(student[12])  //{Name:'Gaurav',Address:'Google',RollNumber:'12',isGraduated:false}|Gaurav|Google|12|true|123

//var student={Name:"Gaurav",Address:"Google",RollNumber:12,isGraduated:true,12:123};
//console.log(student)
//console.log(student.Name)
//console.log(student.Address) 
//console.log(student.RollNumber)
//console.log(student.isGraduated)
//console.log(student[12])

//NULL 

/*null is used in term with objects (if object doesnt get  assigned to a particular variable,
in that case null is assigned to it automatically)*/
/*undefined means that particular variable is not assigned to any datatype*/ // student is a reference variable
//student=null
//console.log(student)
//student=undefined
//console.log(student)

//var name1 = null; //empty(not undefined) //reference variable:- a variable  used to assign object
//var name1 = null;
//var first=10+30+"Rohan"
//console.log(first)      //40Rohan

//type coercion(auto conversion of one datatype to another)
//first="Rohan"+10+30
//console.log(first)      //Rohan1030

//var name1 = null;
//var first=true+10+30+" Rohan"//because true=1 and false=0
//console.log(first)           //41 Rohan 

//is there is a way to skip lines based on some condition,yes,by using condition. 
 
// // CONDITIONS

//1.IF

/*
if (condition){
    ....//statement-1
    ....//statement-2
    ....
    ....
}
*/

//var number = 101;                          //if number=10,then it is even number 
/*
if (number%2==0){                          //if number=101,then it is odd number
    console.log(number+" is even number")
}
if (number%2!=0){
    console.log(number+" is odd number")
}
*/

 //2.IF ELSE

/*
if (condition){
    ....//statement-1
    ....//statement-2
    ....
    ....
}
else{
    //statement-11
    //statement-12
}
*/

//var number = 101;                          //if number=10,then it is even number 
//if (number%2==0){                          //if number=101,then it is odd number
//    console.log(number+" is even number")  //"="is assignment operator
// }                                         //"=="is comparison operator
//else {                                     //name1==name2(only value will be compared)
//    console.log(number+" is odd number")   //name1===name2(value will be compared and datatype will also get compared)
//}

//3.IF ELSE-IF ELSE
/*
if (condition){
    ....//statement-1
    ....//statement-2
    ....
    ....
}
else if(condition){
    //statement-11
    //statement-12
}
else{
    //statement-21
    //statement-22
}
*/

//var number=9                                                //if number is 9,9 is smaller than 10
//{                                                           //if number is 10,10 is equal to 10
//    if(number>10)                                           //if number is 11,11 is greater than 10
//    {
//        console.log(number+ " is greater than 10")
//    }else if(number<10)
//    {
//        console.log(number+ " is smaller than 10")
//    }else
//    {
//        console.log(number+ " is equal to 10")
//    }
//} 

//3.NESTED IF-ELSE
/*
IF(CONDITION)
{
if (condition){
    ....//statement-1
    ....//statement-2
    ....
    ....
}
else if(condition){
    //statement-11
    //statement-12
}
else{
    //statement-21
    //statement-22
}
}
ELSE{
    if (condition){
    ....//statement-1
    ....//statement-2
    ....
    ....
}
else if(condition){
    //statement-11
    //statement-12
}
else{
    //statement-21
    //statement-22
}
}
*/

/*
var number=111;                                //if number=111,111 is greater than 10,111 is odd number                     
if(number%2==0)                                //if number=101,101 is equal to 101,101 is odd number                 
{                                                           
    if(number>10)                                           
    {
        console.log(number+ " is greater than 10")
    }
    else if(number<10)
    {
        console.log(number+ " is smaller than 10") 
    }
    else
    {
        console.log(number+ " is equal to 10")
    }
    console.log(number + " is even number")
} 
else
{
    if(number>101)
    {
        console.log(number+ " is greater than 101")
    }
    else if (number<101)
    {
        console.log(number+ " is smaller than 101")         
    }
    else
    {
        console.log(number+ " is equal to 101")
    }
    console.log(number + " is odd number")
}
*/

/*
4.SWITCH STATEMENT
switch(expression-1)
{
    case codition-1:
    statement-1;
    statement-2;
    statement-3;
    break;
    case codition-2:
    statement-1;
    statement-2;
    statement-3;
    break;
    case codition-3:
    statement-1;
    statement-2;
    statement-3;
    break;
    case default:
    statement-1;
    statement-2;
    statement-3;   
    
    break statement is used to get out of the block.(break)
}
*/

/*
month=1                                  //if month=5...12,We have only 3 months data,Only jan,feb and march
switch(month)
{
    case 1:
        console.log("winter")
        console.log("jan") 
        break
    case 2:
        console.log("winter")
        console.log("feb") 
        break  
    case 3:
        console.log("lil winter")
        console.log("march") 
        break
    default:
        console.log("We have only 3 months data")
        console.log("Only jan,feb and march") 
               
}
*/

/*
5.Ternary operator:-
expression-1?"expression-2":"expression-3"; 
if expression-1 is true then expression-2 is executed,if false then expression-3 is executed
*/

//var marks=42                  //pass
//var result=marks<40?"fail":"pass"
//console.log(result)

// //loops are of 3 types:-

/*
1.while loop:-
while(condition)
{
    statement1
    statement2
}
*/

/*
count=3                        //while(condition):in this condition is checked until it become false and then loop is ended
while(count>0)                 //if count=count-1 is not used then "hello world" is printed infinite time.to stop this rep count=count-1 is used 
{                              //there is no limitation                                                                                  
    console.log("hello world")
    
}
*/
                                //count=count-1 
/*                             //3>0 true "hello world" is printed and then 3-1=2 because of count=count-1  
count =3                       //2>0 true "hello world" is printed and then 2-1=1 because of count=count-1
while(count>0)                 //1>0 true "hello world" is printed and then 1-1=0 because of count=count-1
{                              //0>0 false and then execution goes out of the loop and execution is stoped
    console.log("hello world")
    count=count-1

}
*/

/*
count=3                                 //if(count==0) then value of 0 is "while loop is ended"
while(count>0)                          //console.log("value of count is "+ count) then value of count is counted
{
    console.log("hello world")
    count=count-1
    console.log("value of count is "+ count)
    if (count==0) 
    {
    console.log("while loop is ended")    
    }
}
*/

//2.do-while loop
/*
do
{
    statement-1
    statement-2
}
while(condition)
{
    statement1
    statement2
}
*/
/*
var count=3
do
{
    console.log("hello world")
    count=count-1
    console.log("value of count is "+ count)
    if (count==0) 
    {
    console.log("while loop is ended")    
    }
}while(count>0)
*/

/*
1.while loop:-                                      
1)first condition is checked
2)code gets executed if condition is true
3)go to 1(beginning of code)

2.do while loop:-
1)first code gets executed
2)condition is checked
3)go to 1 if condition is true,if condition is false then execution is stopped and get out of the loop
*/ 
//13th march end

/*14 March
count=3
var cc;
while(cc)                                                            //value is undefined
{                                                                    //no output
    console.log("Hi")
}
*/

/*
while(null)                                                          //value is null
{                                                                    //no output
    console.log("h1")
}
*/

/*
while(false)                                                         //value is false // false value is never passed in while loop
{                                                                    //no output
   console.log("Hello")
}
*/

/*
while(0)                                                             //value i 0
{                                                                    //no output
    console.log("h2")
}
*/

/*
while("")                                                            //value is string
{                                                                    //no output               //null,false,0 is false value
    console.log("h3")                                                                                                   
}
*/

/*
while(1.2)                                                            //value is true(float number)
{                                                                     // h3 is printed infinity times
    console.log("h3")
}
*/

/*
console.log(2/0)                                                       //value is true,Infinity is printed as output
cc=2/0                                                                   //value is true,h4 is printed infinity times                                                                
while(cc)       
{
    console.log("h4")
}
*/

/*3.for loop:-
for(expression-1;expression-2;expression-3)              //exprresion-1 is initialization,initialize a variable,using this we can control no.of execution,e.g count=3
{                                                        //expression-2 is condition 
    statement 1                                          //expression-3 is increment/decrement
    statement 2
    .....
    .....
}
*/

/*
for(var i=0;i<4;i=i+1)                            //i=i+1                       
{                                                 //0<4 true "hello x" is printed and then 0+1=1 because of i=i+1
    console.log("hello X " + i)                   //1<4 true "hello x" is printed and then 1+1=2 because of i=i+1
}                                                 //2<4 true "hello x" is printed and then 2+1=3 because of i=i+1
console.log("done")                               //3<4 true "hello x" is printed and then 3+1=4 because of i=i+1                                                
                                                  //4<4 false and then execution goes out of the loop and execution is stopped

for(var i=1;i<4;i=i+1)                            //i=i+1                    
{                                                 
console.log("hello X " + i)                       //1<4 true "hello x" is printed and then 1+1=2 because of i=i+1
}                                                 //2<4 true "hello x" is printed and then 2+1=3 because of i=i+1
console.log("done")                               //3<4 true "hello x" is printed and then 3+1=4 because of i=i+1                                                
                                                  //4<4 false and then execution goes out of the loop and execution is stopped                                                  

var i=0                                           //i=i+1
for(;i<4;)                                        //0<4 true "hello x" is printed and then 0+1=1 because of i=i+1           
{                                                 //1<4 true "hello x" is printed and then 1+1=2 because of i=i+1
console.log("hello X " + i)                       //2<4 true "hello x" is printed and then 2+1=3 because of i=i+1
i=i+1                                             //3<4 true "hello x" is printed and then 3+1=4 because of i=i+1     
}                                                 //4<4 false and then execution goes out of the loop and execution is stopped                            
console.log("done")     

var i=0
for( ; ; )                                        //it will go to infinity as there is no condition,ctrl + c is used to get out of infinity                                       
{                                                 
console.log("hello X " + i)                       
}                                                 
console.log("done")                                                                               
*/

/*difference between while loop and for loop:-
In while loop condition is known but no .of repition(increment/decrement) is not known and hence count is used in while loop 
seperately but in for loop initialisation,condition and increment/decrement is done simultaneously no count is needed.
*/ 

/*

// //Function is used for redundancy(reduction) of code
syntax of the function

function name_of_your_function()
{
    statement-1
    statement-2
    statement-3
    statement-4
    statement-5
}
*/
//step1:-create function and step2:-create variable
/*
printNum()         
printNum()
printNum()
printNum()
printAlpha()
printAlpha()
printAlpha()
printAlpha()

function printNum()  //1|2|3|4|1|2|3|4|1|2|3|4|1|2|3|4|A|B|C|D|A|B|C|D|A|B|C|D|A|B|C|D
{                                                       
    console.log("1")          
    console.log("2")
    console.log("3")
    console.log("4")
}
function printAlpha()
{
    console.log("A")
    console.log("B")
    console.log("C")
    console.log("D")
}
*/

/*
var num=12               
if(num==12)
{
    console.log("it's 12")
    printAlpha()
    console.log("Done")
}
else
{   console.log("it's not 12")
    printNum()
    console.log("Not Done")
}

function printNum()         //it's 12
{                           //A
    console.log("1")        //B
    console.log("2")        //C
    console.log("3")        //D
    console.log("4")
}
function printAlpha()
{
    console.log("A")
    console.log("B")
    console.log("C")
    console.log("D")
}    
*/

/*
var num=12               
if(num==11)
{
    console.log("it's 12")
    printAlpha()
    console.log("Done")
}
else
{    
    console.log("it's not 12")
    printNum()
    console.log("Not Done")
}

function printNum()          //it's not 12
{                            //1
    console.log("1")         //2
    console.log("2")         //3
    console.log("3")         //4
    console.log("4")
}
function printAlpha()
{
    console.log("A")
    console.log("B")
    console.log("C")
    console.log("D")
}    
*/

/*
var num=12                  //it's 12    
if(num==12)                 //1
{                           //A
    console.log("it's 12") //2
    printNum()             //Done
    console.log("Done")
}
else
{    
    console.log("it's not 12")
    printAlpha()
    console.log("Not Done")
}

function printNum()          
{                            
    console.log("1")         
    printAlpha()         
    console.log("2")
}
function printAlpha()
{
    console.log("A")
   
} 
*/

/*
var num=12                      //4
cc()                            //it's 12
if(num==12)                     //4
{                               //1
    console.log("it's 12")      //4
    printNum()                  //A 
    console.log("Done")         //4
}                               //2
else                            //Done
{                               
    console.log("it's not 12")
    printAlpha()
    console.log("Not Done")
}

function printNum()          
{   
    cc()                         
    console.log("1")         
    printAlpha()         
    console.log("2")
}
function printAlpha()
{
    cc()
    console.log("A")
    cc()
} 
function cc()
{
    console.log("4")
}
*/

//To pass the message
//from wherever you are calling the function,you also need to pass the message

/*
var alpha="hello" //output:-hello
printAlpha(alpha) //while calling the function message is passed

function printNum()          
{   
    cc()                         
    console.log("1")         
    printAlpha()         
    console.log("2")
}
function printAlpha(input) //()inside this is paramater
{
    
    console.log(input)
    
} 
function cc()
{
    console.log("4")
}
*/

/*
var alpha="hello" //output:-can't do anything for you(bcause num is not defined while calling function)
printAlpha(alpha) //while calling the function message is passed

function printNum()          
{   
    cc()                         
    console.log("1")         
    printAlpha()         
    console.log("2")
}
function printAlpha(input, num) //()inside this is paramater
{if(num==2) 
{ 
    console.log(input)
    
}
else
{
    
    console.log("can't do anything for you")
    
} 
}
function cc()
{
    console.log("4")
}
*/

/*
var alpha="hello" //output:-can't do anything for you(bcause num  is not equal to 2 while calling function)
printAlpha(alpha,12) //while calling the function message is passed

function printNum()          
{   
    cc()                         
    console.log("1")         
    printAlpha()         
    console.log("2")
}
function printAlpha(input, num) //()inside this is paramater
{if(num==2) 
{ 
    console.log(input)
    
}
else
{
    
    console.log("can't do anything for you")
    
} 
}
function cc()
{
    console.log("4")
}
*/

/*
var alpha="hello" //output:-hello(bcause num  is  equal to 2 while calling function)
printAlpha(alpha,2) //while calling the function message is passed

function printNum()          
{   
    cc()                         
    console.log("1")         
    printAlpha()         
    console.log("2")
}
function printAlpha(input, num) //()inside this is paramater
{if(num==2) 
{ 
    console.log(input)
    
}
else
{
    
    console.log("can't do anything for you")
    
} 
}
function cc()
{
    console.log("4")
}
*/

//14th march end


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

//21 march

//cpcv
//copy by value and copy by reference
//use function as a constructor 
// class in javascript
//object destrusturing
//copy by value holds primitive datatype
//copy by reference holds non-primitive datatype

/*
// copy by value //only value is copied
var a =10
var b=a
a=11
console.log(b)

//copy by reference 
var arr=[1,2,3,4,5]//whatever address arr hold will get assigned to brr variable,brr also gets alocated to same array
var brr =arr       //same reference is copied to both variable,using arr variable will also get refleced at brr
arr[0]=100//when we try to update 0th element as 100,so instead of 1 you make it as 100,that changes will also get reflected to brr
console.log(brr)//because both the variable are pointing to same address,when we try to print data of brr,you will get output as
//100 in 0th place,then after remaining data you have in arr
*/

/*
//initialise the attribute of the object
//use function as a constructor
function student(firstname,lastname,age,isgraduate)  //Gaurav
{
    this.firstname=firstname
    this.lastname=lastname
    this.age=age
    this.isgraduate=isgraduate
}
var student1= new student("Gaurav","Mishra","22",true) //an object will be created with past data parameter and will be assigned
//to reference variable student1,reference variable means variable pointing to object
//so student1 will possess an object and those object will have an entity firstname,lastname,age,isgraduate and all those value will be initialised
console.log(student1.firstname)
//values which are passed in var student1 will be copied to function student,all those will be assigned to this 
// this is pointing to object which is created by new operator(new student),so now new operator will try to create an object
//and this object will be refered inside student function(new student) and it will assign this number of attribute and the 
//value will be initialised to all the attribute of the object
//when try to put console.log(student1.firstname),you will get data from this particular object
*/

//object destrusturing
/*
function student(firstname,lastname,age,isgraduate)  //Gaurav,22,Gaurav
{
    this.firstname=firstname
    this.lastname=lastname
    this.age=age
    this.isgraduate=isgraduate
}
var student1= new student("Gaurav","Mishra","22",true)
console.log(student1.firstname)

function getdetail(student1)
{
    var details=[student1.age,student1.firstname,student1.lastname,student1.isgraduate]
    return details
}
var d= getdetail(student1)
console.log(d[0])
console.log(d[1])
*/

/*
function student(firstname,lastname,age,isgraduate)  //Gaurav,Mishra,Gaurav
{
    this.firstname=firstname
    this.lastname=lastname
    this.age=age
    this.isgraduate=isgraduate
}
var student1= new student("Gaurav","Mishra","22",true)
console.log(student1.firstname)

function getdetail(student1)
{
    var details=[student1.age,student1.firstname,student1.lastname,student1.isgraduate]
    return details
}
var [,name,last]=getdetail(student1)
console.log(last)
console.log(name)
*/

//split a string into substrigs using the specified separator and return them as array 
//.split is a function of string which basically splits your data with parameter(with whatever parameter are passed),here space is
//passed inside the parameter,so whole data will spreaded into two part or multiple part(if there are multiple spaces) and array
//of this data will return,it is used when we dont want use data from index

/*
var[first,last]="Gaurav Mishra".split(" ")
console.log(first)
console.log(last)
*/
//class:mobile,blueprint(size.color,keys,mic) means feature(size.color,keys,mic)
//with this blueprint we will have multiple object of different properties 
//e.g:-car is class and maruti,swift are object 
//e.g:-mobile is class,iphone and realme are object

//Mapreducefilter

/*                     //[4,16,25,36,49]
var arr=[2,4,5,6,7]
for(i=0;i<arr.length;i++)
{
    arr[i]=arr[i]*arr[i]
}
console.log(arr)
*/

/*
var arr=[2,4,5,6,7]        //[2,4,5,6,7] 
console.log(arr)           //[4,16,25,36,49]
for(i=0;i<arr.length;i++)
{
    arr[i]=arr[i]*arr[i]
}
console.log(arr)
*/

//now use map 


/*
Map:-
A function that accepts up to three arguments.
 The map method calls the callbackfn function one time for each element in the array.
Calls a defined callback function on each element of an array, and returns an array that contains the results.
*/

//1.1st way to define map 

/*
function sqr(num)                 //[4,9,16,25,36,49,64,81]
{
    return num*num
}
var arr=[2,3,4,5,6,7,8,9]
console.log(arr.map(sqr))
*/

//2.2nd way to define map

/*
function sqr(num)                 //[4,9,16,25,36,49,64,81]
{
    return num*num
}
var arr=[2,3,4,5,6,7,8,9]
dd=arr.map(sqr)
console.log(dd)
*/

/*
var arr=[1,2,3,4,5,6,7,8,9]       //[2,4,6,8]
var even_arr=[]
for(let i=0;i<arr.length;i++)
{
    if(arr[i]%2==0)
    {
        even_arr.push(arr[i])
    }
}
console.log(even_arr)
*/

//now use filter

/*2.Filter:-
A function that accepts up to three arguments. 
The filter method calls the predicate function one time for each element in the array.
Returns the elements of an array that meet the condition specified in a callback function.
filter works on true and false condition
*/

/*
function even(num)         //[2,4,6,8]
{
    iseven=false
    if(num%2==0)
    {
        iseven=true
    }
    return iseven
}
var arr1=[1,2,3,4,5,6,7,8,9]
console.log(arr1.filter(even))
*/

/*
var arr=[1,2,3,4,5,6,7,8,9]        //362880
var prod=1
for(let i=0;i<arr.length;i++)
{
    prod=prod*arr[i]
}
console.log(prod)
*/

//now use reduce

/*3.Reduce:-
A function that accepts up to four arguments. 
The reduce method calls the callbackfn function one time for each element in the array.
Calls the specified callback function for all the elements in an array. 
The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
*/

/*
function prodofallnumber(a,b)               //362880
{
  return a*b
}
var arr=[1,2,3,4,5,6,7,8,9] 
console.log(arr.reduce(prodofallnumber))

//class in javascript


//constructor:-To have different attribute inside class,constructor is used

/*
class student                                             //gaurav,gaurav,google,12,false
{
  constructor(name,address,rollnumber,isgraduated)
  {
    this.name=name
    this.address=address
    this.rollnumber=rollnumber
    this.isgraduated=isgraduated
  }
  details()
    {
       console.log(this.name)
       console.log(this.address)
       console.log(this.rollnumber)
       console.log(this.isgraduated)
    }
    getName(lastName)
    {
    return this.name+" "+lastName
    }
}
var student1= new student("gaurav","google",12,false)
console.log(student1.name)
student1.details()
*/

/*
class student{                                           //gaurav,gaurav,google,12,false,gaurav mishra
  constructor(name,address,rollnumber,isgraduated)
 {
    this.name=name
    this.address=address
    this.rollnumber=rollnumber
    this.isgraduated=isgraduated
  }
  details()
    {
       console.log(this.name)
       console.log(this.address)
       console.log(this.rollnumber)
       console.log(this.isgraduated)
    }
    getName(lastName)
    {
    return this.name+" "+lastName
    }
}
var student1= new student("gaurav","google",12,false)
console.log(student1.name)
student1.details()
var fullname=student1.getName("Mishra")
console.log(fullname)
//in class we dont need function,(details,getName) can also be created without function
*/

//21 march end

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

//3rd April 

// index.js

//In index page we are creating server,handling homepage,handle all the endpoint(endpoint like author,book,user,roles)
//while making API our first file is index.js



//firstly create new folder and name it as library go to library using(cd library) and (then type npm init -y) and it will create packge.json file
//when we install node we get npm,node,npx
//npm i express install express
//npm i -g express install express globally

//This is the standard way of coding
/*
//It is the standard way of Coding
//1st way
//for using express we need to import express by using(import express  "from express" )   //This is import statement
import express  from "express"  
//for handling the JSON part and for sending and retriving data we use bodyparser as it will help us to add,delete and modify the data
import bodyparser from "body-parser"

//created a server and PORT                                                               //This is declaration part of our server
const server = express() //here 
const PORT=7777
//in previous class we use{"content-Types":"text/plain"}  and JSON everytime and instead of writing JSON everytime,we use JSON one time in bodyparser
server.use(bodyparser.json()) 

//this is base url ("/") and then arrow function is used like this:-("/",arrow function)
server.get("/",(req,res)=>res.send("Welcome to my library")) //handle http://localhost:7777

//server will listen to PORT 
server.listen(PORT)

//for starting application we use node index.js
//for using import and export we need to mention "type":"module" in package.json

//output:-
//after using  http://localhost:7777 on webpage,you will get:- 
//Welcome to my library on webpage
*/

/*
//2nd way (using variable)
import express  from "express"
//for using express we use import express  from express;   //This is import statement
import bodyparser from "body-parser"

const server = express()
const PORT=7777
server.use(bodyparser.json())

var homepage=(req,res)=>res.send("Welcome to my library") //handle http://localhost:7777
server.get("/",homepage)
//server.get("/book",homepage)

//this functionality(server.all) is given by express 
//server.all //if any request im getting which is not equal to this server.get("/",homepage) then go to server.all,if you are getting particular request then simply go over and see any file on which you have handle the request or not,
//if you have handle the endpoint(endpoint like author,book,user,roles) then throw the answer and if you have not handle the endpoint then simply it will show error 404 page not found
server.listen(PORT)

//if we use http://localhost:7777/ this simply refer to this http://localhost:7777 and no data after it.
//then,Welcome to my library on webpage will be printed as output on webpage
//if we use server.get("/book",homepage) 
//if we use http://localhost:7777 then cannot get / will be printed on webpage as error
//if we use http://localhost:7777/book
//then,Welcome to my library on webpage will be printed as output on wepage

//output:-
//after using  http://localhost:7777 on webpage,you will get:- 
//Welcome to my library on webpage
*/

/*
//using router and controller
import express  from "express"        //This is import statement
import bodyparser from "body-parser"
import userRouter from "./routes/users.js"
//for using router we use import userRouter from "./routes/users.js" and we import it from "./routes/users.js" and 

const server = express()
const PORT=7777
server.use(bodyparser.json())

var homepage=(req,res)=>res.send("Welcome to my library") //handle http://localhost:7777 .... this went to controllers

server.use("/user",userRouter)
server.get("/",homepage) //handling get request....this went to routes

server.listen(PORT)

//

//output:-
//after using  http://localhost:7777 on webpage,you will get:- 
//Welcome to my library on webpage
//after using  http://localhost:7777/user on webpage,you will get:-
//[] on webpage
//In function call getUser.. I this /users endpoint got hit. will be printed as output in terminal
*/

//using postman

/*
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

//ouput:- 
//after using  http://localhost:7777 on postman using GET,you will get:- 
//Welcome to my library on webpage
//after using  http://localhost:7777/user on postman using GET,you will get:-
//[] will be ptinted as output on postman 
//In function call getUser().. I this /users endpoint got hit. will be printed as output in terminal
//after using  http://localhost:7777/user on postman using POST ,you will get:-
//OK will be printed as output on postman 
//In function call createUse() .. I this /users endpoint got hit. will be printed as output in terminal
*/


//nodemon is used when:- 
//for exiting from the command we use ctrl+c everytime
//to avoid this repition we use nodemon 
// to install nodemon we use npm i -g nodemon

// if we use nodemon then output in terminal will be like this:-
/*
[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
In function call getUser().. I this /users endpoint got hit.
In function call createUse() .. I this /users endpoint got hit.
*/

//routes

/*
//here we are creating routes for users endpoint

import express from 'express';
//while runnung the application node will try to include code of express to your code  
//we need to use express for router

import {getUsers,createUser} from '../controllers/users.js'
//to import multiple functions at same time we use import{}
// and using '../controllers/users.js' we go back to previous folder and import function from the given folder.Here it is controller


const router = express.Router();
//we will need to get router which we will get from express so for that we will use const variable

router.get("/",getUsers)
//router.get("/:id",getUserById) //it should be used as variable and hence colon is used
router.post("/",createUser)
//router.delete("/:id",deleteUserById)//it should be used as variable and hence colon is used
//router.patch("/:id",updateUserById)

export default router //router is exported to index.js*/

//controllers

/*
//in controllers we define functions

let users=[]//this will act as a user table(database)..later will replace this with DB call

//we use export const so that it can be used on another files/folder.
export const getUsers=(req,res)=>
{
    console.log("In function call getUser().. I this /users endpoint got hit.")
    res.send(users)
}

export const createUser=(req,res)=>
{
    console.log("In function call createUse() .. I this /users endpoint got hit.")
    res.send("ok")
}
*/
//3 April end

//4 April

//index.js

/*
//To connect API to database(mongodb) 
//mongodb+srv://<username>:<password>@cluster0.b4muw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority(copy link from mongodb atlas)
//create variable and assign the link to it 
//to connect API to database(mongod),we use mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
//after that .then is used to perform operation

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
    //now backend will capture this data(body) either in database or users Array(taht we are using in our case)
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
    },{timestamps:true} //shows date and time,when schema is created on podtman
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

//10 April 

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
    },{timestamps:true} //shows date and time,when schema is created on postman
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
router.patch("/:id",updateUserById)

//http://localhost:7777/user?name=gaurav&gender=male&age=22&city=Mumbai
//here name,gender,age,city are query

export default router //router is exported to index.js*/
//10 April End

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