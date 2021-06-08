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
}                          //3
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
let i=10            //0  //the value will get overwritten because the scope is global not local
{                   //10 //the scope of this variable is local not global
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
const student=                //will give error,because you are trying to assign new object to constant variable 
{
    Name:"Gaurav",
    Address:"Google",
    RollNumber:12,
    isGraduated:true,
}
student.Name="Rohan"
student=                
{
    Name:"Gaurav",
    Add:"Google",
    rrr:12,
    aa:true,
}
console.log(student.Name)
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