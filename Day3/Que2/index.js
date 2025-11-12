
let city=document.querySelector("#city");
let result=document.querySelector("#result")
function printStringLiteral(){
    city=city.value.toLowerCase();
    result.innerHTML=`You live in ${city}`
    return false;
}