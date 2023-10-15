/*
  Global Scope
    - Variables declared outside of any function or block (if, loop).
    - They can be accessed from anywhere in the code, including within functions and blocks.

  Local Scope:  
    1. Block Scope:
      - Variables are accessible only within the block in which they are defined.

    2. Function Scope
      - Variables declared inside a function have function scope.
      - They are accessible only within that function and not outside it.
      - Each function creates its own scope, and nested functions can access variables from their parent functions.
*/

// Global Scope

let x = 10;

for (let i = 1; i <= 10; i++) {
  // Block scope
  for (let j = 1; j <= 10; j++) {
    // Nested Scope
    console.log(`${i} * ${j} = ${i * j}`);
  }
  if (i !== 10) console.log("----------");
}

let z = 10;

function fun1() {
  let y = 12;
  let z = 13;
  console.log(y);
  console.log(z);
}

function fun2() {
  let y = 20;
  console.log(y);
  console.log(z);
}

fun1();
fun2();
