const express = require("express");
const fs = require("fs");
const router = express.Router();


const dataPath=(__dirname,"src/Db/Posts.json");

const getPostsData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)    
}
const addPost = (data) => {
    const oldData=getPostsData();
    const newData=[...oldData,data]
    const stringifyData = JSON.stringify(newData)
    fs.writeFileSync(dataPath, stringifyData)
}

router.get("/", (req, res) => {

    res.send(getPostsData())
    // fs.readFile(dataPath, 'utf8', (err, data) => {
    //     if (err) {
    //      throw err
    //     }
  
    //     res.send(JSON.parse(data));

    //   });
});
router.post("/create", (req, res) => {
    // console.log(req.body);
    if(req.body.title!=null && req.body.body!=null && req.body.img!=null){
        addPost(req.body);
        res.send("New Post is Added")
    }
    else{
        res.send("The Parametres Are Not Definded Properly ")
    }

router.put("/edit/:title",(req,res)=>{
    const allPosts=getPostsData();
    const postToEdit=req.params["title"];
    

})

  // console.log(req.body);
});



router.put("/edit",(req,res)=>{
    if(isLoggedIn(req.body.name,req.body.password)===true){
        res.send("User Alredy Present");
    }
    else{
        res.send("User Not Found ");
    }
    
})

module.exports = router;
