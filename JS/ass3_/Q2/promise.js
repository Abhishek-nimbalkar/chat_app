const fs=require("fs");

let p1=new Promise((resolve, reject) => {
    let d1=fs.readFile("./one.json","utf-8",(err)=>{
        if(err) console.log("error while reading file"+err);
    })
    resolve(d1);
})

let p2=new Promise((resolve, reject) => {
    let d2=fs.readFile("./two.json","utf-8",(err)=>{
        if(err) console.log("error while reading file"+err);
    })
    resolve(d2);
})

let p3=new Promise((resolve, reject) => {
    let d3=fs.readFile("./three.json","utf-8",(err)=>{
        if(err) console.log("error while reading file"+err);
    })
    resolve(d3);
})
let p4=new Promise((resolve, reject) => {
    let d4=fs.readFile("./four.json","utf-8",(err)=>{
        if(err) console.log("error while reading file"+err);
    })
    resolve(d4);
})

Promise.all([p1,p2,p3,p4])
.then((data)=>{
    console.log(data);
}).then((err)=>{
    console.log(err);
})


// Promise.allSettled([p1,p2,p3,p4])
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>console.log(err));


// Promise.any([p1,p2,p3,p4])
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>console.log(err));


// Promise.race([p1,p2,p3,p4])
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>console.log(err));
