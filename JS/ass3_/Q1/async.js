const fs=require('fs');

let p=fs.readFile("../Q1/person.json","utf-8",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    let person=JSON.parse(data).filter((ele)=>{
        return ele.age>25;
        
    }).map((ele)=>{
        ele.firstName= ele.firstName.toUpperCase();
        ele.lastName=ele.lastName.toUpperCase();
        return ele;
    })
    // console.log(person);
    processFile(person);
    try{
        fs.writeFile("../Q1/filterPersonDataAsync.json",JSON.stringify(person),(err)=>{
        if(err){
            console.log(err);
            return;
        }
    });
    }
    catch{
        console.log("Error in Writing file");
    }
    
})
function processFile(person){
    console.log(person);
}
