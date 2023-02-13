
let taskList=document.getElementById("displayField");
function addField(){
    let select=document.getElementById("eleType");
    console.log(select.options[1].value);
    let fieldType=document.getElementById("inputField").value;
    let inputType=document.getElementById("inputType").value;
    // console.log(inputType);
    let newEle=document.createElement(`${fieldType}`);
    newEle.setAttribute("type",`${inputType}`)
    taskList.appendChild(newEle);
    console.log();
    
    return false;
}