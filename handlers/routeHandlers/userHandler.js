/**
 * Title: User Handler
 */

const handler = require("../../helpers/handleReqRes");
const {data} = require('../../lib/data');

//scaffolding
const Handler ={};

Handler.userHandler=(reqProps, callback)=>{
    const acceptedMethods=['GET','POST','PUT','DELETE'];
    if(acceptedMethods.indexOf(reqProps.method)>=0){
       handler._users[reqProps.method](reqProps,callback);
    }
    else{
        callback(405);
    }  
};
handler._users ={};
handler._users.post = (reqProps,callback)=>{
    const firstName = 
    typeof (reqProps.body.firstName)==='string' && 
    reqProps.body.firstName.trim()>0? reqProps.body.firstName: 'Type your name';

    const lastName = 
    typeof (reqProps.body.firstName)==='string' && 
    reqProps.body.lastName.trim()>0? reqProps.body.lastName: 'Type your name';

    const phone = 
    typeof (reqProps.body.phone)==='number' && 
    reqProps.body.phone.trim()=== 11? reqProps.body.phone: 'Type your number';

    const password = 
    typeof (reqProps.body.password)==='string' && 
    reqProps.body.password.trim()>0? reqProps.body.password: 'Type your password';

    const tosAgree = 
    typeof (reqProps.body.tosAgree)==='string' && 
    reqProps.body.tosAgree.trim()>0? reqProps.body.tosAgree: false;

    if(firstName && lastName && password && phone && tosAgree){
        data.read('users',phone, (err,user)=>{
            let userObject ={
                firstName,
                lastName,
                phone,
                password,
                tosAgree
            }
        })
    }
    else{
        callback(error.message);
    }
};
handler._users.delete = (reqProps,callback)=>{

};
handler._users.put = (reqProps,callback)=>{

};
handler._users.get = (reqProps,callback)=>{

};

module.exports = Handler;