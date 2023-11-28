const fs = require('fs');
const path = require('path');
const { json } = require('stream/consumers');

const library ={};
//base directory of the data folder
library.basedir = path.join(__dirname, '/../.data/');

//write data to file
library.create = function(dir,file,data,callback){
    //open file
    fs.open(`${library.basedir}${dir}/${file}.json`, 'wx', function(err, fileDescriptor){
        if(!err && fileDescriptor){
            //convert to string
            const stringData = JSON.stringify(data);

            //write data
            fs.writeFile(fileDescriptor, stringData, function(err){
                if(!err){
                    fs.close(fileDescriptor,function(err){
                        if(!err){
                            callback(false);
                        }
                        else callback(err);
                    })
                }
                else callback(err);
            })
        }
        else{
            callback('The file already exists');
        }
    })
}
module.exports = library;