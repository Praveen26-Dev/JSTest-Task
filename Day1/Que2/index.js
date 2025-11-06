// 2) Create an empty object with 6 keys and take input from the user with the help of form and print it below the on console
var ename;
var contact;
var age;
var desgn;
var address;
var bg;
function fun(){

 ename= document.querySelector("#ename").value
 contact= document.querySelector("#contact").value
 age= document.querySelector("#age").value
 desgn= document.querySelector("#dsg").value
 address= document.querySelector("#address").value
bg = document.querySelector("#bloodgroup").value
let emp={
  ename:ename,
  contact:contact,
  age:age,
  designation:desgn,
  address:address,
  blodgroup:bg
}
for (const v in emp) {
     console.log(v+":"+emp[v])
     
     
}
return false
}
