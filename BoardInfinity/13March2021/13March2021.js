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