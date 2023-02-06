// Class
class Car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    age(x){
        return x-this.year;
    }
}
// let c1=new Car("Ford",2020);
let date = new Date();
let year= date.getFullYear();

let myCar=new Car("ford",2015);

function Car(name,year){
    
}

console.log(myCar.age(year));
