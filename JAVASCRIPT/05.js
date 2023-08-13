// if-else statements

function checkEligibility(age){
    if (age>18){
        return true
    }
    else{
        return false
    }
}

console.log(checkEligibility(19))

console.log("----------------------------------------")

//if-else statement using logical operator

function myEligiblity(age,bribe){
    if (age>18 && bribe>100){
        console.log("You are eligible")
    }
    else{
        console.log("You are not eligible")
    }

}

myEligiblity(22,202)

console.log("----------------------------------------")

//if-else function using the NOT operator

function ismature(mature){
    if(!mature){
        console.log('You are mature')
    }
    else{
        console.log('You are not mature')
    }
}

ismature(true)