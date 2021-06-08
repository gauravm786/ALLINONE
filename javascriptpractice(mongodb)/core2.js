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






















































































