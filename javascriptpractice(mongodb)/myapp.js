var http=require("http")//here http module is provided by node itself,so you did not need to pass the path,you can directly write module name,
//so it will be imported here and will be assigned to http variable
function myfunc(request,response)//myfunc is defiined
{
console.log("My app got started")
response.writeHead(300,{"content-Types":"text/plain"}) //response.writeHead opens stream and send data continuously,it basically opens a pipe from your application to the front end part,so that you can continuously send data from string 
response.write("THE NEXT BIG THING IS BROCK LESNAR")
response.end()//it is basically used to stop the stream
}
http.createServer(myfunc).listen(8888)//here myfunc will executed and registered

//THe above function is a very basic way to create helloworld app but in my case THE NEXT BIG THING IS BROCK LESNAR