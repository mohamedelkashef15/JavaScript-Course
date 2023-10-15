/*
  Array Methods part 2
   - slice(start, end) | End not included
    method that used to extract a portion of an array into a new array without modifying the original array. 

   - splice(start, deleteCount, item1, item2, ...) 
    method that used to modify an array by removing, replacing, or adding elements to it

   - indexOf()
     method that used to search for element within an array. It print index (position) of first element
    
   - lastIndexOf()
      method that used to search for element within an array. It print index (position) of last element
    
   - includes()
      method is used to check if an array contains a specified element.
*/

const animals = ["Frog", "Cat", "Dog", "Monkey", "Dog", "Camel", "Dog"];

// console.log(animals);

// slice(start, end) | End not included
console.log(animals.slice(1, 3));
console.log(animals.slice(2));
console.log(animals);

// splice(start, deleteCount, item1, item2, ...)
// add items
animals.splice(1, 0, "duck", "Elephant");
console.log(animals);

// delete items
animals.splice(2, 2);
console.log(animals);

// replace items
animals.splice(1, 2, "hourse", "sheep");
console.log(animals);

// indexOf()
console.log(animals);
console.log(animals.indexOf("Dog"));

// lastIndexOf()
console.log(animals.lastIndexOf("Dog"));

// includes()
console.log(animals.includes("ant"));
