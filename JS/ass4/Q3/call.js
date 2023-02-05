function f1(cb) {
    setTimeout(() => {
      cb(1);
    }, 1000);
  }
  
  function f2(cb) {
    f1((r1) => {
      setTimeout(() => {
        cb(r1 + 2);
      }, 1000);
    });
  }
  
  function f3(cb) {
    f2((r2) => {
      setTimeout(() => {
        cb(r2 + 3);
      }, 1000);
    });
  }
  
  function f4(cb) {
    f3((r3) => {
      setTimeout(() => {
        cb(r3 + 4);
      }, 1000);
    });
  }

  function cb(ele){
    console.log(ele)
  }

  f4(cb);
