// Featch only objects having age grater than 25
let arr = [ 
      { firstName: "Ravi", lastName: "Kumar", age: 27 },
      { firstName: "Amit", lastName: "Kumar", age: 22 },  
      { firstName: "Ritu", lastName: "Kumari", age: 26 },  
      { firstName: "Sakshi", lastName: "Kumari", age: 24 },  
      { firstName: "Mayur", lastName: "Kumar", age: 30 },  
      { firstName: "Abhi", lastName:"Kumar", age: 21 }
    ]
    function fun1(arr){
    let objs=arr.filter((obj)=>{
        return obj.age>=25;
                
    })
    let ans=objs.map((obj)=>{
        return [obj.firstName,obj.lastName,obj.age]=[obj.firstName.toUpperCase(),obj.lastName,obj.age];
               
    })
    return ans;
}


// Sort a given array of person objects by thier Name

function fun2(arr){
    arr.sort((a,b)=>{if(a.firstName<b.firstName){ return -1;}});
    return arr;
}

// Find the pairs of elements in the array having the sum

let pairArr=[1,9,2,5,3];
let sum;
let pairsOfNum=(pairArr,sum)=>{
    let n1,n2;
    let mp= new Map();
    for(let i=0;i<pairArr.length;i++){
        if(mp.has(sum-pairArr[i])){
            n1=sum-pairArr[i];
            n2=pairArr[i];
            break;
        }
        mp.set(pairArr[i]);
    }
    return (n1+" "+n2);

}

// Validate String is Nested or not




// Merge two arrays with duplicate values and remove duplicates.

let dupArr1=[1,2,3,4,5,6,7,1,2,3];
let dupArr2=[10,11,12,13,14,15,16,16,12,13];

function removeDupFromTwoArr(dupArr1,dupArr2){
    let mp= new Map();
    dupArr1.forEach((ele)=>{
        mp.set(ele);
    })
    dupArr2.forEach((ele)=>{
        mp.set(ele);
    })
    let ans=[];
    for(let key of mp.keys()){
        ans.push(key);
    }
    return ans;
}

// Group array of Strings by Firstletter 

let gStr=["abhi" ,"amit","Maayur","Parminder","vishesh","ritu","kajal"];

function groupStrLetter(gStr){
    let dict={};
    let key;
    gStr.forEach((ele)=>{
        key=(ele[0]).toLowerCase();
        if(dict[key]==null){
            dict[key]=[ele];
        }
        else{
            dict[key].push(ele);
        }
    })
    let ans=[];
    for(let i in dict){
        ans.push(dict[i]);
    }
    return ans;
    
}

// Calculate no of jumpes required to reach end of array

let jumArr=[1,6,4,8,2];

function noOfJumps(jumArr){
    let i=0,n=jumArr.length;
    let temp=0;
    while(i<=n){
        i=i+jumArr[i];
        temp++;
    }
    if(i>n) return -1;
    else return temp-1;
    
    
}

console.log(noOfJumps(jumArr));


