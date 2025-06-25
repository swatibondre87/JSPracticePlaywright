let fruits = ["apple", "banana"];
fruits.push("orange");  
console.log(fruits);  


let removedFruit = fruits.pop();  
console.log(removedFruit);  // Output: "orange"
console.log(fruits); 


let firstFruit = fruits.shift();  
console.log(firstFruit);  // Output: "apple"
console.log(fruits);  // Output: ["banana", "orange"]


fruits.unshift("apple");  
console.log(fruits);

fruits.splice(1, 1, "kiwi");  
console.log(fruits); 

fruits.splice(0, 1, "Chiku");  
console.log(fruits); 


let Newfruits = ["apple", "banana", "orange", "kiwi"];
let citrus = Newfruits.slice(1, 3);  
console.log(citrus); 

let Newfruit = ["apple", "banana"];
let moreFruits = ["orange", "kiwi"];
let allFruits = Newfruit.concat(moreFruits);  
console.log(allFruits); 

let fruitone = ["apple", "banana", "orange"];
let index = fruitone.indexOf("banana");  
console.log(index);  //1
let index1 = fruitone.indexOf("kiwi");   
console.log(index1);  // -1

let fruittype = ["apple", "banana", "orange"];
let hasBanana = fruittype.includes("banana");  
console.log(hasBanana); 

let fruits3 = ["apple", "banana", "orange"];
fruits3.reverse();  
console.log(fruits3);

let fruits4 = ["banana", "apple", "orange"];
fruits4.sort();  
console.log(fruits4); 

let number = [7,5,1];
number.sort();  
console.log(number); 

let number1 = [700,150,10,40];
number1.sort((a,b)=> a-b);  
console.log(number1);  //ascending order

let number2 = [700,150,10,445];
number2.sort((a,b)=> b-a);  
console.log(number2); //descending order


//Need to check - Task
let numberstring = [700,150,10,"swati", "apple"];
numberstring.sort((a,b)=> a-b);  
console.log(numberstring); 



