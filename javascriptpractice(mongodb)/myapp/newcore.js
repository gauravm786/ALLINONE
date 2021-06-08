/*
//6.import                                //output:-its even
//import is latest and widely used in react
import importcore from '../core.js' //.. it will go behind the scene(one folder back) and try to get the data //in import file is imported without using brackets
importcore.isEven(10)
*/

/*
//"type": "module" using this("type": "module") module can be loaded in any file
//commonjs is used for require
//module is used for import
*/


//this is the standard way of coding
/*
import http from "http"

//created a server

const server=http.createServer()

//events //for executing events events(on server on a particular request, you can include a function)

server.on('request',myfunc)

function myfunc(request,response)
{
console.log("My app got started")
response.writeHead(300,{"content-Types":"text/plain"}) //response.writeHead opens stream and send data continuously,it basically opens a pipe from your application to the front end part,so that you can continuously send data from string 
response.write("Hello New World")
response.end()//it is basically used to stop the stream
}
server.listen(7777)
*/

/* it is executed two times because whole function is executed two times,the whole function is execued twice by browser
My app got started
My app got started
*/

/*
//to check request(for which request url is called)

//this is the standard way of coding
import http from "http"

//created a server

const server=http.createServer()

//events //for executing events

server.on('request',myfunc)

function myfunc(request, response)
{
console.log("Request:    ", request.url)
response.writeHead(300,{"content-Types":"text/plain"}) //response.writeHead opens stream and send data continuously,it basically opens a pipe from your application to the front end part,so that you can continuously send data from string 
response.write("Hello New World")
response.end()//it is basically used to stop the stream
}
server.listen(9999)
*/

/*
Request:     /     (initially it is local host only)
Request:     /favicon.ico (sending one more request to te node application)
so two request is hit by the browser to our node application
*/

/*
//output:-
Request:     /
Request:     /favicon.ico
Request:     /getname
Request:     /favicon.ico
Request:     /getage
Request:     /favicon.ico
*/