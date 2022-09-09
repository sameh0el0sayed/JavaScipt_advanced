let theName=`javascript`;
// console.log(theName.charAt(1))
// console.log(theName.trim().charAt(4).toUpperCase())
///

console.clear();
console.log(theName.indexOf("a"));//1
console.log(theName.lastIndexOf("a"));//index 3
console.log(theName.slice(0,4  ))//java
console.log(theName.slice(-6  ))//java
console.log(theName.repeat(3))//java
console.log(theName.split("\n"));

console.log(theName.substr(4,4));

//end the strings
console.clear();

//start of logics

//compare operators
console.log(10=="10")//true , this compare the value only
console.log(10!="10")//false , this compare the value only

console.log(10==="10")//false , this compare the value and datatype
console.log("101"==="10")//false , this compare the value and datatype
console.log(10!=="10")//true , this compare the value and datatype


//Nested If Condition
let descount=true;
let descount_amount=10;
let citizun=true;
let price=100;

if(descount===true){
    
    //nested
    if(citizun===true){
        price-=(descount_amount*5);
    }else{
        price-=descount_amount;
    }
}

console.log(`price = ${price}`);

//Conditional Ternary

let tName="Ahmed";
let tGendar="male";
let tAge=30;

console.log(`Hellow ${tGendar==="male"? "Mr":"Ms"} ${tName}`);

tAge < 20 ? console.log("you are less 20") : tAge > 20 && tAge < 60 ? console.log("20 to 60") : console.log("not avilable");


//nullish coalescing 

let aPrice;
let bPrice=null;
let cPrice="";
let dPrice=0;
let VPrice=30;
let nPrice="-"


console.log(`the price is ${aPrice||nPrice} `);
console.log(`the price is ${bPrice||nPrice} `);
console.log(`the price is ${cPrice||nPrice} `);
console.log(`the price is ${dPrice||nPrice} `);
console.log(`the price is ${VPrice||nPrice} `);

//switch statment

let swithValue=2;

switch (swithValue){
    case 0:
        console.log("case 0");
        break;
    case 1:
    case 2:
        console.log("case 1&2");
        break;
    default:
        console.log("no case");
        break;  
}


