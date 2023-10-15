let userNumber;
/* while loop
	 check condition first if true then go to the code

	do while 
		go to the code first then check the condition
*/
do {
  userNumber = prompt("Enter a number:");
} while (isNaN(userNumber));

console.log("You entered a valid number:", userNumber);

userNumber = prompt("Enter a number:");

while (isNaN(userNumber)) {
  userNumber = prompt("Enter a number:");
}

console.log("You entered a valid number:", userNumber);

/*
  - Write a program that ask user to guess a number between 1 - 100
  - in case of guessed number == target number show message `Congratulations You guessed the number ${targetNumber} in ${attempts}` 
  - check if guessed number > target number show message "Too high try again" 
  - check if guessed number < target number show message "Too Low try again" 
  - check if guessed number Not a number show message "Enter a vaild number"
*/

const targetNumber = Math.floor(Math.random() * 100 + 1);
let attempts = 0;
let guess;

console.log(targetNumber);

do {
  guess = parseInt(prompt(`Guess the number between 1 - 100:`));
  attempts++;

  if (isNaN(guess)) {
    alert("Please enter a valid number.");
  } else if (guess < targetNumber) {
    alert("Too low! Try again.");
  } else if (guess > targetNumber) {
    alert("Too high! Try again.");
  }
} while (guess !== targetNumber);

alert(`Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`);
