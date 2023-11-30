//dependencies
const utilities ={};
const crypto = require('crypto');
const environments = require('./environment');
//parse json to string
utilities.parseJSON = (jsonString)=>{ 
    let output ={};

    try{
        output = JSON.parse(jsonString);
    }
    catch{
        output={};
    };
    return output;
   
};
 utilities.hash = (str) =>{
        if(typeof str ==='string' && str.length>7){
            const hash = crypto.createHmac('sha256',environments.secretkey).update(str).digest('hex');
            return hash;
        }
            return false;
    }
//export module
module.exports = utilities;