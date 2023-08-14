/*

primitives ==> Values that copy function gives a real copy of the main data 
reference = [] () {}
Any value that on copy function doesn't get copy for real but gives the reference of the real value is reference datatype

*/

//integer type
const var1 = 24

//string type
const var2 = 'Aalam'

//boolean type
const var3 = true
const var4 = false

//Array type
const var5 = [22,'Aalam',false]

//undefined type
let var6 = undefined

//null type
let var7 = null

//typeof function
const var8 = (typeof var6)

console.log(var1)
console.log(var2)
console.log(var3)
console.log(var4)
console.log(var5)
console.log(var5[2]) //print the element of specific index
console.log(var6)   //undefined is the value of the variable that has not been defined yet
console.log(var7)
console.log(var8)  //typeof gives the type of data stored in the variable


// Spread operator (...)
var arr = [1,2,3,4] // ==> to copy the value of arr in b we use spread operator
var b = [...arr]
console.log(b)

var dict1 = {'name1':'Aalam','name2':'Asad','name3':'Awaiz'}
var dict2 = {...dict1}
console.log(dict2)

// Now if we make changes in the copied data, the original source won't change



// delete an property from the object
var obj = {
    name: 'Aalam',
    age: 21
}

delete obj.name
console.log(obj)