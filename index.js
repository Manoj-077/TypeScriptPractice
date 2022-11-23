"use strict";
exports.__esModule = true;
var ms = "hola1";
var b = 10;
//console.log(b);
b = 210;
//console.log(b)
var bh = "hey";
//console.log(bh[1]);
var a = [10, 20, 30];
var array = ['water', 'fire', 33, 'metal'];
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
function adds(num1, num2, str, num3) {
    if (num3 && str) {
        return str + " " + (num1 + num2 + num3);
    }
    else if (num3 && !str) {
        return (num1 + num2 + num3);
    }
    else if (!num3 && !str) {
        return num1 + num2;
    }
}
// const max = 100;
// let counter = 101;
// counter < max ? counter++ : counter = 1; // ternary operator 
// console.log(counter);
var x = function (n) { return n / 2; };
//console.log(x(2));
var Person = /** @class */ (function () {
    function Person(n, ad, a) {
        this.name = n;
        this.address = ad;
        this.age = a;
    }
    Person.prototype.details = function () {
        return "name is " + this.name + " ,address is " + this.address + " ,age is" + this.age;
    };
    return Person;
}());
var per = new Person('Tommy', 'vercetti', 35);
var per1 = new Person('Lance', "vance", 36);
console.log("this is class " + JSON.stringify(per));
console.log(typeof (per));
//console.log(per);
var ar = [];
ar.push('l');
//console.log('ar')
var ar1 = [];
ar1.push(per, per1);
//console.log(ar1[1].name);
function Person1(name, age) {
    this.name = name;
    this.age = age;
    this.fn = function () { return this.name + " " + this.age; };
}
var p1 = new Person1('earth', 50);
//console.log(p1.fn());
//console.log(typeof(p1));
var Cars = /** @class */ (function () {
    function Cars(n, y, f) {
        this.name = n;
        this.year = y;
        this.fuel = f;
    }
    Cars.prototype.details = function () {
        return "this is a ".concat(this.name, " car of ").concat(this.year, " model fueled by ").concat(this.fuel);
    };
    return Cars;
}());
var obj = new Cars("supra", 2000, "diesel");
console.log(obj.details());
