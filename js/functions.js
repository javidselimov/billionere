
function diff(a, b) {
  let c = a+b
  return   function(d){
     return c+d
  }
}

let a = diff(6,3)(5)
console.log(a)

let name = a=>{
    5 ;
    console.log()
}
