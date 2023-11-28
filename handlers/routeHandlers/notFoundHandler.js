/**
 * Title: Not Found Handler
 */
//scaffolding
const Handler ={};

Handler.notFoundHandler=(reqProps, callback)=>{
    callback(200, {
        message: 'This is working',
    });
    console.log(reqProps);
}

module.exports = Handler;