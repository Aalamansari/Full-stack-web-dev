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
