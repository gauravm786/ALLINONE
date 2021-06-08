
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

