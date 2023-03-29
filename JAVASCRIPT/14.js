const promise1 = fetch('data.json')

promise1.then(response=>{
    const promise2 = response.json()
    promise2.then(data=>{
        console.log(data)
    })
})