/**
 * Title: Sample Handler
 */
//scaffolding
const Handler ={};

Handler.sampleHandler=(reqProps, callback)=>{
    callback(200, {
        message: 'This is working',
    });
    console.log(reqProps);
}

module.exports = Handler;