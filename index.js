//import express from "express" //this is the ecma script 
const express = require('express') //this is the common js
const dotenv = require('dotenv')
const app = express()
dotenv.config()
PORT = process.env.PORT

app.get('/', (req, res)=>{
    res.send("This is our first app")
})

app.get('/login', (req, res)=>{
    res.send("Welcome to Login page..!!")
})

app.listen(PORT, ()=>{
    console.log("Listening to port 3000")
})