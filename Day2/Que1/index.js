const students = [
  { name: "Aman", marks: 85 },
  { name: "Preet", marks: 45 },
  { name: "Karan", marks: 60 },
  { name: "Meena", marks: 35 }
];

// 1. Filter students who passed
const passedStudents = students.filter(student => student.marks >= 50);
console.log(passedStudents)


// 2. Get names of passed students
const passedNames = passedStudents.map(student => student.name);
console.log(passedNames); 
