// 1. Print all even Numbets from 10 to 100
let even=[0];
function printEven(){
    for(let i=10;i<=100;i++){
        if(i%2==0) even.push(i);
    }
    return even;
}
// 2. create a length converter function
let km;
function kmToMiles(km){
    return km*0.621371;
}

// 3. Convert days into seconds
let days;
function daysToSec(days){
    return days*86400;
}

//4. Calculate the sum of odd numbers greater than 10 and multiples of 3 from a given array

let sumOfOddNo=[01,23,56,78,12,33];
let sumOfOddNoAns=[];
function sumOfOddNumbers(sumOfOddNo){
    for(let i=0;i<sumOfOddNo.length;i++){
        if(sumOfOddNo[i]>10 && sumOfOddNo[i]%3===0){
            sumOfOddNoAns.push(sumOfOddNo[i]);
        }
        
    }
    return sumOfOddNoAns;
}

//5. Function to reverse and array

let revArr=[1,2,3,4,5,6,7,8,9];
let revAns=[];
function revArray(revArr){
    for(let i=revArr.length-1;i>=0;i--){
        revAns.push(revArr[i]);
    }
    return revAns;
}

//6. Remove Spaces in String

let spaceStr="i am abhishek";
let noSpaceStr="";
function removeSpaces(spaceStr){
    for(let i in spaceStr){
        if(spaceStr[i]!==' '){
            noSpaceStr+=spaceStr[i];
        }
    }
    return noSpaceStr;
}

//7. Vowels in a String
let volStr="abhishek";
let ansVolStr="";
function vowelsFromStr(volStr){
    for(let i in volStr){
        if(volStr[i]==='a'|| volStr[i]==='e'||volStr[i]==='i'||volStr[i]==='o'||volStr[i]==='u'){
            ansVolStr+=volStr[i];
        }
    }
    return ansVolStr.length;
}

// Reverse each word of a given sentence

let wordStr="my name is abhishek";
let tempWrodStr="";
let ansWordStr="";
let WordStrArr=[];
function wordRev(wordStr){
    for(let i=wordStr.length-1;i>=0;i--){
        tempWrodStr=tempWrodStr+wordStr[i];
    }
    let temp="";
    for(let i=0;i<=tempWrodStr.length;i++){
        if(tempWrodStr[i]==' ' || i==tempWrodStr.length){
            WordStrArr.push(temp);
            temp="";
        }
            
        temp=temp+tempWrodStr[i];
    }
    for(let i=WordStrArr.length-1;i>=0;i--){
        ansWordStr=ansWordStr+WordStrArr[i];
    }
    return ansWordStr;
}
// console.log(wordRev(wordStr));

//8. Find the missing number in array

let missArr=[1,2,3,4,5,6,7,8,9,11];
function missNoArr(missArr){
    missArr.sort(function(a,b){return a-b});
    for(let i=0;i<missArr.length ;i++){
        if(missArr[i+1] != missArr[i]+1){
            return missArr[i]+1;
        }
    }
    
    return -2;
}

//9. A vehicle needs 10 times
let dis;
function fule(dis){
    if(dis*10 > 100)
    return dis*10;
    else return -1;
}

//10. Decimal to binary

let decimalNo;
let ansBinary=[];
function decToBinary (decimalNo){
    while(decimalNo>=1){
        if(decimalNo % 2 == 0){
            ansBinary.push(0);
        }
        else{
            ansBinary.push(1);
        }

        decimalNo=decimalNo/2;

    }
    return ansBinary;
}

// 11. Sort and array of 0,2,1
let unSortArr=[1,2,0,1,0,2,2,1,0,2];
let ansSortArr=[];
function sortArr(unSortArr){
    let c1=0,c2=0,c3=0;
    for(let i=0;i<unSortArr.length;i++){
        if(unSortArr[i]==0) c1++;
        else if(unSortArr[i]==1) c2++;
        else if(unSortArr[i]==2) c3++;
    }
    for(let i=0;i<c1;i++){
        ansSortArr.push(0);
    }
    for(let i=0;i<c2;i++){
        ansSortArr.push(1);
    }
    for(let i=0;i<c3;i++){
        ansSortArr.push(2);
    }
    return ansSortArr;
}

// 12. Rotate an array of numbers to the left

let rotArr=[1,2,3,4,5,6,7,8,9];
let ansRotArr=[];
let noRot;
function rotateArray(rotArr,noRot){
    for(let i=noRot;i<rotArr.length;i++){
        ansRotArr.push(rotArr[i]);
    }
    for(let i=0;i<noRot;i++){
        ansRotArr.push(rotArr[i]);
    }
    return ansRotArr;
}
// 13. Check given String are anagrams of each other or not
let anaStr1="care";
let anaStr2="race";
function checkAnagram(anaStr1,anaStr2){
    let arr1=[];
    let arr2=[];
    if(anaStr1.length==anaStr2.length){
        for(let i=0;i<anaStr1.length;i++){
            arr1.push(anaStr1[i]);
        }
        for(let i=0;i<anaStr2.length;i++){
            arr2.push(anaStr2[i]);
        }
        arr1.sort();
        arr2.sort();
        if(JSON.stringify(arr1)==JSON.stringify(arr2))
            return true;
        else
            return false;
    }
    else return false;
}

// 14. Binary string it into the equivalent decimal number

let binaryStr="11011";
function binaryToDecimal(binaryStr){
    let n=parseInt(binaryStr);
    let i=0,ans=0,temp;
    while(n>1){
        temp=Math.floor(n%10);
        ans=ans+temp*Math.pow(2,i);
        i++;
        n=n/10;
        
    }
    return ans;
}

// 15. String conatans a digit 

let numStr="Abhishek1";
function strToDigit(numStr){
    let x;
    for(let i=0;i<numStr.length;i++){
        x=parseInt(numStr[i]);
        if(x%2 == 0 || x%2 == 1){
            return true;
        }
        
    }
    return false;
}

// 16. Random Number 

function randomFourDigit(){
    return Math.floor(Math.random()*10000)+1;
}

// Find the even duplicate elements in an array of numbers

let freqArr=[10, 20, 20, 10, 10, 20, 5, 20,6,6,8,8,9,0,22,22,34,3,46,46,46];
function dupliAndEven(freqArr){
    let map=new Map();
    for(let i=0;i<freqArr.length;i++){
        if(map.has(freqArr[i]))
            map.set(freqArr[i],map.get(freqArr[i])+1);
        else 
            map.set(freqArr[i],1);

    }
    let nos=[];
    map.forEach((value,key)=>{
        if(key>1 && value%2==0){
            nos.push(key);
        }
    })
    return nos;
}

// Find the element having highest frequency in an array of numbers

function highFreq(freqArr){
    let map= new Map();
    for(let i=0;i<freqArr.length;i++){
        if(map.has(freqArr[i]))
            map.set(freqArr[i],map.get(freqArr[i])+1);
        else 
            map.set(freqArr[i],1);

    }
    let maxF=1;
    for(let [key,value] of map.entries()){
        if(value>1) maxF=value;
    }
    return maxF;
}

console.log(highFreq(freqArr));