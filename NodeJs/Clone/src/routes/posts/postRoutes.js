const express = require("express");
const fs = require("fs");
const router = express.Router();

const { v4: uuidv4 } = require('uuid');


const addPost=require("../../utils/addPost")


const dataPath=(__dirname,"src/Db/Posts.json");

const getPostsData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)    
}


router.get("/", (req, res) => {

    res.send(getPostsData());
});
router.post("/create", (req, res) => {
    // console.log(req.body);
    const {title,body,img}=req.body;
    const newPost={
        id:uuidv4(),
        title:title,
        body:body,
        img:img
    }

    try{
        if(getPostsData()[req.headers["userName"]]){
            getPostsData()[req.headers["userName"]].push(newPost);
        }
        else{
            console.log(req.headers)
            console.log(getPostsData())
            getPostsData()[req.headers.username]=[];
            console.log(getPostsData())
            getPostsData()[req.headers.username].push(newPost);
        }
      

        res.send(201)
    }catch(err){
        res.status(500).send({Error:true,message:err?.stack}||"The Post Was Not added Succesfully");
    }
    // if(req.body.title!=null && req.body.body!=null && req.body.img!=null){
    //     addPost(req.body);
    //     res.send("New Post is Added")
    // }
    // else{
    //     res.send("The Parametres Are Not Definded Properly ")
    // }

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
