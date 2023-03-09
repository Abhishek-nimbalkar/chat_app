const isLoggedIn=(x,y)=>{
    const Users=getUserData();
    count =0;
    Users.forEach((ele)=>{
        if(ele.name===x && ele.password===y){
            console.log(x,y);
            count++;
        }
    })
    if(count!=0) return true;
    else return false;
}

module.exports={isLoggedIn};