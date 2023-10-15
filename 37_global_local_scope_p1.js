/*
  Global Scope
    - Variables declared outside of any function or block.
    - They can be accessed from anywhere in the code, including within functions and blocks.

  Local Scope:  
    1. Block Scope:
      - They are accessible only within the block in which they are defined.

    2. Function Scope
      - Variables declared inside a function have function scope.
      - They are accessible only within that function and not outside it.
      - Each function creates its own scope, and nested functions can access variables from their parent functions.
*/

// Global Scope
let x = 10;

console.log(`${x} From Global Scope`);

if (true) {
  // Block Scope
  let y = 11;
  console.log(`${x} from Block Scope`);
  console.log(`${y} from Block Scope`);

  if (true) {
    // Nested Scope
    let z = 15;
    console.log(`${x} from Nested Scope`);
    console.log(`${y} from Nested Scope`);
    console.log(`${z} from Nested Scope`);
  }
}
