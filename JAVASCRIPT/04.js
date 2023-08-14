/*
function functionName(){
    function body
}
*/

function myconsole(){
    console.log('This is my console')
}

myconsole() //calling the function using its name

console.log("----------------------------------------")

//function using arguments

let myage = 22
function newage(increaseby){
    myage = myage + increaseby
}

newage(5)
console.log(myage)  

console.log("----------------------------------------")

//function with multiple parameters 

function check(var1,var2){
    console.log(var1)
    console.log(var2)
}

check(3)

console.log("----------------------------------------")

//function with a return statement

function findsum(var3,var4){    //==> the variables we use to store the passed values are called parameters
    return var3 + var4
}

const sum = findsum(5,6)   //==> The values we pass during the calling are called arguments
console.log(sum)


// callback function: An normal function which runs after a specified time

// first class function ==> Functions stored in a variable

function abcd(a){
    a();
}

abcd(function(){console.log('First class function');})