let a1=async ()=>{
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 1000);
    });
  }
  
let a2= async ()=> {
    let result1 = await a1();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(result1 + 2);
      }, 1000);
    });
  }
  
let a3=async ()=>{
    let result2 = await a2();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(result2 + 3);
      }, 1000);
    });
  }
  
let a4=  async() =>{
    let result3 = await a3();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(result3 + 4);
      }, 1000);
    });
  }
  
  a4().then((sum)=>{
      console.log(sum);
  })
  