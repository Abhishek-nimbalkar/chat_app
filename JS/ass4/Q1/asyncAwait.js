const fs=require("fs").promises;

let person=async ()=>{
    let pd=await fs.readFile("./person.json","utf-8",(err)=>{
        if(err) console.log("error while reading file");
    });
    let pdata=JSON.parse(pd).filter((ele)=>{
        return ele.age>25;
    }).map((ele)=>{
        ele.firstName = ele.firstName.toUpperCase();
        ele.lastName = ele.lastName.toUpperCase();
        return ele;
    });
    fs.writeFile("./filterAsuncAwait.json",JSON.stringify(pdata),(err)=>{
        if(err) console.log("Error while writing file");
    })

}



