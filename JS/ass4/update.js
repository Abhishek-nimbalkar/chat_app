const fs = require("fs").promises;

let signIn = async (obj) => {
    try {
        let data = await fs.readFile("./personData.json", "utf-8");
        let pdata = JSON.parse(data);

        // pdata.forEach(element => {
        //     console.log(element.emailId);
        // });
        pdata.forEach((ele) => {
            if (ele.emailId == obj.emailId && ele.password == obj.password) {
                fs.writeFile("./personData.json",JSON.stringify(obj),(err)=>{
                    if(err) console.log("error in writing");
                })
            }
        });
  } catch(error) {
    console.log( error);
  }
};

// function fun(data){
//     console.log(data);
// }

// console.log(syncRead);

obj={
    "firstName": "Amit",
    "lastName": "Kumar",
    "age": 299,
    "emailId":"amit.kumar@gmail.com",
    "password":"amit1234",
    "address": 12345
}
signIn(obj);