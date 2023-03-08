const express = require("express");
const fs = require("fs");
const router = express.Router();


const dataPath=(__dirname,"src/Db/Users.json");

const getUserData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)    
}
const addUser = (data) => {
    const oldData=getUserData();
    const newData=[...oldData,data]
    const stringifyData = JSON.stringify(newData)
    fs.writeFileSync(dataPath, stringifyData)
}

router.get("/", (req, res) => {

    res.send(getUserData())
    // fs.readFile(dataPath, 'utf8', (err, data) => {
    //     if (err) {
    //      throw err
    //     }
  
    //     res.send(JSON.parse(data));

    //   });
});
router.post("/signUp", (req, res) => {
    // console.log(req.body);
    if(req.body.name!=null & req.body.password!=null){
        addUser(req.body);
        res.send("New User Added")
    }
    else{
        res.send("Parameters Not Defined Properly ")
    }
    

  
  // console.log(req.body);
});

const isLoggedIn=(x,y)=>{
    const Users=getUserData();
    count =0;
    Users.forEach((ele)=>{
        if(ele.name==x && ele.password==y){
            console.log(x,y);
            count++;
        }
    })
    if(count!=0) return true;
    else return false;
}

router.post("/login",(req,res)=>{
    if(isLoggedIn(req.body.name,req.body.password)===true){
        res.send("User Alredy Present");
    }
    else{
        res.send("User Not Found ");
    }
    
})

module.exports = router;
