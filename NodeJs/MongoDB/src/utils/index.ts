import Mongos from "../model"

export const eqOp=async ()=>{
    const data:any=await Mongos.find({qty:{$eq:20}})
    console.log(data);
    
}
export const gtOp=async ()=>{
    const data:any=await Mongos.find({qty:{$gt:20}})
    console.log(data);
    
}
export const gteOp=async ()=>{
    const data:any=await Mongos.find({qty:{$gte:20}})
    console.log(data);
    
}
export const inOp=async ()=>{
    const data:any=await Mongos.find({qty:{$gt:20}})
    console.log(data);
    
}
// console.log(allOp());
