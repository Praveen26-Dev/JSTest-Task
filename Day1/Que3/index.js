let student = {
  name: "Praveen",
  age: 22,
  branch: "CSE",
  city: "Bhopal",
  subjects: ["Maths", "Java", "DBMS", "OS", "Networking"]
};
console.log(student.subjects);
student.subjects.forEach((sub) => {
  console.log(sub);
});

