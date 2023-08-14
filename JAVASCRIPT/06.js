let arr1 = []

//push function adds the element at the end of the array
arr1.push('Aalam')
arr1.push('Awaiz')
console.log(arr1)

console.log("---------------------------------")


//unshift function adds the elements at the start of the array
arr1.unshift("Asad")
console.log(arr1)

//shift function removes the elements at the start of the array
arr1.shift()

//pop function returns the last value from the array and remove it from it
arr1.pop()
console.log(arr1) 

//inserting at a particular index of the array
let arr2 = ['Zeus','Poseidon','Hades']
arr2[1] = 'Kronos'
console.log(arr2)


//splice funcition removes elements from array from a particular index, it also takes how much element needs to be removed
var arr = [1,2,3,4,5,6]
arr.splice(2,2)
console.log(arr)