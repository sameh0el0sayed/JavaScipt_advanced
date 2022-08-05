// this practise about the math and how to implement of numbers in es7

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

//Challenge

let d="-100";
let e= "20";
let f=30;
let g=true;

console.log('//Challenge');
//console.log(-d*+e);//2000
//console.log(-d + ++f + ++e * ++g)//173;
 
console.log(-d+ ++e + ++f + ++g)//154;

