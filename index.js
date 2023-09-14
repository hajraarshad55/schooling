const client = require('./connection')
const express = require('express');
const app=express();
const bodyparser= require("body-parser");
// Configuring to use the body-parser as middleware
app.use(bodyparser.json());
 const schoolRouters=require('./routes.js')
 const classesRouters=require('./routes.js')
const booksRouters=require('./routes.js')

 app.use('/',schoolRouters)
app.use('/',classesRouters)
app.use('/',booksRouters)
app.use(express.json());
app.listen(3300, ()=>{
    console.log("Server is now listening at port 3300");
})
//connecting to the database
client.connect();