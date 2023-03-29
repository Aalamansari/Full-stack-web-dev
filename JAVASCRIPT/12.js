//Using ES6 destructuring on arrays 

const arr1 = [1,2,3]

const arr2 = [4,5,6]

const arr3 = [...arr1,...arr2]
console.log(arr3)


console.log('--------------------------------------------')
//Using ES6 destructuring on objects

const obj1 = {
    name: 'Aalam'
}

const obj2 = {
    age:22
}

const obj3 = {
    ...obj1,
    ...obj2
}

console.log(obj3)

console.log('--------------------------------------------')

const myarr = [1,2,3,4,5,6,7]

const newMappedArray = myarr.map(function(element){
    console.log(element)
    return 100
})

console.log(myarr,newMappedArray)