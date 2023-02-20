const arr=[
    {
        name:"fname",
        paceholer:"Enter First Name"
    }
]

arr.forEach((ele)=>{
    document.getElementById(ele.name).setAttribute("placeholder",ele.paceholer);
})

let fnameC=document.createElement("p");
fnameC.innerText="Enter First Name";

let lnameC=document.createElement("p");
lnameC.innerText="Enter Last Name";

let numberC=document.createElement("p");
numberC.innerText="Enter Phone No";

let pincodeC=document.createElement("p");
pincodeC.innerText="Enter PinCode";

function validate(){
    let fname=document.forms["form"]["fname"];
    let lname=document.getElementsByName("lname")[0];
    let number=document.getElementsByName("number")[0];
    let pincode=document.getElementsByName("pincode")[0];
    console.log([fname]);
    // let file=document.getElementsByName("file")[0];
    if(fname.value.length===0){
        fname.after(fnameC);
        setTimeout(()=>{
            fnameC.remove();
        },1000)
        
    }
    if(lname.value.length===0){
        lname.after(lnameC);
        setTimeout(()=>{
            lnameC.remove();
        },1000)
        
    }
    if(number.value.length===0){
        number.after(numberC);
        setInterval(()=>{
            numberC.remove();
        },1000)
        
    }
    if(pincode.value.length===0){
        pincode.after(pincodeC);
        setTimeout(()=>{
            pincodeC.remove();
        },1000)
        
    }

    // if(pincode.value.length===0){
    //     pincode.after(pincodeC);
    //     setTimeout(()=>{
    //         pincodeC.remove();
    //     },1000)
        
    // }

    // else{
    //     console.log(fname.value);
    // }
    
}