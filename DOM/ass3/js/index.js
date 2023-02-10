let input=document.getElementById("input");

input.addEventListener("click",increaseWidth);

function increaseWidth(){
    input.style.width="250px"
}
// let list=document.getElementsByClassName("list")[0];
// let item=document.createElement("p")
// let items=list.innerHTML="hello";
// function addItem(){
//     list.appendChild(items)
// }
function addItem(){
    // Using list ass parent element to add new item
    let list=document.getElementsByClassName("list")[0];
    // Geting value of input text
    let listItem=document.getElementById("input").value;
    // Creating new ToDoTask
    let item=document.createElement("div");
    item.className="p";
    item.innerHTML=listItem;
    // creating button
    let removeButton=document.createElement("button");
    removeButton.innerHTML="-"
    removeButton.className="pbtn";
    //Adding event listner on button 
    removeButton.addEventListener("click",(e)=>{
        e.target.parentElement.remove();
    })
    // adding button to item div
    item.appendChild(removeButton)
    // Adding new item to list(div) using append child
    if(listItem.length!==0){
        list.appendChild(item);
    }
    

    // Removing input text after adding task
    document.getElementById("input").value="";
    
    // Resizing input box to normal size
    document.getElementById("input").style.width="120px";


    
    
}
// let inputText =document.getElementById("input");
// input.addEventListener('input', resizeInput); 
//     resizeInput.call(input);
// function resizeInput() {
//     this.style.width = this.value.length + "ch";
// }
