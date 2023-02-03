const fs= require('fs');

let pdata=fs.readFileSync('./Q1/person.json','utf-8');
let filterP=JSON.parse(pdata).filter((ele)=>{
   
    
    return ele.age>25;
    
}).map((ele)=>{
    ele.firstName= ele.firstName.toUpperCase();
    ele.lastName=ele.lastName.toUpperCase();
    return ele;
})

fs.writeFileSync('./Q1/filterPersonSync.json',JSON.stringify(filterP));
