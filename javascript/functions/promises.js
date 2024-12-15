function orderFood(){
    return new Promise((resolve)=>{
        setTimeout( ()=>{
            console.log("Food is ordered");
            resolve();
          },2000)
    })
}
function prepareFood(){
    return new Promise((resolve)=>{
        setTimeout( ()=>{
            console.log("Food is Prepared");
            resolve();
          },2000)
    })
}
function deliverFood(){
    return new Promise((resolve)=>{
        setTimeout( ()=>{
            console.log("Food is delivered");
            resolve();
          },2000)
    })  
}

orderFood()
    .then(prepareFood)
    .then(deliverFood)
    .then(()=>{
        console.log("Enjoy your food")
    })

    const promise = new Promise((resolve,reject)=>{
        const success = true;
        if(success){
        resolve("Operation Successful")
        }else{
         reject("Operation failed")
        }
    })

    promise.then((message)=>{
        console.log("Success",message)
    }).catch((error)=>{
            console.log("Error:",error)
        })

//pending , rejected and fullfil

console.log(deliverFood());

//Async and await

//Dom manupulation

