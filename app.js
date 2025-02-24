// commonJS

const express = require("express");
const pizzasArr = require("./data/pizzas.js");


const app = express();

// route- app.get(path,code)
//GET http://localhost:3000/

// Make the static files inside of the `public/` folder publicly accessible
app.use(express.static('public'));

// don't include public in path. just start with images

//Example of a middleware function...

function customMiddleware1(req,res,next){
    console.log("hello 1..");
   // if(condition){
        next(); //invoke the next middleware function
  //  } else {
        response.send("Sorry, no condition")
  //  }
}

function customMiddleware2(req,res,next){
    console.log("hello 2..");
    next();
}

app.use(customMiddleware1)
app.use(customMiddleware2)



app.get("/", (request, response, next) => {
  /*  console.log("We've received a GET request to /");
response.send(`homepage...`)*/
response.sendFile(__dirname +"/views/home.html");
})

app.get("/contact", (request, response, next) => {
    console.log("We've received a GET request to /contact");
   /* console.log(request.method);
    console.log(request.path);
    console.log(request.protocol);
    response.send(" Good morning")
    response.send(``)*/
    /* you cannot send 2 response 
    like: response. send("Hello")
    response.send("Hi")*/
    response.sendFile(__dirname +"/views/contact.html");
})


app.get("/pizza", (request,response,next) => {

response.json(pizzasArr);
})


app.listen(3000, ()=> {
    console.log("Server listening on port .... 3000");
});