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
// data.create('test', 'sample', {'category':'test', 'file-type':'json', 'work':'create'},
// (err)=>{
//     if(err){
//         console.log(`error is here ${err}`);
//     }
//     else console.log('no error');
    
// }
// )
// data.read('test', 'sample',(err,output)=>{
//     console.log(err,output);

// data.update('test', 'sample', {'category':'Updated test', 'file-type':'json', 'work':'update'},
// (err)=>{
//     if(err){
//         console.log(`error is here ${err}`);
//     }
//     else console.log('no error');
    
// }
// )
// data.delete('test','sample',(err)=>{
//     console.log('error is ', err)
// })
// })
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
