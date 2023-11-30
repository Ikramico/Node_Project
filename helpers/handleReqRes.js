const handler = {};
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');
const { parseJSON } = require('./utilities');

handler.handleReqRes = (req, res) => {
    // request handle
    const parsedUrl = url.parse(req.url, true); // Passing true to parse query parameters
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toUpperCase();
    const query = parsedUrl.query;
    const headers = req.headers; // Access headers from req.headers
    const reqProps = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        query,
        headers,
    };

    const decoder = new StringDecoder('utf8');
    let contData = '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    req.on('data', (buffer) => {
        contData += decoder.write(buffer);
    });
    req.on('end', () => {
        contData += decoder.end(); // Correct usage of decoder.end()

        reqProps.body = parseJSON(contData);

        chosenHandler(reqProps, (status, payload) => {
            status = typeof status === 'number' ? status : 500;
            payload = typeof payload === 'object' ? payload : {};

            const payloadString = JSON.stringify(payload);
            console.log(status);

            // response
            res.setHeader('Content-type', 'application/json');
            res.writeHead(status, headers); // Include headers in writeHead
            res.end(payloadString);
        });
        // response handle
    });
};

module.exports = handler;
