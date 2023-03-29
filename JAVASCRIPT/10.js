//when the object is passed as parameter it points towards the same address as that of original object
const myAge1 = {
    age1 : 19
}

function checkage(obj1){
    obj1.age1++
}

checkage(myAge1)
console.log(myAge1)
//myAge and obj1 are pointing towards the same value hence the change made in obj1 is also reflected on myAge1 object


console.log("----------------------------------------")

//The parameter passed in the function and the orginal variable are not same they are just copy of each other
function newage(arg){
    arg++
}

let num = 22
newage(num)
console.log(num)

//arg and num are just of each other, they are not pointing towards the same