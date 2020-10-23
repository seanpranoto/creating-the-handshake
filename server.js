const express =require("express");
const app=express();

const server=app.listen(8000, ()=> console.log("Running on PORT 8000"));

const io=require("socket.io")(server);

io.on("connection", socket =>{
    console.log("Nice to meet you. (shake hand)");

    socket.emit("welcome", "Welcome to my beautiful page")
});