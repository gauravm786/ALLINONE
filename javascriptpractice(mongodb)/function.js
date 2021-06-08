// //Function is used for redundancy(reduction) of code
/*
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

/*
function name_of_your_function(parameter1,parameter2)
{
    statement-1
    statement-2
    statement-3
    statement-4
    statement-5
    return variable/data
}
*/

//step1:-create function and step2:-create variable

//1.
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

//2.
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
    console.log("4")        //Done
}
function printAlpha()
{
    console.log("A")
    console.log("B")
    console.log("C")
    console.log("D")
}    
*/

//3.
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

//4.
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

//5.
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

//6.(Single parameter)
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

//7.(multiple parameter)
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

//8.(multiple parameter)
/*
var alpha="hello"    //output:-can't do anything for you(bcause num  is not equal to 2 while calling function)
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

//9.(multiple parameter)
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
