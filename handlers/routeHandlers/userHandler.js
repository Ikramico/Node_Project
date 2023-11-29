/**
 * Title: User handler
 */

const { hash } = require("../../helpers/utilities");
const {data} = require('../../lib/data');

//scaffolding
const handler ={};

handler.userHandler=(reqProps, callback)=>{
    const acceptedMethods=['GET','POST','PUT','DELETE'];
    if(acceptedMethods.indexOf(reqProps.method)>-1){
       handler._users={
        POST: (reqProps,callback)=>{
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
            typeof (reqProps.body.tosAgree)===Boolean && 
            reqProps.body.tosAgree.trim()>0? reqProps.body.tosAgree: false;
        
            if(firstName && lastName && password && phone && tosAgree){
                data.read('users',phone, (err)=>{
                    if(err){
                        let userObject ={
                        firstName,
                        lastName,
                        phone,
                        password:hash(password),
                        tosAgree
                    };
                    data.create('users',phone, userObject, (err)=>{
                        if(!err){
                            console.log('User created succesfully')
                        }
                        else{
                            console.log(err.message + "couldn't create user");
                        }
                    })
                    }
                    else{
                        callback(err.message+'server side problem')
                    }
                    
                });
            }
            else{
                callback(error.message);
            }
        },
       };
    }
    else{
        callback(405);
    }  
};
// handler._users ={};

// handler._users.delete = (reqProps,callback)=>{

// };
// handler._users.put = (reqProps,callback)=>{

// };
// handler._users.get = (reqProps,callback)=>{

// };

module.exports = handler;