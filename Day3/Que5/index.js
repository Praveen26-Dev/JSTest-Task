let input=document.querySelector("#input")
let result=document.querySelector("#result")

function removeSpaceFromEnd(){
    let trimmedStart=input.value.trimEnd()
    result.innerHTML=`After trim :${trimmedStart} Your String`
    console.log(input.value)
    return false
}