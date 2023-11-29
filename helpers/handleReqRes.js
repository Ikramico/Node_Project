const handler ={};
const url = require('url');
const {StringDecoder} = require('node:string_decoder');
const routes = require ('../routes')
const {notFoundHandler}= require('../handlers/routeHandlers/notFoundHandler');
const { parseJSON } = require('./utilities');

handler.handleReqRes = (req, res)=>{
    //request handle
    const parsedUrl = url.parse(req.url);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toUpperCase();
    const query = parsedUrl.query;
    const header = parsedUrl.header;
    const reqProps ={
        parsedUrl,
        path,
        trimmedPath,
        method,
        query,
        header
    };


    const decoder = new StringDecoder('utf8');
    let contData = '';

    const chosenHandler = routes[trimmedPath]?routes[trimmedPath]:notFoundHandler;
    req.on('data', (buffer)=>{
        contData += decoder.write(buffer);
    });


    req.on('end', ()=>{
        contData += decoder.end;
        reqProps.body = parseJSON(contData);
        chosenHandler(reqProps, (status, payload) =>{
            status = typeof(status)==='number'?status:500;
            payload = typeof(payload)==='object'?payload:{};
    
            const payloadString = JSON.stringify(payload);
    
            //response
            res.setHeader('Content-type','application/json')
            res.writeHead(status);
            res.end(payloadString);
        });
    //response handle
    
    })
    
};

module.exports = handler;