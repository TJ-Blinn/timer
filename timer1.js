/*
cmd line arguments
* node timer1.js 10 3 5 15 9

    * No numbers are provided: Easy. It should just not beep at all and end immediately
since no beeps should get scheduled.
    * An input is a negative number: Ignore/skip any numbers that are negative.
We can't schedule anything in the past.
    * An input is not a number: Ignore/skip these as well, instead of attempting to call
setTimeout with a non-number.

Pseudocode
- process.argv.slice(2)
*/
// ************************************
// "use strict";

const timer = function (time) {
  const cmdInput = process.argv.slice(2);
  // checking for edge cases
  if (cmdInput === " " || cmdInput <= 0 || isNaN(time)) {
    return null;
  }

  //iterates over array(only)
  cmdInput.forEach((time) => {
    setTimeout(() => {
      process.stdout.write("noise\n");
    }, time * 1000);
  });

  // const alertTerminal = function() {
  //   console.log("\x07");
  // console.log("\u0007");
  // };
};

timer();
// *********** process.argv for this to run | node timer1.js 5 *****************
