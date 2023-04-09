var subject1 = parseFloat(prompt("Enter the marks for Islamiat"));
var subject2 = parseFloat(prompt("Enter the marks for Urdu"));
var subject3 = parseFloat(prompt("Enter the marks for English"));
var subject4 = parseFloat(prompt("Enter the marks for Math"));
var subject5 = parseFloat(prompt("Enter the marks for Computer"));

var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
var percentage = (totalMarks / 500) * 100;

var grade;
if (percentage >= 90) {
  grade = "A+";
} else if (percentage >= 80) {
  grade = "A";
} else if (percentage >= 70) {
  grade = "B";
} else if (percentage >= 60) {
  grade = "C";
} else if (percentage >= 50) {
  grade = "D";
} else {
  grade = "F";
}

console.log("Total Marks: " + totalMarks);
console.log("Percentage: " + percentage + "%");
console.log("Grade: " + grade);

