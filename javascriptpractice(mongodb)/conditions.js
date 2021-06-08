//is there is a way to skip lines based on some condition,yes,by using condition. 
 
// // CONDITIONS

//1.IF STATEMENT

/*
if (condition){
    ....//statement-1
    ....//statement-2
    ....
    ....
}
*/

/*
var number = 101;                          //if number=10,then it is even number 

if (number%2==0){                          //if number=101,then it is odd number
    console.log(number+" is even number")
}

if (number%2!=0){
    console.log(number+" is odd number")
}
*/

 //2.IF ELSE STATEMENT

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

//3.IF ELSE-IF ELSE STATEMENT
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

//3.NESTED IF-ELSE STATEMENT
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
var number=110;                                            
if(number%2===0)                                                
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
month=1
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

var marks=42
var result=marks<40?"fail":"pass"
console.log(result)