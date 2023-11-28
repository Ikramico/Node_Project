/*
Title: Uptime Monitoring Application
Description: A RESTful API to monitor links
Author: Ikram Ico
Category: Practice
*/
//Dependencies
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes');
//Scaffolding
const app ={};

//configuaration
app.config = {
    port: 4000
};

//Create Server
app.createServer =()=>{
    const server = http.createServer(app.reqResHandler);
    server.listen(app.config.port, ()=>{
        console.log(`Server started at ${app.config.port}`);
    })
}
//handle request response
app.reqResHandler= handleReqRes;
//start server
app.createServer();
