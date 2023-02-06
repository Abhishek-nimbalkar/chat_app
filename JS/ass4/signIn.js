const fs = require("fs").promises;

let signIn = async (email, pass) => {
    try {
        let data = await fs.readFile("./personData.json", "utf-8");
        let pdata = JSON.parse(data);

        // pdata.forEach(element => {
        //     console.log(element.emailId);
        // });
        pdata.forEach((ele) => {
            if (ele.emailId == email && ele.password == pass) {
                console.log("Person Present");
            }
        });
  } catch(error) {
    console.log( error);
  }
};

// function fun(data){
//     console.log(data);
// }
signIn("abhi.kumaar@gmail.com", "abhi@1234");
// console.log(syncRead);
