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
function prodofallnumber(a,b)
{
  return a*b
}
var arr=[1,2,3,4,5,6,7,8,9] 
console.log(arr.reduce(prodofallnumber))
*/
