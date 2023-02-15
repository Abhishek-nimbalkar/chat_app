// let value= Math.random() < 0.5 ? "a" : "b";
// if (value !== "a") {
//   console.log("a");
// }else if (value ==="b") {
//   console.log("b");
// }


// function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
//   }
   
//   greet("Maddison", new Date());


// const names = ["Alice", "Bob", "Eve"]; 
// // Contextual typing for function
// names.forEach(function (s) {
//   console.log(s.toUppercase());

let url:string="https://fakestoreapi.com/products/1";

interface Itype {
    id:number,
    title:string,
    price:number
    description:string,
    category:string,
    image:string,
    rating:{
        rate:number,
        count:number
    }
}

const Data = async () =>{
    
    let data= await fetch(url)
    let res =await data.json()

    console.log(res)
    return res;
}


Data().then((res)=>{
    console.log(res.id);
    
})


