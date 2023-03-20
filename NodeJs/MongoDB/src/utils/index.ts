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
    const data:any=await Mongos.find({qty:{$in:[15,25]}})
    console.log(data);
    
}

export const ltOp=async ()=>{
    const data:any=await Mongos.find({qty:{$lt:25}})
    console.log(data);
    
}
export const lteOp=async ()=>{
    const data:any=await Mongos.find({qty:{$lte:25}})
    console.log(data);
    
}
export const neOp=async ()=>{
    const data:any=await Mongos.find({qty:{$ne:15}})
    console.log(data);
    
}
export const ninOp=async ()=>{
    const data:any=await Mongos.find({qty:{$nin:[20,30]}})
    console.log(data);
    
}

//************************************************************* */
export const andOp=async ()=>{
    const data:any=await Mongos.find({$and:[{qty:{$ne:15}},{qty:{$lte:25}}]})
    console.log(data);
    
}
export const notOp=async ()=>{
    const data:any=await Mongos.find({qty:{$not:{$gt:20}}})
    console.log(data);
    
}
export const norOp=async ()=>{
    const data:any=await Mongos.find({$nor:[{"item.code":123},{qty:20}]})
    console.log(data);
    
}

// console.log(allOp());
