// function foo(arg: string | null | undefined) {
//     if (arg != null) {
//       console.log(arg);
       
//     }
// }

//   foo("abhishek");

// function fo():{a:number,b?:number}{
//     return {a:1,b:2};
//     return{a:1}
// }

let heading:HTMLHeadingElement | null=document.querySelector("h1");
heading?.addEventListener("click",red)
function red(){
  if(heading!=null){
  heading.style.color="red";
}
}

// Interface Basic Example

// interface IPerson{
//   name:string,
//   age:number
// }

// let person: IPerson={
//   name:"abhishek",
//   age:"ad"
// }
