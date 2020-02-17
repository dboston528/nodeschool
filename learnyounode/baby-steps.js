//starting point for end result
let result = 0;

//for loop that starts the count at 2 and stops when the length of process.argv is equal to or greater than i.
for (let i = 2; i < process.argv.length; i++) {
  /* Adds whatever is in the argument will be addded to the result */
  result += Number(process.argv[i]);
}

//prints the result to the console
console.log(result);
