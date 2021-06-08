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

//count=3
//var cc;
//while(cc)                                                            //value is undefined
//{                                                                    //no output
//    console.log("Hi")
//}
//while(null)                                                          //value is null
//{                                                                    //no output
//    console.log("h1")
//}
//while(false)                                                         //value is false // false value is never passed in while loop
//{                                                                    //no output
//   console.log("Hello")
//}
//while(0)                                                             //value i 0
//{                                                                    //no output
//    console.log("h2")
//}
//while("")                                                            //value is string
//{                                                                    //no output               //null,false,value,0 is false
//    console.log("h3")                                                                                                   
//}
//while(1.2)                                                            //value is true(float number)
//{                                                                     // h3 is printed infinity times
//    console.log("h3")
//}
//console.log(2/0)                                                       //value is true,Infinity is printed as output
//cc=2/0                                                                   //value is true,h4 is printed infinity times                                                                
//while(cc)       
//{
//    console.log("h4")
//}

/*3.for loop:-
for(expression-1,expression-2,expression-3)              //exprresion-1 is initialization,initialize a variable,using this we can control no.of execution,e.g count=3
{                                                        //expression-2 is condition 
    statement 1                                          //expression-3 is increment/decrement
    statement 2
    .....
    .....
}
*/