function isLoggedIn(x,y){
    const Users=getUserData();
    Users.forEach((ele)=>{
        if(ele.name==x && ele.password==y){
            console.log(x,y);
            return true;
        }
    })
    return false;
}

module.exports={isLoggedIn};