let fun={
    add:function(a,b){
        return a+b
    },
    sub:function(a,b){
        return a-b

    },
    multi:function(a,b){
        return a*b

    }
}
let add=fun.add(10,15)
let sub=fun.sub(15,10)
let multi=fun.multi(5,5)

console.log(add)
console.log(sub)
console.log(multi)