const arr=[
    {
        
    },
    {

    }
]
let fnameC=document.createElement("p");
fnameC.innerText="Enter First Name";

let lnameC=document.createElement("p");
lnameC.innerText="Enter Last Name";


function validate(){
    let fname=document.getElementsByName("fname")[0];
    let lname=document.getElementsByName("lname")[0];
    // let number=document.getElementsByName("number")[0];
    // let pincode=document.getElementsByName("pincode")[0];
    // let file=document.getElementsByName("file")[0];
    if(fname.value.length===0){
        fname.after(fnameC);
        setInterval(()=>{
            fnameC.remove();
        },1000)
        
    }
    else if(lname.value.length===0){
        lname.after(lnameC);
        setInterval(()=>{
            lnameC.remove();
        },1000)
        
    }
    // if(name.value.length===0){
    //     fname.after(fnameC);
    //     setInterval(()=>{
    //         fnameC.remove();
    //     },1000)
        
    // }
    else{
        console.log(fname.value);
    }
    
}