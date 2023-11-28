const handler ={};
const url = require('url');
const {StringDecoder} = require('node:string_decoder');
const routes = require ('../routes')
const {notFoundHandler}= require('../handlers/routeHandlers/notFoundHandler');

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
    chosenHandler(reqProps, (status, payload) =>{
        status = typeof(status)==='number'?status:500;
        payload = typeof(payload)==='object'?payload:{};

        const payloadString = JSON.stringify(payload);

        //response
        res.writeHead(status);
        res.end(payloadString);
    });


    req.on('end', ()=>{
        contData += decoder.end;
        console.log(contData);
    //response handle
    res.end("What's Up!!!");
    })
    
};

module.exports = handler;