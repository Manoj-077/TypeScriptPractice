"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    function Cars(name, year, fuel) {
        this.name = name;
        this.year = year;
        this.fuel = fuel;
        this.name = name;
        this.year = year;
        this.fuel = fuel;
    }
    Cars.prototype.details = function () {
        return "this is a ".concat(this.name, " car of ").concat(this.year, " model fueled by ").concat(this.fuel);
    };
    return Cars;
}());
var obj = new Cars("s-class", 2022, "electric");
var Brand = /** @class */ (function (_super) {
    __extends(Brand, _super);
    function Brand(bn, ca, cn) {
        var _this = _super.call(this, obj.name, obj.year, obj.fuel) || this;
        _this.brandName = bn;
        _this.countryAge = ca;
        _this.countryName = cn;
        return _this;
    }
    return Brand;
}(Cars));
var obj1 = new Brand("BMW", 300, "germany");
console.log(obj1.countryName);
var abc = {
    name: "hi",
    age: 44,
    show: function () {
        return "hi";
    }
};
//console.log(abc);
//console.log(typeof(abc));
function Man(name, age) {
    this.name = name;
    this.age = age;
    this.show = function () {
        return "hi";
    };
}
var abc1 = new Man("bb", 30);
var a1 = {
    name: "dog",
    diet: "omnivore",
    lifespan: 12
};
console.log("interface section below");
console.log(JSON.stringify(a1));
console.log(typeof (a1));
var Animal1 = /** @class */ (function () {
    function Animal1(n, d, l) {
        this.name = n;
        this.diet = d;
        this.lifespan = l;
    }
    return Animal1;
}());
console.log("class section below");
var a2 = new Animal1("cat", "omni", 12);
console.log(JSON.stringify(a2));
console.log(typeof (a2));
