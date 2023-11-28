/*
Title: Uptime Monitoring Application
Description: A RESTful API to monitor links
Author: Ikram Ico
Category: Practice
*/
//Dependencies
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes');
const environment = require('./helpers/environment');
const data = require('./lib/data');
//Scaffolding
const app ={};

//testing data
data.create('test', 'sample', {'category':'test', 'file-type':'json', 'work':'create'},
(err)=>{
    if(err){
        console.log(`error is here ${err}`);
    }
    else console.log('no error');
    
}
)
//configuaration


//Create Server
app.createServer =()=>{
    const server = http.createServer(app.reqResHandler);
    server.listen(environment.port, ()=>{
        console.log(`Server started at ${environment.port}`);
    })
}
//handle request response
app.reqResHandler= handleReqRes;
//start server
app.createServer();
