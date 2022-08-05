//var , let and const

// var aabb=10; //can reAssignment and can redeclare 
// let //can reAssignment only and change type of data
//const hold all of Assignment and type 

const aa=true;

console.log("%cStop! \n %cThis browser feature intended for developers only. ","color:Red;font-size:50px;text-align:center;text-shadow: 3px 1px black","");
 
//implementation
//CamelCase
var NumberOne=10;
var NumberTwo=20;
 
//concatenate
var concat=''+NumberOne+NumberTwo;
console.log(concat);
console.log(typeof concat);
//Template Literal
var templete_literal_concat=`${NumberOne}${NumberTwo}`;
 console.log(templete_literal_concat);
 console.log(typeof templete_literal_concat);
 var templete_literal_concat_UnderLine=`${NumberOne}
${NumberTwo}`;
 console.log(templete_literal_concat_UnderLine);
 //HTML template literal
 let name="sameh";
 let makeup=`<div>
 <h1>hi ${name}</h1>
 </div>`;
 document.write(makeup);





 

 
 
 