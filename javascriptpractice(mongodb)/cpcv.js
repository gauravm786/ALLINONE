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
console.log(brr)//becase both the variable are pointing to same address,when we try to print data of brr,you will get output as
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

