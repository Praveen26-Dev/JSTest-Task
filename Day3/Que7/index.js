let result1 =document.querySelector("#result1")
let result2 =document.querySelector("#result2")
let result3 =document.querySelector("#result3")

 function fun(){
    let msg=document.querySelector("#msg").value
    result1.innerHTML=`This is in Upper Case ${msg.toUpperCase()}`
    result2.innerHTML=`This is in Lower Case ${msg.toLowerCase()}`
    result3.innerHTML=`Your final message is: ${msg.trim()}`
    return false
}