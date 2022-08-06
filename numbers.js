// this practise about the Math and how to implement of numbers in es7

//pre increment
num=1;
console.log(`pre increment = ${num++}`);//=1 because it print and add n+1
//post increment
num=1;
console.log(`post increment = ${++num}`);//=2 because it add n+1 after that print  

//pre decrement
num=2;
console.log(`pre decrement = ${num--}`);//=2 because it print and  n-1
//post decrement
num=2;
console.log(`post decrement = ${--num}`);//=1 because it  n-1 after that print  


//------------------------
//unary
console.log(+"100");
//or if use constractor
console.log(Number("100"));

//assignment operator
let a=10;
a+=100;
a-=50;
a/=60;

console.log(a);

//Challenge of uunary operators

let d="-100";
let e= "20";
let f=30;
let g=true;

console.log('//Challenge');
//console.log(-d*+e);//2000
//console.log(-d + ++f + ++e * ++g)//173;
console.log(-d+ ++e + ++f + ++g)//154;

//Number function
//max safe value,max value on JS

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE); 

console.log(Number.isFinite(10/5))//true
console.log(Number.isFinite(1/0));//false ,that is, it checks that the type of a given value is Number, and the number is neither positive Infinity
console.log(Number.isInteger(100));//true
console.log(Number.isInteger("100"));//false
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER))//true
console.log(Number.isSafeInteger(Number.MAX_VALUE))//false
console.log(Number.isNaN("Sameh" /20));//true, check the return value is NaN, don't check the value on fun
 
//Math Objects

console.log(Math.round(99.2));//round to 99
console.log(Math.round(99.5));//round to 100
 
console.log(Math.ceil(99.2));//max great number =100
console.log(Math.floor(99.5));//min number =99
console.log(Math.min(300,1,3,4));
console.log(Math.max(300,1,3,4));

console.log(Math.pow(2,4));//2^4
console.log(Math.random(10,9));

console.log(Math.trunc(99.55));// remove after . 99.555=99 only

//Math Objects challenge

let ma=1_00;
let mb=2_00.5;
let mc=1e2;
let md=2.4;

//min
console.log(Math.trunc((Math.min(ma,mb,mc,md))));

//10000 from ma,md
console.log(Math.pow(ma,Math.trunc(md)));

//mb ,md to get 66.67 string, 67 number
console.log((Math.trunc(mb)/Math.ceil(md)).toFixed(2));//string 66.67
console.log(Math.ceil(Math.trunc(mb)/Math.ceil(md)));//67





