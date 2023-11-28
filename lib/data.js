const fs = require('fs');
const path = require('path');
const { json } = require('stream/consumers');

const library ={};
//base directory of the data folder
library.basedir = path.join(__dirname, '/../.data/');

//write data to create file
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
//read file
library.read = function(dir, file, callback){
    fs.readFile(`${library.basedir}${dir}/${file}.json`,'utf8',(err,data)=>
    {
        callback(err, data);
    }
    )
}
//update file
library.update = function(dir,file,data,callback){
     //open file
     fs.open(`${library.basedir}${dir}/${file}.json`, 'r+', function(err, fileDescriptor){
        if(!err && fileDescriptor){
            const stringData = JSON.stringify(data);
            //truncate file
            fs.ftruncate(fileDescriptor,(err)=>{
                if(!err){
                    fs.writeFile(fileDescriptor,stringData, (err)=>{
                        if(!err){
                            fs.close(fileDescriptor, (err)=>{
                                if(err){
                                    console.log('error in closing file after update')
                                }
                                else{
                                    console.log('no error occured while updating');
                                }
                            })
                        }
                    })
                }
                else callback(`error in truncating ${err}`)
            });
        }
        else{

        }
    });
}
//delete file
library.delete = (dir, file, callback)=>{
    fs.unlink(`${library.basedir}${dir}/${file}.json`,(err)=>{
        if(!err){
            callback('Sucessfully Deleted the file');
        }
        else callback(`error while deleting file ${err}`);
    })
}
module.exports = library;