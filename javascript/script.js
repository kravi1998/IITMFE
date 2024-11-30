let a = 10;
let b=20;
console.log(a+b)
let name = "ravi kumar ravi";
console.log("Name",name);
console.log(typeof(name));
let c ;
console.log(typeof c)



let x = undefined ;
console.log(String(x))
console.log(Number(x))
console.log(Boolean(x))

let i = 10 ; 
let j = 3;
console.log(i%j)
console.log(i++)
console.log(i)
console.log(--i)
console.log(i+=j)
console.log(i -=j)
console.log(i *= 2)
console.log(i ** 2)

let m = 5 ; 
let n = 3 ; 
let o = "5" ; 

console.log( m==n)
console.log(m != n)
console.log( m == o)
console.log(m === o)
console.log( m !== o)

let ab = true ;
let cd = false ; 

console.log(ab && cd)
console.log(ab || cd)
console.log(!ab)

let ef = 5 ;
let fe = 3 ;
console.log(ef&fe)
console.log(ef|fe)
console.log(ef^fe)
console.log(~ef)
console.log(ef<<1)
console.log(ef>>1)
console.log((ef & 1) == 0)

let num = 8 ; 
if(num%2==0)
{
 console.log("Even Number")
}else{
    console.log("Odd Number")
}

let age = 26 ; 
if(age >= 18){
    console.log("Can Vote")
}else{
    console.log("Can't Vote")
}

const marks = 98 ; 
if(marks >= 90)
{
  console.log("A+")
} else if( marks >=60 )
{
    console.log("A")
}else if( marks >= 40 )
{
    console.log("B")
}else{
    console.log("Failed")
}

const result =(marks >= 40)?"PASSED" : "FAILED";
console.log("Result : ",result)

let grade = "A";
switch(grade){
    case "A":
        console.log("Very Good")
        break;
    case "B":
        console.log("Good")
        break;
    default:
        console.log("Fail")
}

for(let i=1 ; i<=10 ; i++)
{
    console.log(i)
}

let count = 11 ; 
do{
    console.log("Do Loop")
}
while(count <= 10);

//prime number 1-50 
//count even and odd number 1-10

const words = ["Hi","Welcome","To","My","Web Pages"];
for(let i=0 ; i<words.length ; i++){
    setTimeout(function(){
        document.getElementById("message").innerText=words[i];
    },i*1000)
}


//Arrays 

let list1 = ["apple","mango","banana"];
let list2 = ["papaya","orange"];
let finalList = list1.concat(list2);
console.log(finalList);

//splic - add new elements 

finalList.splice(2,0,"lemon");
console.log(finalList)
