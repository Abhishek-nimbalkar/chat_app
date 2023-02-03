const fs=require('fs');

let p=fs.readFile("../Q1/person.json","utf-8",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})
