let input=document.querySelector("#input")
let result=document.querySelector("#result")

function removeSpace(){
    let trimmed =input.value.trim()
    result.innerHTML=`After trim:${trimmed} Your String `
    console.log(input.value)
    return false
}