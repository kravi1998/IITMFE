function sum(num1 , num2){
    let result = num1 + num2;
    console.log("Result",result);
    return result;
}
const ans = sum(20,10);
console.log(ans);

//function expression
const sumUsingExpression = function(x,y){
let result = x+y;
return result;
}

console.log(sumUsingExpression(20,5));

//nested function 
//nest a function in another function 
function addSuqres(a,b)
{
    function numsquare(x)
    {
        return x*x;
    }
    return numsquare(a)+numsquare(b);
}

console.log("sum of squares : ",addSuqres(3,4));

//Arrow function 

const welcomeMsg = () =>{
    console.log("Welcom to My Website");
}
welcomeMsg();

const substraction = (num1 , num2) => {
    return num1-num2;
}
console.log(substraction(20,10));

const square = (num) => num*num;
console.log(square(10));

//webpage print square of 5

document.getElementById("result").textContent = square(5);

//webpage print message on click of button 
function message(){
   const msg = "Hey , User Welcome to my page"
   document.getElementById("welcomeMsg").textContent=msg;
}

//call back function
const calculate = (a , b , operation) =>{
    return operation(a,b);
}

const addition = calculate(3,4,function(num1,num2){
return num1+num2;
})

console.log("Sum",addition)

const add = calculate(33,3,sum);
console.log("Add",add)

const multiply = calculate(3,4,(x,y)=>x*y);
console.log("Multiply",multiply)

//callback function example
const nums = [4,5,2,1,-3,-6,10,20,-100,8]

const isNeg = (num) =>{
  return num < 0 ;
}

const isPostive = (num) => {
     return num > 0 ;
}

const isOdd = (num) => {
        return num%2!==0 && num>0;
}
const firstNegative = nums.find(isNeg);
console.log(firstNegative);
const firstPositive = nums.find(isPostive);
console.log(firstPositive);
const firstOdd = nums.find(isOdd);
console.log(firstOdd);

//foreach example 
nums.forEach((num)=>{
    console.log("Array Item",num)
})
//map example , return new array with the same length 
const numsType = nums.map((num) =>{
    return num%2==0;
})
console.log("number even true odd false",numsType);
//filter, return new array 
const evenNums = nums.filter((num)=>{
    if(num%2==0)
        return num;
})
console.log(evenNums);
//every condition apply on each elment , if satisfy by all element return true either false 

//some condition apply on each elment , if satisfy by some element return true either false


//synchronous and asynchronous function
