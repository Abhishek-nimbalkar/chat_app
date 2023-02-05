let p1 =new Promise((res,rej)=>{
    setTimeout(() => {
      res(1);
    }, 1000);
  });
  
  let p2 =new Promise((res,rej)=>{
    setTimeout(() => {
      res(2);
    }, 1000);
  });
  let p3 =new Promise((res,rej)=>{
    setTimeout(() => {
      res(3);
    }, 1000);
  });
  let p4 =new Promise((res,rej)=>{
    setTimeout(() => {
      res(4);
    }, 1000);
  });
  
  Promise.all([p1,p2,p3,p4])
  .then((data)=>{
    console.log(data);
  })