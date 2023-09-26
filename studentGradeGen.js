const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Enter student marks:',(userInput)=>{
  const marks = userInput;
  calculateGrade(marks);
  rl.close();
})
  

function calculateGrade(marks) {
    if (marks > 79) {
      console.log("A");
    } else if (marks >= 60 && marks <= 79) {
      console.log("B");
    } else if (marks >= 50 && marks <= 59) {
      console.log("C");
    } else if (marks >= 40 && marks <= 49) {
      console.log("D");
    } else {
      console.log("E");
    }
  }
  