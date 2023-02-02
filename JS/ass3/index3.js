
// Read this file both synchronously and asynchronously using the ‘fs’ module 
// parse its data and filter only the objects having age greater than 25
// transform ‘firstName’ and ‘lastName’ to capitalize
// update the file with this transformed data.
// Do this using all three ways: callbacks, promises and async await 

const fs=require('fs');

let syncRead=fs.readFile('person.json','utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    return JSON.parse(data);
});
// let personAbove=JSON.parse(sync).filter((e)=>{
//     return e.age>25;
// });

console.log(syncRead);

