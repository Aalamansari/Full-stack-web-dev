//for loop 
for(let i=0;i<10;i++){
    console.log(i)
}

console.log("----------------------------------")

//Using continue statement in a function to print even numbers and skip a particular no.

let evenNumbers = []

function skipNumber(number){
    for(let i=0;i<20;i++){
        if(i%2===1){
            continue
        }
        if(i===number){
            continue
        }
        evenNumbers.push(i)
    }
    return evenNumbers
}

console.log(skipNumber(10))

console.log("----------------------------------")

//using break statement to print til a particular no.

let mynumbers = []

function testnumber(num){
    for(let i=0;i<20;i++){
        if(i==num){
            break
        }
        mynumbers.push(i)
    }
    return mynumbers
}

console.log(testnumber(10))

// forEach loop:  It can be used for array only. 
// It doesn't make changes in the array, all the changes are made to a temporary copy of real elements


var a = [1,2,3,4,5,6,7]

a.forEach(function(val){
    console.log(val+1)
})


// for-in loop: used only for objects

var obj = {
    name: 'Aalam',
    age: 21,
    city: 'bhopal'
}

for(var key in obj){
    console.log(key,obj[key])
}

// do-while loop
var c = 12

do{
    console.log(c)
    c++
}
while(c<12)

// the body of do will run for the 1st time even if the while condition  is false