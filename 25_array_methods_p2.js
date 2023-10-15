/*
  Array Methods
   - length (Property)
   - unshift()
   - push() 
   - shift()
   - pop()
   - concat()
*/

const fruits = ["Apple", "Orange", "Banana"],
  fruits2 = ["Mango", "Guava"];

//* length
console.log(fruits);
console.log(fruits.length);
fruits[fruits.length] = "Mango";
console.log(fruits);

//* unshift() => add new element in first of array
console.log(fruits);
fruits.unshift("Mango", "Watermelon");
console.log(fruits);

//* push() => add new element in end of array
console.log(fruits);
fruits.push("Mango", "Watermelon");
console.log(fruits);

//* shift() => Removes first element of array
console.log(fruits);
fruits.shift();
fruits.shift();
console.log(fruits);

//* pop() => Removes last element of array
console.log(fruits);
fruits.pop();
fruits.pop();
console.log(fruits);

//* concat() => combine between two arrays
let allFruits = fruits2.concat(fruits);

console.log(fruits);
console.log(fruits2);
console.log(allFruits);
