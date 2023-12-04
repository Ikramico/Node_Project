const { data } = require('../../lib/data');
const { hash } = require('../../helpers/utilities');
// scaffolding
const handler = {};

handler.userHandler = (reqProps, callback) => {
    const acceptedMethods = ['GET', 'POST', 'PUT', 'DELETE'];
    
    
    if (acceptedMethods.includes(reqProps.method)) {
        console.log('working');
        // handler._users = {
        //     // POST: (reqProps, callback) => {
                
        //     //     // const firstName =
        //     //     //     typeof reqProps.body.firstName === 'string' &&
        //     //     //     reqProps.body.firstName.trim().length > 0
        //     //     //         ? reqProps.body.firstName
        //     //     //         : 'Type your name';

        //     //     // const lastName =
        //     //     //     typeof reqProps.body.lastName === 'string' &&
        //     //     //     reqProps.body.lastName.trim().length > 0
        //     //     //         ? reqProps.body.lastName
        //     //     //         : 'Type your name';

        //     //     // const phone =
        //     //     //     typeof reqProps.body.phone === 'number' &&
        //     //     //     reqProps.body.phone.toString().trim().length === 11
        //     //     //         ? reqProps.body.phone
        //     //     //         : 'Type your number';

        //     //     // const password =
        //     //     //     typeof reqProps.body.password === 'string' &&
        //     //     //     reqProps.body.password.trim().length > 0
        //     //     //         ? reqProps.body.password
        //     //     //         : 'Type your password';

        //     //     // const tosAgree =
        //     //     //     typeof reqProps.body.tosAgree === 'boolean'
        //     //     //         ? reqProps.body.tosAgree
        //     //     //         : false;

        //     //     // if (firstName && lastName && password && phone && tosAgree) {
        //     //     //     data.read('users', phone, (err) => {
        //     //     //         if (err) {
        //     //     //             let userObject = {
        //     //     //                 firstName,
        //     //     //                 lastName,
        //     //     //                 phone,
        //     //     //                 password: hash(password),
        //     //     //                 tosAgree,
        //     //     //             };
        //     //     //             data.create('users', phone, userObject, (err) => {
        //     //     //                 if (!err) {
        //     //     //                     callback('User created successfully');
        //     //     //                 } else {
        //     //     //                     callback(
        //     //     //                         err.message + "couldn't create user"
        //     //     //                     );
        //     //     //                 }
        //     //     //             });
        //     //     //         } else {
        //     //     //             callback(err.message + 'server side problem');
        //     //     //         }
        //     //     //     });
        //     //     // } else {
        //     //     //     callback('request problem');
        //     //     // }
        //     // },
        // };
        handler._users.reqProps.method(reqProps, callback)
    }
     else {
        callback(405);
    }
    handler._users ={};
    handler._users.POST = (reqProps, callback)=>{
        callback(reqProps);
    }
};

module.exports = handler;
