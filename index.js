/*
Title: Uptime Monitoring Application
Description: A RESTful API to monitor links
Author: Ikram Ico
Category: Practice
*/
//Dependencies
const http = require('http');

//Scaffolding
const app ={};

//configuaration
app.config = {
    port: 6000
};

//Create Server
app.createServer =()=>{
    const server = http.createServer(app.reqResHandler);
    server.listen(app.config.port, ()=>{
        console.log(`Server started at ${app.config.port}`);
    })
}
//handle request response
app.reqResHandler= (req, res)=>{
    res.end("What's Up!!!");
};
//start server
app.createServer();
