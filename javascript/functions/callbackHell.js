function orderFood(callBack){
    setTimeout( ()=>{
      console.log("Food is ordered");
      callBack();
    },2000)
}
function prepareFood(callBack){
    setTimeout( ()=>{
      console.log("Food is Prepared");
      callBack();
    },2000)
}
function deliverFood(callBack){
    setTimeout( ()=>{
      console.log("Food is delivered");
      callBack();
    },2000)
}

orderFood(()=>{
 prepareFood(()=>{
    deliverFood(()=>{
        console.log("Enjoy your Food")
    })
 })
})