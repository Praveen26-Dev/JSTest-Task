let res = confirm("Do you want to see Numbers from 1 to 10");
if(res){
    let number=""
    for(var i=1;i<=10;i++){
        number=number + " " + i;
    }
    alert(number)
}
else{
    alert("You canceled the action  ")
}