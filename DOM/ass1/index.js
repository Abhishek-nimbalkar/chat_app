// First removed class from the search button
// let search=document.getElementById("gNO89b");
// search.addEventListener("click",(e)=>{
//     e.preventDefault();
//     alert("Abhisehk");
// })

// function changeColor(){
//     var ele=document.getElementById("box");
//     ele.classList.toggle("blue");
//     let b=document.getElementById("button");
//     if(b.innerHTML==="Blue"){
//         b.innerHTML="Yellow"
//     }
//     else{
//         b.innerHTML="Blue";
//     }

// }

function mouseOver(){
    document.getElementById("image").style.transform="scale(1.5)";
    console.log("mouseover");
    document.getElementById("overlay").style.opacity="1";
}

function mouseOut(){
    document.getElementById("image").style.transform="scale(1)";
    document.getElementById("overlay").style.opacity="0";
    // console.log("mouseover");
}