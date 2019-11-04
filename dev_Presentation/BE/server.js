const express = require("express");
const app = express();
const fs = require("fs");
app.use((req,res,next)=>{  res.header("Access-Control-Allow-Origin", "http://localhost:4200");next()}).listen(8080)

app.get("/api",(req,res)=>{
    fs.readFile("assets/581965812.mp4",(err,data) =>{
      console.log(data.length)
        res.end(JSON.stringify({data: data}))
    })
})