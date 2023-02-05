const fs = require("fs");

let person=new Promise((resolve, reject) => {
    let data= fs.readFile("./person.json", "utf-8",(err,data)=>{
      if(err) reject("error in reading");
      else resolve(JSON.parse(data));
    });
    
  });


person.then((data) => {
    let pd =data.filter((obj)=>{
        return obj.age>25;
   }).map((ele)=>{
        ele.firstName = ele.firstName.toUpperCase();
        ele.lastName = ele.lastName.toUpperCase();
        return ele;
   })
   fs.writeFile("./filterPromise.json",JSON.stringify(pd),(err)=>{
    if(err) return(err);
   });

})
  .catch((err) => {
    console.log("Promise not resolved", err);
});

