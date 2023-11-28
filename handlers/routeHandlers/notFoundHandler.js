/**
 * Title: Not Found Handler
 */
//scaffolding
const Handler ={};

Handler.notFoundHandler=(reqProps, callback)=>{
    callback(404, {
        message: 'This page is not found',
    });
    console.log(reqProps);
}

module.exports = Handler;