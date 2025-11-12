let input=document.querySelector("#input")
let result=document.querySelector("#result")

function removeSpaceFromStart(){
    let trimmedStart=input.value.trimStart()
    result.innerHTML=`After trim : ${trimmedStart} Your String`
    console.log(input.value)
    return false
}