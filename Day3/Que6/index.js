function fun(){
    let name=document.querySelector("#name").value
    let course=document.querySelector("#course").value
    document.querySelector("#result").innerHTML=`My name is ${name} and I am learning ${course}.`



    return false
}