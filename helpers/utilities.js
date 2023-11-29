//dependencies
const utilities ={};
const crypto = require('crypto');
//parse json to string
utilities.parseJSON = (jsonString)=>{ 
    let output ={};

    try{
        output = JSON.parse(jsonString);
    }
    catch{};
    return output;
   
}
 utilities.hash = (str) =>{
        if(typeof(str)==='string' && str.length>7){
            
        }
    }
//export module
module.exports = utilities;