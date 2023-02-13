let mp={
    "Black": "0",
    "Brown": "1",
    "Red":"2",
    "Orange" :"3",
    "Yellow": "4",
    "Green" :"5",
    "Blue":"6",
    "Violet":"7",
    "Grey" :"8",
    "White": "9"
}
function all(c0:string,c1:string,c2?:string,c3?:string,c4?:string,c5?:string,c6?:string,c7?:string,c8?:string,c9?:string){
    return mp[c0]+mp[c1];
}
console.log(all("Green","Brown","Red"));