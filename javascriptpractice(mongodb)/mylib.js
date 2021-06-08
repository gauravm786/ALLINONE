//module:-
/*To create our own module we use module.export.function_name=function_name
console,module and require are global object.
This whole function is used as a module
built-in library is also used as module
*/

/*
function iseven(x)
{
    if (x%2==0) 
    {
        console.log("its even")
    }
    else
    {
        console.log("its odd")
    }
}    
function printarr(arr)
{
    console.log(arr)
}

//whatever functios is there it is exported in form of modules,so that this function can be accessed from the different file as well
module.exports.iseven=iseven  //can get output if coded till here(its even)
module.exports.printarr=printarr
//module and exports is a global object
//the above whole function is assigned with 
//here iseven,printarr is just a variable 
//using export will export =iseven part of function to whole context of your code
//so whenever you will try to import this part of thing(mylib) to some other part(app),then export is initialised with all this variable and value will be functions 
//module.exports.iseven=iseven
//module.exports.variable=function
//variable is assigned to function like this:-variablename=function()
//so whenever you are trying to import the module,the module object is initialised by these exported variables
//so if you want to use exported variable,you can use and basically you are accessing the functions in a directory 
*/

//http module is provided by node itself,so you dont need to pass the path,you can directly write the module name,so it will be imported and assigned to http variable

/*
var http=require("http")
http.createServer(myfunc).listen(8888)
*/