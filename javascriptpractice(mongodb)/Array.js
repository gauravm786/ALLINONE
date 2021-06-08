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
console.log(named[named.length]) //undefined because im trying to data which is at index named.length 
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



