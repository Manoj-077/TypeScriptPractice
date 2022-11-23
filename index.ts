export{}
let ms : string = "hola1";

let b = 10;
//console.log(b);
b = 210;
//console.log(b)
var bh = "hey"
//console.log(bh[1]);
let a : any = [10,20,30];



var array : (string|number)[] = ['water','fire',33,'metal'];
//console.log("array is "+array[0])
array.push(77);
//console.log(array)
/*for (let i=0;i<array.length;i++){
    if(i==0){
        console.log("array is [")
    }
    else{
        console.log(array[i])
    }
}
console.log("]")*/

/*var tup: [string,string] = ["abc","rdc"];



var obj: object;
obj = {
    name : "abc",
    age: 12
}
obj['address'] = "USA";
console.log(obj); */

/*function add(num1: number, num2: number): number{
                    return num1+num2;
}
console.log("sum is "+add(1,2));*/

function adds(num1: number, num2:number, str?:string ,num3?:number): (number | string) {
    if(num3&&str){
        return str+" "+(num1+num2+num3);
    }
    else if(num3 && !str){
        return (num1+num2+num3);
    }
    else if(!num3 && !str){
        return num1+num2;
    }
   
}

// const max = 100;
// let counter = 101;

// counter < max ? counter++ : counter = 1; // ternary operator 

// console.log(counter);

let x = (n:number)=>n/2;
//console.log(x(2));


class Person{
    name : string;
    address : string;
    age : number;

    constructor(n:string, ad:string, a:number){
        this.name = n;
        this.address = ad;
        this.age = a;
    }

    details(){
        return "name is "+this.name+" ,address is "+this.address+" ,age is"+this.age;
    }
}

var per = new Person('Tommy','vercetti',35);
var per1 = new Person('Lance',"vance",36);
console.log("this is class "+JSON.stringify(per));
console.log(typeof(per));
//console.log(per);
let ar : string[] = [];
ar.push('l');
//console.log('ar')
let ar1 : Person[] = [];
ar1.push(per,per1);
//console.log(ar1[1].name);

function Person1(name:string,age:number){
    this.name = name;
    this.age = age;
    this.fn = function(){return this.name +" "+this.age}
}

var p1 = new Person1('earth',50);
//console.log(p1.fn());
//console.log(typeof(p1));

class Cars{
    name: string;
    year: number;
    fuel: string;
    
    constructor (n:string,y:number,f:string){
        this.name = n;
        this.year = y;
        this.fuel = f;
    }

   details(){
    return `this is a ${this.name} car of ${this.year} model fueled by ${this.fuel}`
   } 

}

let obj = new Cars("supra",2000,"diesel");
console.log(obj.details());

