/* Javascript has two versions: ES5 and ES6

ES5 ==> contains only "var" keyword
ES6 ==> contains "let" and "const" keyword

*/

const var1 = 23
//cannot change the value of const once assigned
console.log(var1)

let var2 = 'Aalam'
//can change the value of the let once already assigned
console.log(var2)

var a = 'silly'
//similar to let for creating an variable 


// hoisting => All variable and functions are hoisted which means there declaration is moved on top of the code

console.log(avar);  // ==> gives undefined as o/p
var avar = 12;

/*

undefined ==> Existence mai hai but uska value nai pata
not-defined ==> Existence mai he nai hai

*/

// var are functioned scope 

function test1(){
    for(var i=0;i<5;i++){   // ==> var i can be used anywhere in this function
        console.log(i)
    }
    console.log(i)
}

test1()
// let are braces scoped

function test2(){
    for(let j=0;j<5;j++){   // ==> let j can be used anywhere in the for loop only
        console.log(j)
    }
    console.log(j)
}

test2()


// var adds up to the window object which is visible in the console and threatens the security of the system
// const and let doesn't add to the window object


/*
Browser context API consist of 3 things: Window object, Stack, Heap
*/

/*
Execution context: It is created whenever a function is called and it contains of 3 things
1. Variables of the function
2. Function inside the called function
3. Lexical environment ==> It's like an chart that tells what the parent func can or can't access inside it

*/